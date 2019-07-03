import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userName1 : string = "";
  response: any;

  roleSelection = [
   { id:1, name: "Vendor"},
   { id:2, name: "Business"},
   { id:1, name: "City Council"}
   ]

constructor (private http: HttpClient){

}

ngOnInit() {
  
}

login() {
  console.log(this.userName1);
  let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userName1);
  loginDetails.subscribe((response) => console.log(response));
}
}
