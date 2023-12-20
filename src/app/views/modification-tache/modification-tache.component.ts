import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modification-tache',
  templateUrl: './modification-tache.component.html',
  styleUrls: ['./modification-tache.component.css']
})
export class ModificationTacheComponent {

  constructor(private router: Router) {}

  // Fermer la popup
  closePopup() {
    this.router.navigate(['/']); 
  }

  //Valider la modification
  submit() {
    // Logique pour mettre à jour la tâche ET l'affichage
  }

}
