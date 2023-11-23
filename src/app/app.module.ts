import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreationTacheComponent } from './creation-tache/creation-tache.component';
import { DetailsTacheComponent } from './details-tache/details-tache.component';
import { ModificationTacheComponent } from './modification-tache/modification-tache.component';
import { SuppressionTacheComponent } from './suppression-tache/suppression-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CreationTacheComponent,
    DetailsTacheComponent,
    ModificationTacheComponent,
    SuppressionTacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
