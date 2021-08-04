import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

user=this.ds.currentUser
  constructor(private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  addRem(){
    if (this.addRemForm.valid) {
      var uid = this.ds.currentAcc
      var event = this.addRemForm.value.event
      var date = this.addRemForm.value.date
     
      var result = this.ds.addRem(uid,event,date)
      if (result) {
        alert("Event Added ")
      }
    }
    else {
      alert("Invalid form")
    }
  }

}
