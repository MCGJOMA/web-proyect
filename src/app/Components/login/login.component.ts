import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private fireBaseError: FirebaseErrorService
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    this.loading = true;

    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        if (user.user?.emailVerified) {
          this.router.navigate(['/dashboards']);
        } else {
          this.router.navigate(['/verificar-correo']);
        }
      })
      .catch((error) => {
        this.loading = false;
        this.toastr.error(this.fireBaseError.codeError(error.code), 'Error');
      });
  }
}
