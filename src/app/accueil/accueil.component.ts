import {Component, OnInit, ViewChild} from '@angular/core';
import {Concert, ConcertsService} from '../services/concerts.service';
import {MatDialog} from '@angular/material';
import {ConcertDialogComponent} from '../concert-dialog/concert-dialog.component';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @ViewChild('intro', {static: false})
  private intro: HTMLElement;

  @ViewChild('concerts', {static: false})
  private concerts: HTMLElement;


  @ViewChild('header', {static: false})
  private header: HTMLElement;

  @ViewChild('ateliers', {static: false})
  private ateliers: HTMLElement;

  @ViewChild('partenaires', {static: false})
  private partenaires: HTMLElement;

  @ViewChild('enpratique', {static: false})
  private enpratique: HTMLElement;

  @ViewChild('sidenav', {static: false})
  private sidenav: HTMLElement;

  public concertsList: Array<Concert>;

  constructor(private dialog: MatDialog,
              private service: ConcertsService
  ) {
  }

  ngOnInit() {
    this.concertsList = this.service.getServices();
  }

  openConcertModale(concert: Concert) {
    this.dialog.open(ConcertDialogComponent, {
      width: '950px',
      data: concert
    });
  }

}

