import {Component, Input, OnInit} from '@angular/core';
import {Atelier, AteliersService} from '../services/ateliers.service';
import {MatDialog} from '@angular/material/dialog';
import {AtelierEditDialogComponent} from '../atelier-edit-dialog/atelier-edit-dialog.component';

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
    console.table(this.ateliersList);
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
}
