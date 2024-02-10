import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlfriendComponent } from './girlfriend/girlfriend.component';
import { CalculatingComponent } from './calculating/calculating.component';
const routes: Routes = [
  { path:'girlFriend', component: GirlfriendComponent},
  { path:'girlFriend/calculating', component: CalculatingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
