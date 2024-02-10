import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlfriendComponent } from './girlfriend/girlfriend.component';
import { CalculatingComponent } from './calculating/calculating.component';
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  { path: 'girlFriend', component: GirlfriendComponent }, 
  { path: 'girlFriend/calculating', component: CalculatingComponent},
  { path: 'girlFriend/result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
