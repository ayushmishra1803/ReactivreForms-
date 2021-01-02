import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFromComponent } from './user-from/user-from.component';

const routes: Routes = [
  {path:"User",component:UserFromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
