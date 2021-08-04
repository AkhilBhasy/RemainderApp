import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  currentUser = ""
  currentAcc=""

  users: any = {
    1000: { uid: 1000, uname: "Akhil", password: "userone", events:[] },
    1001: { uid: 1001, uname: "Shinu", password: "usertwo", events:[]},
    1002: { uid: 1002, uname: "Hiran", password: "userthree",events:[] },
    1003: { uid: 1003, uname: "Sayooj", password: "userfour", events:[] },
    1004: { uid: 1004, uname: "Binu", password: "userfive", events:[] }
  }


  constructor() { 
    this.getDetails()
  }


  saveDetails() {
    if (this.users) {
      localStorage.setItem("users", JSON.stringify(this.users))
    }
    if (this.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
    if (this.currentAcc) {
      localStorage.setItem("currentAcc", JSON.stringify(this.currentAcc))
    }
  }


  getDetails() {
    if (localStorage.getItem("users")) {
      this.users = JSON.parse(localStorage.getItem("users") || '')
    }
    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if (localStorage.getItem("currentAcc")) {
      this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')
    }
  }


  getEvents(){
    return this.users[this.currentAcc].events
  }


  login(uid: any, pswd: any) {
    let acc_details = this.users
    if (uid in acc_details) {
      if (pswd == acc_details[uid]["password"]) {
        this.currentUser = acc_details[uid]["uname"]
        this.currentAcc=uid
         this.saveDetails()
        return true
      }
      else {
        alert("Incorrect Password")
        return false
      }
    }
    else {
      alert("Invalid User")
      return false
    }
  }
  register(uid: any, uname: any, password: any) {
    let accDetails = this.users
    if (uid in accDetails) {
      return false
    }
    else {
      accDetails[uid] = {
        uid,
        uname,
        password,
      }
      this.saveDetails()
      console.log(this.users);
      return true


    }
  }
 

  addRem(uid:any,event: any, date: any) {
    
    let acc_details = this.users
   
    if (uid in acc_details) {
      
        acc_details[uid].events.push({
          Event:event,
          Date:date
        })
       console.log(acc_details[uid].events);
       
        this.saveDetails()
        return true
      }
      
    
    else {
      alert("Invalid User")
      return false
    }

  }

}
