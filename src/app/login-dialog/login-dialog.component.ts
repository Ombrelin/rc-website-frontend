import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  loginForm = new FormGroup(
    {
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  );

  constructor(private loginService: LoginService,
              private snackbar: MatSnackBar,
              private dialogRef: MatDialogRef<LoginDialogComponent>) {
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    try {
      await this.loginService.login(this.loginForm.get('login').value, this.loginForm.get('password').value);
      this.snackbar.open('Succès', null, {duration: 2000});
      this.dialogRef.close(true);
    } catch (e) {
      this.snackbar.open('Mauvais identifiants');
    }
  }
}
