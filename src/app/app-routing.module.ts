import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';

import { ThirdComponent } from './third/third.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  { 
    path: 'AxWebOrigination', 
    component: FirstComponent,
    children: [
      {
        path: 'second-page',
        component: SecondPageComponent
      }
    ]
  },
  {
    path:'third',
    component: ThirdComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
