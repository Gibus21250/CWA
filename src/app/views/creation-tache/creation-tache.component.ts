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

  dateControl = new FormControl(); //FormControl pour suivre la date
  selectedOption: string = 'option1'; // État initial pour

  // Fermer la popup
  closePopup() {
    this.router.navigate(['/']); 
  }

  //Valider la création de tâche
  submit() {
    const selectedDate = this.dateControl.value; // Récupérer la date

    //récupérer les valeurs des champs
    // Logique pour soumettre la tache
  }

}
