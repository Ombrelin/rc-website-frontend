import {Component, OnInit, ViewChild} from '@angular/core';
import {Concert, ConcertsService} from '../services/concerts.service';
import {MatDialog} from '@angular/material/dialog';
import {ConcertDialogComponent} from '../concert-dialog/concert-dialog.component';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

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

  public logged: boolean = sessionStorage.getItem("token") !== null;

  constructor(private dialog: MatDialog) {
    console.log(this.logged);
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

