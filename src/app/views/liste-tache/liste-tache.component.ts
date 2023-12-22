import { Component, NgModule, OnInit } from '@angular/core';
import { Etat } from 'src/app/shared/enums/etat';
import { Priorite } from 'src/app/shared/enums/priorite';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';
import { Router } from '@angular/router';
import { Theme } from 'src/app/shared/enums/theme';

@Component({
  selector: 'app-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.css']
})

export class ListeTacheComponent implements OnInit {

  listeTache: Tache[] = [];

  constructor(private tacheServ: TacheService,private router: Router) {
  }

  ngOnInit(): void {
    //On abonne le component au service de la liste des tâches
    this.tacheServ.taches$.subscribe((taches: Tache[]) => {
      this.listeTache = taches;
    });

    //On charge le thme par default (Gestion perso)
    this.tacheServ.onThemeChange(Theme.GESTIONPERSO);
  }

  public tacheSelectionne(tache: Tache) {
    
    //Une tache a été selectionnée, on l'envoie au service des tâches
    this.tacheServ.onSelectTache(tache);
  }

  // Méthode pour afficher la popup de création de tâche
  showPopup() {
    this.router.navigate(['/creationPopup']);
  }
}
