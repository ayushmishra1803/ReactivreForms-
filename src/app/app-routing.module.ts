import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplefromComponent } from './simplefrom/simplefrom.component';
import { UserFromComponent } from './user-from/user-from.component';

const routes: Routes = [
  {path:"User",component:UserFromComponent},{path:"SimpleFrom",component:SimplefromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
