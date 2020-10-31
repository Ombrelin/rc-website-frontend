import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Atelier, AteliersService} from '../services/ateliers.service';

@Component({
  selector: 'app-atelier-edit-dialog',
  templateUrl: './atelier-edit-dialog.component.html',
  styleUrls: ['./atelier-edit-dialog.component.css']
})
export class AtelierEditDialogComponent implements OnInit {

  createAtelierForm = new FormGroup({
    date: new FormControl('', Validators.required)
  });

  constructor(private dialogRef: MatDialogRef<AtelierEditDialogComponent>,
              private service: AteliersService
  ) {
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.createAtelierForm.invalid) {
      return;
    }
    let newAtelier = new Atelier(undefined, new Date(this.createAtelierForm.get("date").value));
    newAtelier = await this.service.createAtelier(newAtelier);

    this.dialogRef.close(newAtelier);
  }

}
