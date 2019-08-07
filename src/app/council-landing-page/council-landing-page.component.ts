import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

  

@Component({
  selector: 'app-council-landing-page',
  templateUrl: './council-landing-page.component.html',
  styleUrls: ['./council-landing-page.component.css']
})
export class CouncilLandingPageComponent implements OnInit {
private sub : any;
userIdCouncil : string ;
councilAllResponse : any;
CouncilAllResponseSend : any;
status : string ;
value1 = "hello data binding";
councilApproveResponse : any;
councilApproveSend : any;
  
constructor(private route :ActivatedRoute, private http :HttpClient) { 
  this.sub = this.route.params.subscribe(params => {
  this.userIdCouncil = params['userIdCouncil'];
  console.log(this.userIdCouncil + " City Council UserID");
})

}

  ngOnInit() {
    //receiving the suerID
    // this.sub = this.route.params.subscribe(params => {
    //   this.userIdCouncil = params['userIdCouncil'];
    //   console.log(this.userIdCouncil + " City Council UserID");
    // })

    //API call to get the vendors requested for VID verification 

    let councilAllRequests = this.http.get(' https://vendor-identity.mybluemix.net/get-identity-request?councilId=' + this.userIdCouncil)
    councilAllRequests.subscribe(
      (councilAllResponse) => {
        this.CouncilAllResponseSend = councilAllResponse ;
        console.log(councilAllResponse);
      }
    );
  }

  approveReq() {
    let councilAllRequests = this.http.get(' https://vendor-identity.mybluemix.net/get-identity-request?councilId=' + this.userIdCouncil)
    councilAllRequests.subscribe(
      (councilAllResponse) => {
        this.CouncilAllResponseSend = councilAllResponse ;
        //console.log(councilAllResponse.data.msg[0].vendorId);
      }
    );

    let councilApprove = this.http.get('https://vendor-identity.mybluemix.net/update-vendorInfo?vendorId=' + this.CouncilAllResponseSend.data.msg[1].vendorId + '&councilId=' + this.userIdCouncil +'&vendor_status=verified')
    councilApprove.subscribe(
      (councilApproveResponse) => {
        this.councilApproveSend = councilApproveResponse ;
        console.log(councilApproveResponse);
      }
    );
  }
}
