import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { 
  AuthService, 
  SocialUser, 
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
 } from 'ng4-social-login';
import { AuthenticationService } from '../../../../services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss']
})
export class CustomLoginComponent implements OnInit {

  loginForm: FormGroup;
  token:any;
  isLoggedIn: boolean;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService,
    private toastrService: ToastrService,
    private socialAuthService: AuthService
    ) { }

  ngOnInit() {
   
    this.token = this.authService.getToken();
    if(this.token){
      this.router.navigate(['/dashboard/dashboard/default'])
    }
    this.createLoginForm();
   
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }

  onSubmit(){
    const user = { email: this.loginForm.value.email, password: this.loginForm.value.password };
    this.authService.currentLoggingUserSubject.next(user);
    this.authService.loginUser(user)
    .subscribe((response:HttpResponse<any>) => {
      console.log("response", response)
      if(response.status === 200){
        this.router.navigate(['../one-time-password']);
      }
    }, (error) => {
      const err = error.error.message;
      this.toastrService.error(err, 'Error');
    })
   
  }

  signInWithLinkedIn(){
    this.socialAuthService.signIn(LinkedinLoginProvider.PROVIDER_ID)
    .then(userData => {
      console.log("userrrrrrrrrr linkedin", userData)
    })
  }

}
