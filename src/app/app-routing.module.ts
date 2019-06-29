import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterNowComponent } from './register-now/register-now.component';


const routes: Routes = [
{path:'', component:LoginComponent},
{path:'register', component:RegisterNowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
