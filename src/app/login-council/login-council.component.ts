import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router,NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-login-council',
  templateUrl: './login-council.component.html',
  styleUrls: ['./login-council.component.css']
})
export class LoginCouncilComponent implements OnInit {
  userName1Council : String = "";
  responseCouncil :any;
  userIdCouncil : string ;

  constructor(private http: HttpClient, private route :Router) { }

  ngOnInit() {
      }

      loginCouncil() {
        //console.log(this.userName1);
        let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-identity-request?councilId=' + this.userName1Council);
         loginDetails.subscribe((responseCouncil) => console.log(responseCouncil));
       
        //sending the control to user component upon success in login
       
        this.route.navigate(['logCouncil/council', { userIdCouncil :this.userName1Council}]);
       
      }

}
