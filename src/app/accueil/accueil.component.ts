import {Component, OnInit, ViewChild} from '@angular/core';
import {Concert, ConcertsService} from '../services/concerts.service';
import {MatDialog} from '@angular/material/dialog';
import {ConcertDialogComponent} from '../concert-dialog/concert-dialog.component';
import {Atelier, AteliersService} from '../services/ateliers.service';


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

  public concertsList: Array<Concert>;
  public ateliersList: Array<Atelier>;
  constructor(private dialog: MatDialog,
              private concertsService: ConcertsService,
              private ateliersService: AteliersService
  ) {
  }

  ngOnInit() {
    this.concertsList = this.concertsService.getServices();
    this.ateliersList = this.ateliersService.getAteliers();
  }

  openConcertModale(concert: Concert) {
    this.dialog.open(ConcertDialogComponent, {
      width: '950px',
      data: concert
    });
  }

}

