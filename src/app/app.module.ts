import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { AccueilComponent } from './accueil/accueil.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ConcertDialogComponent} from './concert-dialog/concert-dialog.component';
import {MarkdownModule} from 'ngx-markdown';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConcertDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MarkdownModule.forRoot(),
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ConcertDialogComponent
  ]
})
export class AppModule { }
