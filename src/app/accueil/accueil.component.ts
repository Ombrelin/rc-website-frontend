import {Component, OnInit, ViewChild} from '@angular/core';
import {Concert, ConcertsService} from '../services/concerts.service';
import {MatDialog} from '@angular/material/dialog';
import {ConcertDialogComponent} from '../concert-dialog/concert-dialog.component';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @ViewChild('intro')
  private intro: HTMLElement;

  @ViewChild('concerts')
  private concerts: HTMLElement;

  @ViewChild('header')
  private header: HTMLElement;

  @ViewChild('ateliers')
  private ateliers: HTMLElement;

  @ViewChild('partenaires')
  private partenaires: HTMLElement;

  @ViewChild('enpratique')
  private enpratique: HTMLElement;

  @ViewChild('sidenav')
  private sidenav: HTMLElement;

  public logged = false;

  public concertsList: Array<Concert>;

  constructor(private dialog: MatDialog,
              private concertsService: ConcertsService
  ) {
  }

  ngOnInit() {
    this.concertsList = this.concertsService.getServices();
  }

  openConcertModale(concert: Concert) {
    this.dialog.open(ConcertDialogComponent, {
      width: '950px',
      data: concert
    });
  }

  async showLoginDialog() {
    if (!this.logged) {
      const dialogRef = this.dialog.open(LoginDialogComponent, {
        width: '260px'
      });

      this.logged = await dialogRef.afterClosed().toPromise();
    }
  }
}

