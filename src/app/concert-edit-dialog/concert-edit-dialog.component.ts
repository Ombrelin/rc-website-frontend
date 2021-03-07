import {Component, Inject, OnInit} from '@angular/core';
import {FilesService} from '../services/files.service';
import {Concert, ConcertsService} from '../services/concerts.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

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

  ngOnInit(): void {

  }

  async onSubmit() {
    this.loading = true;

    let imageId;
    if (!this.update && this.imageFile) {
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
}
