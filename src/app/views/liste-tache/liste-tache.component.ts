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
  listePrioSelected: boolean[] = [true, true, true, true, true];
  dateSelected: boolean = false;

  constructor(private tacheServ: TacheService,private router: Router) {
  }

  ngOnInit(): void {
    //On abonne le component au service de la liste des tâches
    this.tacheServ.taches$.subscribe((taches: Tache[]) => {
      this.listeTache = taches;
      this.updateBoutonAffichage();
    });

    //On charge le theme par default (Gestion perso)
    this.tacheServ.onThemeChange(Theme.GESTIONPERSO);
  }

  private resetFiltre(): void {
    this.listePrioSelected = [true, true, true, true, true];
    this.dateSelected = false;
    this.updateBoutonAffichage();
  }

  private updateBoutonAffichage(): void {
    const doc = document;
    let monElement: HTMLElement | null = null;

    for (let idButton = 0; idButton < this.listePrioSelected.length; idButton++) {

      switch(idButton){
        case 0:
          monElement = doc.getElementById('btnVert') as HTMLElement;
          if(this.listePrioSelected[0]){
            monElement.style.background="#64a87190";
            monElement.style.borderColor="#64a87100";
          }
          else{
            monElement.style.background="#64a87100";
            monElement.style.borderColor="#64a87190";
          }
        break;
        case 1:
          monElement = doc.getElementById('btnBlanc') as HTMLElement;
          if(this.listePrioSelected[1]){
            monElement.style.background="#ffffff90";
            monElement.style.borderColor="#ffffff00";
          }
          else{
            monElement.style.background="#ffffff00";
            monElement.style.borderColor="#ffffff90";
          }
        break;
        case 2:
          monElement = doc.getElementById('btnJaune') as HTMLElement;
          if(this.listePrioSelected[2]){
            monElement.style.background="#ffc65490";
            monElement.style.borderColor="#ffc65400";
          }
          else{
            monElement.style.background="#ffc65400";
            monElement.style.borderColor="#ffc65490";
          }
        break;
        case 3:
          monElement = doc.getElementById('btnRouge') as HTMLElement;
          if(this.listePrioSelected[3]){
            monElement.style.background="#ff613e90";
            monElement.style.borderColor="#ff613e00";
          }
          else{
            monElement.style.background="#ff613e00";
            monElement.style.borderColor="#ff613e90";
          }
        break;
        case 4:
          monElement = doc.getElementById('btnViolet') as HTMLElement;
          if(this.listePrioSelected[4]){
            monElement.style.background="#5c376d90";
            monElement.style.borderColor="#5c376d00";
          }
          else{
            monElement.style.background="#5c376d00";
            monElement.style.borderColor="#5c376d90";
          }
        break;
      }
    }
  }

  onPriorityChange(p: Priorite): void {
    this.listePrioSelected[p] = !this.listePrioSelected[p];
    this.updateBoutonAffichage();
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

  //Routage vers la page de création de tâche
  showPopup() {
    this.router.navigate(['/creationPopup']);
    this.resetFiltre();
    this.updateBoutonAffichage();
  }

  //Tri par date d'écheance
  onDateOrder(): void {
    if(this.dateSelected){
      this.dateSelected = false;
    }
    else{
      this.dateSelected = true;
    }
    this.tacheServ.onDateChange(this.dateSelected);
  }

}
