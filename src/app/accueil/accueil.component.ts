import {Component, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';


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

