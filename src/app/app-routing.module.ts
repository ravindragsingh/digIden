import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterNowComponent } from './register-now/register-now.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ReqVidComponent } from './req-vid/req-vid.component';
import { VerificationComponent } from './req-vid/verification/verification.component';
import { InspectionComponent } from './req-vid/inspection/inspection.component';
import { TrustScoreComponent } from './req-vid/trust-score/trust-score.component';
import { LoginCouncilComponent } from './login-council/login-council.component';
import { CouncilLandingPageComponent } from './council-landing-page/council-landing-page.component';


const routes: Routes = [
{path:'', component:StartPageComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterNowComponent},
{path:'user', component:ReqVidComponent},
{path:'user/verification', component:VerificationComponent},
{path:'user/inspection', component:InspectionComponent},
{path:'user/trustscore', component:TrustScoreComponent},
{path:'logCouncil', component:LoginCouncilComponent},
{path:'logCouncil/council', component:CouncilLandingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
