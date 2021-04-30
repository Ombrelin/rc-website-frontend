import {Component, Inject, OnInit} from '@angular/core';
import {FilesService} from '../services/files.service';
import {Concert, ConcertsService} from '../services/concerts.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-concert-edit-dialog',
  templateUrl: './concert-edit-dialog.component.html',
  styleUrls: ['./concert-edit-dialog.component.css']
})
export class ConcertEditDialogComponent implements OnInit {
  mobile: boolean = window.matchMedia('(max-width: 768px)').matches;
  loading = false;
  update = false;
  concert: Concert;
  imageFile: File;
  flyerFile: File;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private files: FilesService,
    private concerts: ConcertsService,
    private dialogRef: MatDialogRef<ConcertEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Concert
  ) {
    if (data) {
      this.update = true;
      this.concert = data;
    } else {
      this.concert = new Concert();
    }
  }

  get modelTitle(){
    return this.update ? "Modification du concert" : "Nouveau concert"
  }

  getHoursWithoutSeconds(concert: Concert) : Array<string> {
    return concert.hours ? concert.hours.map(hour => hour.slice(0,5)) : [];
  }


  ngOnInit(): void {

  }

  async onSubmit() {
    this.loading = true;

    let imageId;
    if (!this.update || this.imageFile) {
      imageId = await this.files.upload(this.imageFile);
    } else {
      imageId = this.concert.image;
    }
    let flyerId: string;
    if (this.flyerFile) {
      flyerId = await this.files.upload(this.flyerFile);
    } else {
      flyerId = this.concert?.flyer;
    }

    this.concert.image = imageId;
    this.concert.flyer = flyerId;

    if (this.concert.dateTime) {
      const date = new Date(this.concert.dateTime);
      this.concert.dateTime = new Date(
        Date.UTC(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes()
        )
      ).toISOString();
    } else {
      this.concert.dateTime = new Date(0).toISOString();
    }

    this.concert.hours = this.concert.hours?.map(hour => hour.length == 5 ? `${hour}:00` : hour);

    if (!this.update) {
      this.concert = await this.concerts.createConcert(this.concert);
    } else {
      this.concert = await this.concerts.updateConcert(this.concert);
    }

    this.loading = false;
    this.dialogRef.close(this.concert);
  }

  onImageFileChange(files: FileList) {

    if (files.length > 0) {
      const file = files[0];
      this.imageFile = file;
    }
  }

  onFlyerFileChange(files: FileList) {
    if (files.length > 0) {
      const file = files[0];
      this.flyerFile = file;
    }
  }

  remove(hour: string): void {
    const index = this.concert.hours.indexOf(hour);

    if (index >= 0) {
      this.concert.hours.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {

      if(!value.trim().match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)){
        return;
      }

      if(!this.concert.hours){
        this.concert.hours = new Array<string>();
      }

      this.concert.hours.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  handleClickDeleteHour(hour: string) {
    this.concert.hours = this.concert.hours.filter(h => hour !== h);
  }
}
