import { Component, NgModule, OnInit } from '@angular/core';
import { Etat } from 'src/app/shared/enums/etats';
import { Priorite } from 'src/app/shared/enums/priorite';
import { Tache } from 'src/app/shared/models/tache';

@Component({
  selector: 'app-liste-tache',
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.css']
})

export class ListeTacheComponent implements OnInit {

  

  listeTache: Tache[] = [
    new Tache("Noël", new Date(2023, 11, 24), "Premiere tache", Priorite.BASSE, Etat.EN_ATTENTE),
    new Tache("Ce soir", new Date(2023, 11, 8, 20, 0, 0), "Premiere tache", Priorite.PRIORITAIRE, Etat.EN_ATTENTE),
    new Tache("Noël", new Date(2023, 11, 24), "Premiere tache", Priorite.NORMALE, Etat.EN_ATTENTE),
    new Tache("Ce soir", new Date(2023, 11, 8, 20, 0, 0), "Premiere tache", Priorite.ELEVEE, Etat.EN_ATTENTE),
    new Tache("Noël", new Date(2023, 11, 24), "Premiere tache", Priorite.NORMALE, Etat.EN_ATTENTE),
    new Tache("Ce soir", new Date(2023, 11, 8, 20, 0, 0), "Premiere tache", Priorite.NORMALE, Etat.EN_ATTENTE),
    new Tache("Noël", new Date(2023, 11, 24), "Premiere tache", Priorite.NORMALE, Etat.EN_ATTENTE),
    new Tache("Ce soir", new Date(2023, 11, 8, 20, 0, 0), "Premiere tache", Priorite.BASSE, Etat.EN_ATTENTE),
    new Tache("Noël", new Date(2023, 11, 24), "Premiere tache", Priorite.NORMALE, Etat.EN_ATTENTE),
    new Tache("Ce soir", new Date(2023, 11, 8, 20, 0, 0), "Premiere tache", Priorite.NORMALE, Etat.EN_ATTENTE),
    new Tache("Noël", new Date(2023, 11, 24), "Premiere tache", Priorite.CRITIQUE, Etat.EN_ATTENTE),
    new Tache("Ce soir", new Date(2023, 11, 8, 20, 0, 0), "Premiere tache", Priorite.NORMALE, Etat.EN_ATTENTE),
    new Tache("Noël", new Date(2023, 11, 24), "Premiere tache", Priorite.NORMALE, Etat.EN_ATTENTE),
    new Tache("Ce soir", new Date(2023, 11, 8, 20, 0, 0), "Premiere tache", Priorite.NORMALE, Etat.EN_ATTENTE)
  ];


  ngOnInit(): void {
    //TODO S'abonner au service de la liste de tâches
  }


  public tacheSelectionne(tache: Tache) {
    //Appeler methods du service qu'une tache a été selectionnée
    //Le service emettra un event aux abonné (details_tache)
    console.log(tache);
  }
}
