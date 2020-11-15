import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule} from '@angular-material-components/datetime-picker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports: [MatSlideToggleModule, MatProgressSpinnerModule, NgxMatNativeDateModule, NgxMatDatetimePickerModule,
    MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatSidenavModule,
    MatDialogModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatChipsModule],
  exports: [MatSlideToggleModule, MatProgressSpinnerModule, NgxMatNativeDateModule, NgxMatDatetimePickerModule,
    MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatSidenavModule,
    MatDialogModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatChipsModule]
})
export class MaterialModule {
}
