import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

title="Remainder App"


addRemForm = this.fb.group(
  {
    date: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[0-9/-]*')]],
    event: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]*')]],
  }
)

userName:any
uid:any

  constructor(private ds: DataService, private fb: FormBuilder,private router:Router) { 
    this.userName=localStorage.getItem("userName")
    this.uid=localStorage.getItem("currentAcc")
  }

  ngOnInit(): void {
  }


  addRem(){
    if (this.addRemForm.valid) {
      var uid = this.uid
     
      var event = this.addRemForm.value.event
      var date = this.addRemForm.value.date
     
      this.ds.addRem(uid,event,date)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=> {
        alert(result.error.message)
        
      }
      )
    }
    else {
      alert("Invalid form")
    }
  }

}
