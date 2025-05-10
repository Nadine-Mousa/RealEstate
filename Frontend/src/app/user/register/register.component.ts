import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registrationForm: FormGroup;
  passwordVisible = false;
  confirmPasswordVisible = false;
  user: User;

  constructor(private userService: UserService) {
  }


  ngOnInit(){
    this.registrationForm = new FormGroup({
      // userType: new FormControl('buyer', [Validators.required]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]),
      confirmPassword: new FormControl('', Validators.required),
      termsAccepted: new FormControl(false, [Validators.requiredTrue])
    }, this.matchingPasswordValidator);
  }

    matchingPasswordValidator(formGroup: FormGroup): Validators {
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
      

    } else {
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
    return this.registrationForm.get('firstName') as FormControl;
  }
  get lastName(){
    return this.registrationForm.get('lastName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get phone(){
    return this.registrationForm.get('phone') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
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
