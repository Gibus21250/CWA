import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { Tache } from '../../models/tache';
import { Priorite } from '../../enums/priorite';
import { Etat } from '../../enums/etat';
import { Theme } from '../../enums/theme';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  //Liste originale, pour éviter de charger en boucle les données depuis le serveur distant
  private tachesOrigin: Tache[] = [];
  //Les tâche, sont celles qui sont envoyées après filtre et tris aux abonnés
  public lesTaches: Tache[] = [];

  private activeTheme = 0;

  constructor(private http: HttpClient) {
  }

  onThemeChange(theme: Theme) : void {
    this.activeTheme = theme;
    this.chargerDonnee();
    this.selectedTacheSubject.next(null);
  }

  onPrioriteChange(p: Priorite[]): void {

    //On a juste à filtrer directement sur la liste de tache visible
    this.lesTaches = this.tachesOrigin;

    this.lesTaches = this.tachesOrigin.filter(tache => {
      let res: Boolean = false;
      p.forEach(prio => {
        if(tache.priorite === prio)
          res = true;
      });
      return res;
      }
    );

    this.tachesSubject.next(this.lesTaches);

  }

  onSelectTache(tache: Tache) : void {
    //On emet à tous les abonné la tache selectionnée (doit être capturé par le component Detail-Tache)
    this.selectedTacheSubject.next(tache);
  }

  addTache(tache: Tache): void {
    this.tachesOrigin.push(tache);
    
    this.lesTaches = [...this.tachesOrigin];
    this.tachesSubject.next(this.lesTaches);
    this.sauvegarder();
  }

  suppTache(tache: Tache): void {
    const ind = this.tachesOrigin.indexOf(tache);

    this.tachesOrigin.splice(ind, 1);
    this.lesTaches = [...this.tachesOrigin];

    this.sauvegarder();
    this.tachesSubject.next(this.lesTaches);
  }

  replaceTache(origin: Tache, nouv: Tache): void {
    const ind = this.tachesOrigin.findIndex(tache => {
      return tache.intitule === origin.intitule 
      && tache.description === origin.description
      && tache.etat === origin.etat
      && tache.priorite === origin.priorite
    });
    
    this.tachesOrigin[ind] = nouv;
    this.lesTaches = [...this.tachesOrigin];

    this.sauvegarder();
    this.tachesSubject.next(this.lesTaches);
  }

  private chargerDonnee(): void {

    let chemin = "http://localhost:25565/datas/";
    
    chemin += this.getFileName(this.activeTheme);

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
        this.tachesOrigin = [...lTaches];
        
        //On emets toutes les taches aux abonnés
        this.tachesSubject.next(this.lesTaches);
      }
    );
  }

  private sauvegarder(): void {
    let chemin = "http://localhost:25565/datas/";

    chemin += this.getFileName(this.activeTheme);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    
    this.http.post<any>(chemin, this.tachesOrigin, { headers }).subscribe(
      response => {
        const statusCode = response.status;
  
        if (statusCode === 200) {
          console.log('Succès de la sauvegarde');
        }
      }
      );
    
  }
  
  getFileName(theme: Theme): string {
    switch (theme) {
      case Theme.GESTIONPERSO:
        return "gestionperso.json";
      case Theme.PRO:
        return "travailperso.json";
      case Theme.ETUDES:
        return "etudes.json";
      case Theme.GESTIONPROJET:
        return "gestionprojet.json";
      case Theme.SANTE:
        return "sante.json";
      case Theme.ORGANISATION:
        return "organisation.json";
      case Theme.TACHESDOMESTIQUE:
        return "tachesdomestiques.json";
    }
    return '';
  }
}
