import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  roleSelection = [
   { id:1, name: "Vendor"},
   { id:2, name: "Business"},
   { id:1, name: "City Council"}
   ]

}
