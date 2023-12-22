import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';

@Component({
  selector: 'app-creation-tache',
  templateUrl: './creation-tache.component.html',
  styleUrls: ['./creation-tache.component.css']
})
export class CreationTacheComponent {

  constructor(private router: Router, private tacheServ: TacheService) {
  }
  
  nomTache: string = ''; // Nom de la tâche
  selectedDate: string = ''; //FormControl pour la date
  description: string = ''; // Description de la tâche
  selectedPriority: number = -1; // État initial pour la sélection de priorité
  selectedEtat: number = -1; // État initial pour la sélection d'état en radio bouton

  onSubmit() {
    if(this.verificateur()) {
      const resDate = new Date(this.selectedDate);
      let tache = new Tache(this.nomTache, resDate, new Date(), this.description, this.selectedPriority, this.selectedEtat);
      //sauvegarder la nouvelle tâche sur le serveur
      this.tacheServ.addTache(tache);
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
    || this.description == '' 
    || this.selectedPriority == -1 || this.selectedEtat == -1) {
      return false;
    }
    const dateTmp = new Date(this.selectedDate);
    return dateTmp > new Date();
  }

}
