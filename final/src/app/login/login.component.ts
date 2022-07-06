import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginForm!: FormGroup;
  errorMessage: any;

  constructor(private authservice:AuthService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm()
  }


initForm() {
  this.loginForm=this.fb.group({
    email:new FormControl('',[
      Validators.required,
      Validators.email

    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6)

    ])
  })
}

get email(){
  return this.loginForm.get('email')
}
get password() {
  return this.loginForm.get('password')
}



}
