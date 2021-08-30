import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title="Remainder App"

  registerForm = this.fb.group(
    {
      uid: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[0-9]*')]],
      uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*'),Validators.minLength(5)]]
    }
  )

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  register() {
    if (this.registerForm.valid) {
      var uname = this.registerForm.value.uname
      var uid = this.registerForm.value.uid
      var pswd = this.registerForm.value.pswd

       this.ds.register(uid, uname, pswd)
       .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl("")
        }
      },
        (result) => {
          alert(result.error.message)

          this.router.navigateByUrl("")
        }
      )
}
  else {
alert("Invalid form")
}
  }
}