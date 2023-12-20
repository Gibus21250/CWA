import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationTacheComponent } from './views/creation-tache/creation-tache.component';
import { ModificationTacheComponent } from './views/modification-tache/modification-tache.component';

const routes: Routes = [
  { path: 'creationPopup', component: CreationTacheComponent },
  { path: 'modificationPopup', component: ModificationTacheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
