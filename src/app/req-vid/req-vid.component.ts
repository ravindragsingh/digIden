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
  // example:string;
  // constructor(private router: Router) {
  //   const navigation = this.router.getCurrentNavigation();
  //   const state = navigation.extras.state as {example: string};
  //   this.example = state.example;
  //   console.log(this.example);
  //  }

  constructor(private route: ActivatedRoute, private http: HttpClient) {} 

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.userId= params['userId']; 
      
      console.log(this.userId + " Hi");
      let loginDetails = this.http.get('https://vendor-identity.mybluemix.net/get-vendorInfo?vendorId=' + this.userId);
      loginDetails.subscribe((response) => console.log(response.data.msg.Email));
     
      });

  
      

  }

}
