import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private service: LoginService, private snackBar: MatSnackBar, private dialogRef: MatDialogRef<LoginDialogComponent>) {
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.login.valid && this.password.valid) {
      try {
        await this.service.login(this.login.value, this.password.value);
        this.snackBar.open('Connexion réussie', null, {
          duration: 2000,
        });
        this.dialogRef.close();
      } catch (e) {
        this.snackBar.open(e.message, null, {
          duration: 2000,
        });
      }
    }
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
