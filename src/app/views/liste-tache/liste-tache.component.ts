import { Component, NgModule, OnInit } from '@angular/core';
import { Etat } from 'src/app/shared/enums/etat';
import { Priorite } from 'src/app/shared/enums/priorite';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';
import { Router } from '@angular/router';
import { Theme } from 'src/app/shared/enums/theme';
import { Tri } from 'src/app/shared/enums/tris';

@Component({
  selector: 'app-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.css']
})

export class ListeTacheComponent implements OnInit {

  listeTache: Tache[] = [];
  listePrioSelected: boolean[] = [false, false, false, false, false];

  constructor(private tacheServ: TacheService,private router: Router) {
  }

  ngOnInit(): void {
    //On abonne le component au service de la liste des tâches
    this.tacheServ.taches$.subscribe((taches: Tache[]) => {
      this.listeTache = taches;
    });

    //On charge le theme par default (Gestion perso)
    this.tacheServ.onThemeChange(Theme.GESTIONPERSO);
  }

  onPriorityChange(p: Priorite): void {
    this.listePrioSelected[p] = !this.listePrioSelected[p];

    this.updateListe();
  }

  private updateListe(): void {
    let prios: number[] = [];

    let c = 0;
    this.listePrioSelected.forEach(bool => {
      if(bool) prios.push(c);
      c++;
    });

    let tableauPriorites: Priorite[] = prios.map(num => num as Priorite);
    
    this.tacheServ.onPrioriteChange(tableauPriorites);
  }

  public tacheSelectionne(tache: Tache) {
    
    //Une tache a été selectionnée, on l'envoie au service des tâches
    this.tacheServ.onSelectTache(tache);
  }

  showPopup() {
    this.router.navigate(['/creationPopup']);
  }
}
