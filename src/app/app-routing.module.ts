import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlfriendComponent } from './girlfriend/girlfriend.component';
import { BoyfriendComponent } from './boyfriend/boyfriend.component';
import { CalculatingComponent } from './calculating/calculating.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'boyFriend', component: BoyfriendComponent},
  { path: 'boyFriend/calculating', component: CalculatingComponent},
  { path: 'boyFriend/result', component: ResultComponent},
  { path: 'result', component: ResultComponent},
  { path: 'girlFriend', component: GirlfriendComponent },
  { path: 'girlFriend/calculating', component: CalculatingComponent},
  { path: 'girlFriend/result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
