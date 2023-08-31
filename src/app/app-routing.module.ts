import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoireComponent } from './route/accessoire/accessoire.component';
import { WidgetComponent } from './component/widget/widget.component';
import { CountriesComponent } from './route/countries/countries.component';
import { BackgroundimageComponent } from './component/backgroundimage/backgroundimage.component';

const routes: Routes = [
  {
    path:  '', pathMatch: 'full', redirectTo: '/Widget'
  },
  {
   path: 'Accessoires', loadComponent: () => import('../app/route/accessoire/accessoire.component').then(m => m.AccessoireComponent)
  },
  {
    component:WidgetComponent, path:'Widget'
  },
  {
  path:'Countries', loadComponent: () => import('../app/route/countries/countries.component').then((m => m.CountriesComponent))
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
