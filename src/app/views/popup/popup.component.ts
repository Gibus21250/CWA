import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

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
