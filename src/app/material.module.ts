import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule]
})
export class MaterialModule {
}
