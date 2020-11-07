import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FilesService} from '../services/files.service';
import {Concert, ConcertsService} from '../services/concerts.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-concert-edit-dialog',
  templateUrl: './concert-edit-dialog.component.html',
  styleUrls: ['./concert-edit-dialog.component.css']
})
export class ConcertEditDialogComponent implements OnInit {
  createConcertForm: FormGroup;
  mobile: boolean = window.matchMedia('(max-width: 768px)').matches;
  loading = false;
  update = false;
  concert: Concert;

  constructor(
    private files: FilesService,
    private concerts: ConcertsService,
    private dialogRef: MatDialogRef<ConcertEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Concert
  ) {
    if (data) {
      this.update = true;
      this.concert = data;
    }
    this.createConcertForm = new FormGroup({
      title: new FormControl(this.update ? data.title : '', [Validators.required]),
      dateTime: new FormControl(this.update ? data.dateTime : '', []),
      location: new FormControl(this.update ? data.location : '', [Validators.required]),
      artist: new FormControl(this.update ? data.artist : '', [Validators.required]),
      description: new FormControl(this.update ? data.description : '', [Validators.required]),
      image: new FormControl('', this.update ? [] : [Validators.required]),
      imageFile: new FormControl('', this.update ? [] : [Validators.required]),
      flyer: new FormControl(),
      flyerFile: new FormControl(),
    });
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    this.loading = true;
    if (this.createConcertForm.invalid) {
      return;
    }
    let imageId;
    if (!this.update || this.image.value) {
      imageId = await this.files.upload(this.imageFile.value);
    } else {
      imageId = this.concert.image;
    }
    let flyerId: string;
    if (this.flyer.value) {
      flyerId = await this.files.upload(this.flyerFile.value);
    } else {
      flyerId = this.concert?.flyer;
    }

    const date = new Date(this.dateTime.value);
    let concert = new Concert(
      this.update ? this.concert.id : undefined,
      this.title.value,
      this.dateTime.value ? new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())).toISOString() : new Date(0).toISOString(),
      this.location.value,
      this.artist.value,
      this.description.value,
      imageId,
      flyerId
    );
    console.log(concert);
    if (!this.update) {
      concert = await this.concerts.createConcert(concert);
    } else {
      concert = await this.concerts.updateConcert(concert);
      this.concert = concert;
    }

    this.loading = false;
    this.dialogRef.close(concert);
  }

  onImageFileChange(files: FileList) {

    if (files.length > 0) {
      const file = files[0];
      this.createConcertForm.patchValue({
        imageFile: file
      });
    }
    console.log(this.imageFile.value);
  }

  onFlyerFileChange(files: FileList) {
    if (files.length > 0) {
      const file = files[0];
      this.createConcertForm.patchValue({
        flyerFile: file
      });
    }
  }

  get title() {
    return this.createConcertForm.get('title');
  }

  get dateTime() {
    return this.createConcertForm.get('dateTime');
  }

  get location() {
    return this.createConcertForm.get('location');
  }

  get artist() {
    return this.createConcertForm.get('artist');
  }

  get description() {
    return this.createConcertForm.get('description');
  }

  get image() {
    return this.createConcertForm.get('image');
  }

  get imageFile() {
    return this.createConcertForm.get('imageFile');
  }

  get flyer() {
    return this.createConcertForm.get('flyer');
  }

  get flyerFile() {
    return this.createConcertForm.get('flyerFile');
  }
}
