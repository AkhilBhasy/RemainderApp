import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options={
  withCredentials:true
}

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


  constructor(private http:HttpClient) { 
    
  }


  


  getEvents(uid:any){
   
    const data={
      uid
    }
    return this.http.post("http://localhost:3030/getRems",data,options)
   
  }


  login(uid: any, pswd: any) {
    const data={
      uid,
      pswd
    }
    return this.http.post("http://localhost:3030/login",data,options)
  }
  register(uid: any, uname: any, password: any) {
    const data={
      uid,
      uname,
      password
    }
    return this.http.post("http://localhost:3030/register",data)
  }
 

  addRem(uid:any,event: any, date: any) {
    const data={
      uid,
      event,
      date
    }
    return this.http.post("http://localhost:3030/addRem",data,options)

  }

}
