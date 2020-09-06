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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginDialogComponent} from './dialogs/login-dialog/login-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {TokenInterceptor} from './security/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConcertDialogComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MarkdownModule.forRoot(),
    MatCarouselModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [
    ConcertDialogComponent,
    LoginDialogComponent
  ]
})
export class AppModule { }
