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

  public concerts: Array<Concert>;

  public loading = true;

  constructor(private dialog: MatDialog,
              private concertsService: ConcertsService
  ) {
  }

  async ngOnInit() {
    this.concerts = await this.concertsService.getConcerts();
    console.info(this.concerts);
    this.loading = false;
  }

  get upcomingConcerts(): Concert[]{
    return (this.concerts ?? [])
      .filter(concert => !this.isDateInThePast(concert.dateTime));
  }

  get pastConcerts(){
    return (this.concerts ?? [])
      .filter(concert => this.isDateInThePast(concert.dateTime));
  }

  openConcertModale(concert: Concert) {
    this.dialog.open(ConcertDialogComponent, {
      width: '950px',
      data: concert
    });
  }

  isDateDefinitive(concert: Concert): boolean {
    return !String(concert.dateTime).includes("1970");
  }

  getHoursWithoutSeconds(concert: Concert) : Array<string> {
    return concert.hours ? concert.hours.map(hour => hour.slice(0,5)) : [];
  }

  async showNewConcertDialog() {
    const dialogRef = this.dialog.open(ConcertEditDialogComponent, {
      width: '950px',
      position: {
        top: '5rem'
      }
    });

    const concert = await dialogRef.afterClosed().toPromise();
    if (concert) {
      this.concerts.push(concert);
    }
  }

  async editConcert(concert: Concert) {
    const dialogRef = this.dialog.open(ConcertEditDialogComponent, {
      width: '950px',
      data: concert,
      position: {
        top: '5rem'
      }
    });
    await dialogRef.afterClosed().toPromise();

    this.loading = true;
    this.concerts = await this.concertsService.getConcerts();
    this.loading = false;

  }

  async deleteConcert(concert: Concert) {
    await this.concertsService.deleteConcert(concert.id);
    this.concerts = this.concerts.filter(c => c.id !== concert.id);
  }

  isDateInThePast(dateTime: string) :boolean {
    return new Date(dateTime) < new Date();
  }
}
