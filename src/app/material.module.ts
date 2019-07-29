import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatChipsModule, MatCarouselModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatGridListModule, MatCardModule, MatChipsModule, MatCarouselModule]
})
export class MaterialModule {
}
