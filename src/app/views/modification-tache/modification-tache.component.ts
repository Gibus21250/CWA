import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modification-tache',
  templateUrl: './modification-tache.component.html',
  styleUrls: ['./modification-tache.component.css']
})
export class ModificationTacheComponent {

  constructor(private router: Router) {}

  dateControl = new FormControl(); //FormControl pour suivre la date

  // Fermer la popup
  closePopup() {
    this.router.navigate(['/']); 
  }

  //Valider la modification
  submit() {
    const selectedDate = this.dateControl.value; // Récupérer la date
   /* const date = new Date(selectedDate); // Convertir la date en objet Date
    const day = date.getDate(); // Récupérer le jour
    const month = date.getMonth() + 1; // Récupérer le mois
    const year = date.getFullYear(); // Récupérer l'année
  */
    // Logique pour mettre à jour la tâche ET l'affichage
  }

}
