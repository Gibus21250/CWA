import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tache } from '../../models/tache';
import { Priorite } from '../../enums/priorite';
import { Etat } from '../../enums/etat';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  //Renvoie la liste de Tache
  private tachesSubject: BehaviorSubject<Tache[]> = new BehaviorSubject<Tache[]>([]);
  //Renvoie la tache selectionnée
  private selectedTacheSubject: BehaviorSubject<Tache | null> = new BehaviorSubject<Tache | null>(null);

  //Observables, les noms de variables finissent par $
  //Les components s'abonnent à ces Observables
  public taches$ = this.tachesSubject.asObservable();
  public selectedTache$ = this.selectedTacheSubject.asObservable();

  constructor() { 
    this.loadTache()
  }

  private loadTache() {
    const lTaches: Tache[] = [
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

    //On emets toutes les taches aux abonnés
    this.tachesSubject.next(lTaches);
  }

  onSelectTache(tache: Tache) : void {
    
    //On emet à tous les abonné la tache selectionnée (doit être capturé par le component Detail-Tache)
    this.selectedTacheSubject.next(tache);
  }
}
