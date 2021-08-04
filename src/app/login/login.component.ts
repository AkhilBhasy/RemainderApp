import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Remainder App"

  loginForm=this.fb.group(
    {
      uid: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
      pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(5)]]
    }
  )
 

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      
      var uid = this.loginForm.value.uid
      var pswd = this.loginForm.value.pswd

    var result= this.ds.login(uid,pswd)
    if(result){
      alert("Login Sucessful")
      this.router.navigateByUrl("dashboard")
    }
  }
  else {
    alert("Invalid form")
  }
}
}



