import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoireComponent } from './route/accessoire/accessoire.component';
import { WidgetComponent } from './component/widget/widget.component';

const routes: Routes = [
  {
    path:  '', pathMatch: 'full', redirectTo: '/Widget'
  },
  {
    component:AccessoireComponent, path: 'Accessoires', 

  },
  {
    component:WidgetComponent, path:'Widget'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}