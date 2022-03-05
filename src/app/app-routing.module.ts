import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExcusesComponent } from './excuses/excuses.component';
import { MyExcusesComponent } from './my-excuses/my-excuses.component'

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'excuses', component: ExcusesComponent},
  {path: 'my-excuses', component: MyExcusesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
