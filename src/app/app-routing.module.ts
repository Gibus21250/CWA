import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PopupComponent } from './views/popup/popup.component';
import { CreationTacheComponent } from './views/creation-tache/creation-tache.component';

const routes: Routes = [
  { path: 'popup', component: CreationTacheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
