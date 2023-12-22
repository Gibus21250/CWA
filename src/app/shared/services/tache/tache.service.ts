import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tache } from '../../models/tache';
import { Priorite } from '../../enums/priorite';
import { Etat } from '../../enums/etat';
import { Theme } from '../../enums/theme';
import { HttpClient } from '@angular/common/http';

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

  private tachesOrigin: Tache[] = [];
  public lesTaches: Tache[] = [];

  constructor(private http: HttpClient) {
  }

  onThemeChange(theme: Theme) : void {
    let lTaches: Tache[] = [];
    let chemin = "http://localhost:3000/datas/";
    switch (theme) {
      case Theme.GESTIONPERSO:
        chemin += "gestionperso.json";
        break;
      case Theme.PRO:
        chemin += "travailperso.json";
        break;
      case Theme.ETUDES:
        chemin += "etudes.json";
        break;
      case Theme.GESTIONPROJET:
        chemin += "gestionprojet.json";
        break;
      case Theme.SANTE:
        chemin += "sante.json";
        break;
      case Theme.ORGANISATION:
        chemin += "organisation.json";
        break;
      case Theme.TACHESDOMESTIQUE:
        chemin += "tachesdomestiques.json";
        break;
    }

    //Charger les données depuis le json
    this.http.get<Tache[]>(chemin).subscribe(
      (jsonData) => {
      
        const lTaches: Tache[] = jsonData.map((tache: any) => {
          return new Tache(
            tache._intitule,
            new Date(tache._dateEcheance),
            new Date(tache._dateCreation),
            tache._description,
            tache._priorite,
            tache._etat
          );
        });

        this.lesTaches = lTaches;
        this.tachesOrigin = lTaches;
        
        //On emets toutes les taches aux abonnés
        this.tachesSubject.next(this.lesTaches);
      }
    );
  }

  onPrioriteChange(p: Priorite[]): void {


    //On a juste à filtrer directement sur la liste de tache visible
    this.lesTaches = this.tachesOrigin;

    p.forEach(prio => {
      this.lesTaches = this.tachesOrigin.filter(tache => {
        let res: Boolean = false;
        p.forEach(prio => {
          if(tache.priorite === prio)
            res = true;
        });
        return res;
        }
      );
    });


    this.tachesSubject.next(this.lesTaches);

  }

  onSelectTache(tache: Tache) : void {
    
    //On emet à tous les abonné la tache selectionnée (doit être capturé par le component Detail-Tache)
    this.selectedTacheSubject.next(tache);
  }
}
