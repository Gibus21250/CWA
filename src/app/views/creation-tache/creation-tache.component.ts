import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-creation-tache',
  templateUrl: './creation-tache.component.html',
  styleUrls: ['./creation-tache.component.css']
})
export class CreationTacheComponent {

  constructor(private router: Router) {}

  nomTache: string = ''; // Nom de la tâche
  dateControl = new FormControl(); //FormControl pour la date
  description: string = ''; // Description de la tâche
  selectedButton: number | null = null; // État initial pour la sélection de priorité
  selectedEtat: string = 'aFaire'; // État initial pour la sélection d'état

  // Priorités
  selectButton(buttonNumber: number): void {
    this.selectedButton = buttonNumber;
  }

  // Etats
  selectEtat(etat: string): void {
    this.selectedEtat = etat;
  }

  // Fermer la popup
  closePopup() {
    this.router.navigate(['/']); 
  }

  verificateur() {
    if (this.nomTache.length > 0 && this.description.length > 0 && this.selectedButton !== null) {
      return true;
    } else {
      return false;
    }
  }

  //Valider la création de tâche
  submit() {
    const nomTache = this.nomTache; // Récupérer le nom de la tâche
    const selectedDate = this.dateControl.value; // Récupérer la date
    const description = this.description; // Récupérer la description
    const selectedButton = this.selectedButton; // Récupérer la priorité
    const selectedEtat = this.selectedEtat; // Récupérer l'Etat
    


    //vérifier les données
    //faire une instance de tâche


    //récupérer les valeurs des champs
    // Logique pour soumettre la tache
  }

}
