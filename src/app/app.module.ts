import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreationTacheComponent } from './views/creation-tache/creation-tache.component';
import { DetailsTacheComponent } from './views/details-tache/details-tache.component';
import { ModificationTacheComponent } from './views/modification-tache/modification-tache.component';
import { SuppressionTacheComponent } from './views/suppression-tache/suppression-tache.component';
import { FiltreTacheComponent } from './views/filtre-tache/filtre-tache.component';
import { ListeTacheComponent } from './views/liste-tache/liste-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CreationTacheComponent,
    DetailsTacheComponent,
    ModificationTacheComponent,
    SuppressionTacheComponent,
    FiltreTacheComponent,
    ListeTacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
