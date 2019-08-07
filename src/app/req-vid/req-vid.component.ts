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
  data: any;
 
  constructor(private route: ActivatedRoute, private http: HttpClient) {
   
  } 
  ngOnInit() {
    //receving the userID
    this.sub = this.route.params.subscribe(params => {
      this.userId= params['userId']; 
      
      console.log(this.userId + " from Req Component");
            });
    //API call for Digital ID requested
      let requestVidCall = this.http.get('https://vendor-identity.mybluemix.net/request-digital-identity?vendorId=' + this.userId + '&councilId=council1');
    
    requestVidCall.subscribe(
      (retVal) => {
        this.responseVid = retVal;
        //console.log(retVal)
      }
     );

    //API call to get the data 
    let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userId);
    loginDetails.subscribe(
      
      (logDet) => {
        this.loginDetails = logDet;
        //console.log(logDet);
      }
      );
  }

  requestVid() {
    
    let requestVidCall = this.http.get('https://vendor-identity.mybluemix.net/request-digital-identity?vendorId=' + this.userId + '&councilId=council1');
    
    requestVidCall.subscribe(
        (retVal) => {
          //console.log(retVal)   
          this.onClickResponseVid = retVal;
          console.log(this.onClickResponseVid.data.msg);
        }
      );

      let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userId);
    
      loginDetails.subscribe(
        (logDet) => {
          console.log(logDet)   
          this.loginDetails = logDet;
          console.log(this.loginDetails.data.msg.VendorStatus)
        }
      );
    // let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userId);
    // loginDetails.subscribe((response) => console.log(response));
    //    xy = this.response.data.msg.Email;
  }

}
