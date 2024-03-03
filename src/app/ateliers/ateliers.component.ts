import {Component, Input, OnInit} from '@angular/core';
import {Atelier, AteliersService} from '../services/ateliers.service';
import {MatDialog} from '@angular/material/dialog';
import {AtelierEditDialogComponent} from '../atelier-edit-dialog/atelier-edit-dialog.component';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-ateliers',
  templateUrl: './ateliers.component.html',
  styleUrls: ['./ateliers.component.css']
})
export class AteliersComponent implements OnInit {

  @Input()
  public logged: boolean;

  constructor(private service: AteliersService, private dialog: MatDialog) {
  }

  ateliersList: Array<Atelier> = [];

  async ngOnInit(): Promise<void> {
    this.ateliersList = await this.service.getAteliers();
  }

  async handleClickDeleteAtelier(id: string) {
    await this.service.deleteAtelier(id);
    this.ateliersList = this.ateliersList.filter(atelier => atelier.id !== id);
  }

  async showNewAtelierDialog() {
    const dialogRef = this.dialog.open(AtelierEditDialogComponent, {
      width: '300px',
      position: {
        top: '10rem'
      }
    });

    const newAtelier: Atelier = await dialogRef.afterClosed().toPromise();
    if (newAtelier) {
      this.ateliersList.push(newAtelier);
    }
  }

    protected readonly formatDate = formatDate;

  formatAtelierDate(dateString: string) {
    const date = new Date(dateString);
    const utcDate = new Date(
      Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes()
      )
    )

    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    const formattedDate = Intl.DateTimeFormat(Intl.DateTimeFormat().resolvedOptions().locale, dateOptions).format(utcDate)
    console.log(formattedDate)
    return `${formattedDate}`

  }
}
