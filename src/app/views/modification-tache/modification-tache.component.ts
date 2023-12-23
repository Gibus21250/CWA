import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';

@Component({
  selector: 'app-modification-tache',
  templateUrl: './modification-tache.component.html',
  styleUrls: ['./modification-tache.component.css']
})
export class ModificationTacheComponent {

  constructor(private router: Router, private tacheServ: TacheService) {}

  ///@Input() public _tache!: Tache;

  nomTache: string = ''; // Nom de la tâche
  selectedDate: string = ''; //Pour la date
  descriptionTache: string = ''; // Description de la tâche
  selectedPriority: number = -1; // État initial pour la sélection de priorité
  selectedEtat: number = -1; // État initial pour la sélection d'état en radio bouton

  //Valider la modification
  onSubmit() {
    if(this.verificateur()) {
      const resDate = new Date(this.selectedDate);
      //let tache = new Tache(this.nomTache, resDate, this._tache.dateCreation, this.descriptionTache, this.selectedPriority, this.selectedEtat);
      //this.tacheServ.addTache(tache);
      //sauvegarder la modif de tâche sur le serveur

      this.router.navigate(['/']);
    }
  }

  selectButton(n: number) {
    this.selectedPriority = n;
  }

  // Etats
  selectEtat(n: number): void {
    this.selectedEtat = n;
  }
  // Fermer la popup
  closePopup() {
    this.router.navigate(['/']); 
  }

  verificateur() {
    //Vérifier que les champs ne sont pas vides
    if (this.nomTache == '' || this.selectedDate == '' 
    || this.descriptionTache == '' 
    || this.selectedPriority == -1 || this.selectedEtat == -1) {
      return false;
    }
    const dateTmp = new Date(this.selectedDate);
    return dateTmp > new Date();
  }

}
