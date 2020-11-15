import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Atelier, AteliersService} from '../services/ateliers.service';

@Component({
  selector: 'app-atelier-edit-dialog',
  templateUrl: './atelier-edit-dialog.component.html',
  styleUrls: ['./atelier-edit-dialog.component.css']
})
export class AtelierEditDialogComponent implements OnInit {

  atelier = new Atelier();

  mobile: boolean = window.matchMedia('(max-width: 768px)').matches;

  constructor(private dialogRef: MatDialogRef<AtelierEditDialogComponent>,
              private service: AteliersService
  ) {
  }

  ngOnInit(): void {
  }

  async onSubmit() {

    this.atelier = await this.service.createAtelier(this.atelier);

    this.dialogRef.close(this.atelier);
  }


}
