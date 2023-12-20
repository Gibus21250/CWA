import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-tache',
  templateUrl: './creation-tache.component.html',
  styleUrls: ['./creation-tache.component.css']
})
export class CreationTacheComponent {

  constructor(private router: Router) {}

  // Fermer la popup
  closePopup() {
    this.router.navigate(['/']); 
  }

  //Valider la création de tâche
  submit() {
    // Logique pour soumettre la tache
  }

}
