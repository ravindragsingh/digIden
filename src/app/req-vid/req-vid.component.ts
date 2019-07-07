import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
 
  // example:string;
  // constructor(private router: Router) {
  //   const navigation = this.router.getCurrentNavigation();
  //   const state = navigation.extras.state as {example: string};
  //   this.example = state.example;
  //   console.log(this.example);
  //  }

  
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    
  } 



  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId= params['userId']; 
      
      console.log(this.userId + " from Req Component");
      let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userId);
      loginDetails.subscribe((response) => console.log(response));

      // this.email = this.response.data.msg.Email;
      });
  }

  requestVid() {
    
    let requestVidCall = this.http.get('https://vendor-identity.mybluemix.net/request-digital-identity?vendorId=vendor1&councilId=council1');
    
    requestVidCall.subscribe((responseVid) => console.log(responseVid));
       
  }

}
