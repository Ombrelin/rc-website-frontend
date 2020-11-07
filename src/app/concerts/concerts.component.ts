import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Concert, ConcertsService} from '../services/concerts.service';
import {ConcertDialogComponent} from '../concert-dialog/concert-dialog.component';
import {ConcertEditDialogComponent} from '../concert-edit-dialog/concert-edit-dialog.component';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  @Input()
  public logged: boolean;

  public concertsList: Array<Concert>;

  constructor(private dialog: MatDialog,
              private concertsService: ConcertsService
  ) {
  }

  async ngOnInit() {
    this.concertsList = await this.concertsService.getConcerts();
  }

  openConcertModale(concert: Concert) {
    this.dialog.open(ConcertDialogComponent, {
      width: '950px',
      data: concert
    });
  }

  async showNewConcertDialog() {
    const dialogRef = this.dialog.open(ConcertEditDialogComponent, {
      width: '400px',
      position: {
        top: '5rem'
      }
    });

    const concert = await dialogRef.afterClosed().toPromise();
    if (concert) {
      this.concertsList.push(concert);
    }
  }

  async editConcert(concert: Concert) {
    const dialogRef = this.dialog.open(ConcertEditDialogComponent, {
      width: '400px',
      data: concert,
      position: {
        top: '5rem'
      }
    });
    const editedConcert = await dialogRef.afterClosed().toPromise();

    if (editedConcert) {
      this.concertsList[this.concertsList.indexOf(concert)] = editedConcert;
    }
  }

  async deleteConcert(concert: Concert) {
    await this.concertsService.deleteConcert(concert.id);
    this.concertsList = this.concertsList.filter(c => c.id !== concert.id);
  }
}
