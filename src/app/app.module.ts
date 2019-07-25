import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterNowComponent } from './register-now/register-now.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ReqVidComponent } from './req-vid/req-vid.component';
import { HttpClientModule } from '@angular/common/http';
import { VerificationComponent } from './req-vid/verification/verification.component';
import { InspectionComponent } from './req-vid/inspection/inspection.component';
import { TrustScoreComponent } from './req-vid/trust-score/trust-score.component';
import { LoginCouncilComponent } from './login-council/login-council.component';
import { CouncilLandingPageComponent } from './council-landing-page/council-landing-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterNowComponent,
    StartPageComponent,
    ReqVidComponent,
    VerificationComponent,
    InspectionComponent,
    TrustScoreComponent,
    LoginCouncilComponent,
    CouncilLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
    
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
