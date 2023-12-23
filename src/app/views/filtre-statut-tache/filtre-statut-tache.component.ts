import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';

@Component({
  selector: 'app-filtre-statut-tache',
  templateUrl: './filtre-statut-tache.component.html',
  styleUrls: ['./filtre-statut-tache.component.css']
})
export class FiltreStatutTacheComponent {

  selectedEtat: number = -1; // État initial pour la sélection d'état en radio bouton

  constructor(private router: Router, private tacheServ: TacheService) {
  }

  onSubmit() {
    if(this.verificateur()) {
      this.tacheServ.onStatutChange(this.selectedEtat);
      this.router.navigate(['/']);
    }
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
    if ( this.selectedEtat == -1) {
      return false;
    }
    return true;
  }

}
