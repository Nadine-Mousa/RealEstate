import { Component } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm: UntypedFormGroup;
  passwordVisible = false;
  confirmPasswordVisible = false;
  user: User;

  constructor(private userService: UserService, private alertifyService : AlertifyService, private router: Router) {
  }


  ngOnInit(){
    this.registrationForm = new UntypedFormGroup({
      // userType: new FormControl('buyer', [Validators.required]),
      firstName: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new UntypedFormControl('', [Validators.required, Validators.minLength(2)]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      phone: new UntypedFormControl('', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:"|,.<>\/?~`])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};:"|,.<>\/?~`]+$/)
      ]),
      confirmPassword: new UntypedFormControl('', Validators.required),
      termsAccepted: new UntypedFormControl(false, [Validators.requiredTrue])
    }, this.matchingPasswordValidator);
  }

    matchingPasswordValidator(formGroup: UntypedFormGroup): Validators {
    return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null :
    {passwordMismatch: true}
  }



  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
      // Add your registration logic here

      // Add to local storage
      // this.user = Object.assign(this.user, this.registrationForm.value);
      const formValue = this.registrationForm.value;
      this.user = {
        firstName: this.registrationForm.value.firstName,
        lastName: this.registrationForm.value.lastName,
        email: this.registrationForm.value.email,
        phone: this.registrationForm.value.phone,
        password: this.registrationForm.value.password
      };
      this.userService.addUserToLocalStorage(this.user);
      this.router.navigate(['login']);
      this.alertifyService.displaySuccessNotification("User Added To local storage successfully!");
      

    } else {
      this.alertifyService.displayErrorNotification("Please correct the highlighted errors before submitting.");
      this.registrationForm.markAllAsTouched();
    }
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword'): void {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
    } else {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
  }





  // getters 
  get firstName(){
    return this.registrationForm.get('firstName') as UntypedFormControl;
  }
  get lastName(){
    return this.registrationForm.get('lastName') as UntypedFormControl;
  }
  get email(){
    return this.registrationForm.get('email') as UntypedFormControl;
  }
  get phone(){
    return this.registrationForm.get('phone') as UntypedFormControl;
  }
  get password(){
    return this.registrationForm.get('password') as UntypedFormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as UntypedFormControl;
  }


}




















// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   registrationForm: FormGroup;

//   constructor() { }

//   ngOnInit() {
//     this.registrationForm = new FormGroup({
//       name : new FormControl('Default Username', Validators.required),
//       email: new FormControl(null, [Validators.required, Validators.email]),
//       password: new FormControl(null, Validators.required),
//       confirmPassword: new FormControl(null, Validators.required),

//     }, this.matchingPasswordValidator)

//   }

//   matchingPasswordValidator(formGroup: FormGroup): Validators {
//     return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null :
//     {notmatched: true}
//   }

//   onSubmit(){
//     console.log(this.registrationForm);
//   }

//   // getters for all form controls
//   get name(){
//     return this.registrationForm.get('name') as FormControl;
//   }
//   get email(){
//     return this.registrationForm.get('email') as FormControl;
//   }
//   get password(){
//     return this.registrationForm.get('password') as FormControl;
//   }
//   get confirmPassword(){
//     return this.registrationForm.get('confirmPassword') as FormControl;
//   }

// }
