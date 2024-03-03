import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {AccueilComponent} from './accueil/accueil.component';
import {ConcertDialogComponent} from './concert-dialog/concert-dialog.component';
import {MarkdownModule} from 'ngx-markdown';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AteliersComponent} from './ateliers/ateliers.component';
import {AtelierEditDialogComponent} from './atelier-edit-dialog/atelier-edit-dialog.component';
import {TokenInterceptor} from './security/token.interceptor';
import {ConcertsComponent} from './concerts/concerts.component';
import {ConcertEditDialogComponent} from './concert-edit-dialog/concert-edit-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConcertDialogComponent,
    LoginDialogComponent,
    AteliersComponent,
    AtelierEditDialogComponent,
    ConcertsComponent,
    ConcertEditDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
