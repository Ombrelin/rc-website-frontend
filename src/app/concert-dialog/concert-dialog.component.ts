import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Concert} from '../services/concerts.service';

@Component({
  selector: 'app-concert-dialog',
  templateUrl: './concert-dialog.component.html',
  styleUrls: ['./concert-dialog.component.css']
})
export class ConcertDialogComponent  {

  private concert: Concert;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Concert,
  ) {
    this.concert = data;
  }



}
