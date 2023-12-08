import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreationTacheComponent } from './views/creation-tache/creation-tache.component';
import { DetailsTacheComponent } from './views/details-tache/details-tache.component';
import { ModificationTacheComponent } from './views/modification-tache/modification-tache.component';
import { FiltreTacheComponent } from './views/filtre-tache/filtre-tache.component';
import { ListeTacheComponent } from './views/liste-tache/liste-tache.component';
import { TacheItemDirective } from './shared/directives/tache-item/tache-item.directive';
import { TacheItemComponent } from './views/tache-item/tache-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CreationTacheComponent,
    DetailsTacheComponent,
    ModificationTacheComponent,
    FiltreTacheComponent,
    ListeTacheComponent,
    TacheItemDirective,
    TacheItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
