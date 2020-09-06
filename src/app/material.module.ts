import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [MatSnackBarModule, MatFormFieldModule, MatSidenavModule, MatDialogModule, MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatChipsModule],
  exports: [MatSnackBarModule, MatFormFieldModule, MatSidenavModule, MatDialogModule, MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatChipsModule]
})
export class MaterialModule {
}
