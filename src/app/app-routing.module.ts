import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ValdecirComponent} from './valdecir/valdecir.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
  ,{path: 'vetores', component: ValdecirComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
