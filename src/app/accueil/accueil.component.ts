import {Component, OnInit, ViewChild} from '@angular/core';


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


  constructor() {
  }

  ngOnInit() {
  }
}
