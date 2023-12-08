import { Component, NgModule, OnInit } from '@angular/core';
import { Etat } from 'src/app/shared/enums/etat';
import { Priorite } from 'src/app/shared/enums/priorite';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';

@Component({
  selector: 'app-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.css']
})

export class ListeTacheComponent implements OnInit {

  
  constructor(private tacheServ: TacheService) {
  }

  listeTache: Tache[] = [];


  ngOnInit(): void {
    //On abonne le component au service de la liste des tâches
    this.tacheServ.taches$.subscribe((taches: Tache[]) => {
      this.listeTache = taches;
    })
  }


  public tacheSelectionne(tache: Tache) {
    
    //Une tache a été selectionnée, on l'envoie au service des tâches
    this.tacheServ.onSelectTache(tache);
  }
}
