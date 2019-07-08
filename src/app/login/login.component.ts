import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userName1 : string = "";
  response: any;
  userId : string;

  roleSelection = [
   { id:1, name: "Vendor"},
   { id:2, name: "Business"},
   { id:1, name: "City Council"}
   ]

constructor (private http: HttpClient, private route : Router){

}

ngOnInit() {
  
}

login() {
  //console.log(this.userName1);
  let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userName1);
   loginDetails.subscribe((response) => console.log("response"));
 
  //sending the control to user component upon success in login
 
  this.route.navigate(['/user', { userId :this.userName1}]);
 
}
}
