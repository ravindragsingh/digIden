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
  
constructor(private route :ActivatedRoute, private http :HttpClient) { }

  ngOnInit() {
    //receiving the suerID
    this.sub = this.route.params.subscribe(params => {
      this.userIdCouncil = params['userIdCouncil'];
      console.log(this.userIdCouncil + " City Council UserID");
    })

    //API call to get the vendors requested for VID verification 

    let councilAllRequests = this.http.get(' https://vendor-identity.mybluemix.net/get-identity-request?councilId=' + this.userIdCouncil)
    councilAllRequests.subscribe(
      (councilAllResponse) => {
        this.CouncilAllResponseSend = councilAllResponse ;
        console.log(councilAllResponse);
      }
    );
  }


}
