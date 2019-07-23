import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-req-vid',
  templateUrl: './req-vid.component.html',
  styleUrls: ['./req-vid.component.css']
})
export class ReqVidComponent implements OnInit {

  userId : string;
  private sub: any; 
  email: string;
  response: any;
  loginDetails: any;
  responseVid : any;
  onClickResponseVid : any;

  
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    
  } 



  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId= params['userId']; 
      
      console.log(this.userId + " from Req Component");
            });
      let requestVidCall = this.http.get('https://vendor-identity.mybluemix.net/request-digital-identity?vendorId=vendor1&councilId=council1');
    
    requestVidCall.subscribe(
      (retVal) => {
        this.responseVid = retVal;
        console.log(retVal)
      }
     );
    let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userId);
    loginDetails.subscribe((response) => console.log(response));
  }

  requestVid() {
    
    let requestVidCall = this.http.get('https://vendor-identity.mybluemix.net/request-digital-identity?vendorId=vendor1&councilId=council1');
    
    requestVidCall.subscribe(
        (retVal) => {
          console.log(retVal)   
          this.onClickResponseVid = retVal;
        }
      );

      let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userId);
    
      loginDetails.subscribe(
        (logDet) => {
          console.log(logDet)   
          this.loginDetails = logDet;
        }
      );
    // let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userId);
    // loginDetails.subscribe((response) => console.log(response));
    //    xy = this.response.data.msg.Email;
  }

}
