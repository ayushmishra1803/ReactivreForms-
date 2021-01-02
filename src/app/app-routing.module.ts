import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplanationComponent } from './explanation/explanation.component';
import { SimplefromComponent } from './simplefrom/simplefrom.component';
import { UserFromComponent } from './user-from/user-from.component';

const routes: Routes = [
  { path: 'User', component: UserFromComponent },
  { path: 'SimpleFrom', component: SimplefromComponent },
  { path: 'chotu', component: ExplanationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
