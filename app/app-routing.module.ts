import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'home',component:HomeComponent},
  { path: 'aboutus', component: AboutusComponent },
  { path: 'loantypes', component: LoantypesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path:'**',component:ErrorComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
