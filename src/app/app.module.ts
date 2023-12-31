import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './views/accueil/accueil.component';
import { CreationTacheComponent } from './views/creation-tache/creation-tache.component';
import { DetailsTacheComponent } from './views/details-tache/details-tache.component';
import { ModificationTacheComponent } from './views/modification-tache/modification-tache.component';
import { FiltreTacheComponent } from './views/filtre-tache/filtre-tache.component';
import { ListeTacheComponent } from './views/liste-tache/liste-tache.component';
import { TacheItemDirective } from './shared/directives/tache-item/tache-item.directive';
import { TacheItemComponent } from './views/tache-item/tache-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FiltreStatutTacheComponent } from './views/filtre-statut-tache/filtre-statut-tache.component';

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
    TacheItemComponent,
    FiltreStatutTacheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
