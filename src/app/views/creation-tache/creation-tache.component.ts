import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Tache } from 'src/app/shared/models/tache';

@Component({
  selector: 'app-creation-tache',
  templateUrl: './creation-tache.component.html',
  styleUrls: ['./creation-tache.component.css']
})
export class CreationTacheComponent {

  constructor(private router: Router) {
  }

  //tache: Tache = new Tache('', new Date(), new Date(), '', 0, 'aFaire'); // Tâche à créer
  nomTache: string = ''; // Nom de la tâche
  selectedDate = new FormControl(); //FormControl pour la date
  description: string = ''; // Description de la tâche
  selectedButton: number | null = null; // État initial pour la sélection de priorité
  selectedEtat: number = 0; // État initial pour la sélection d'état en radio bouton
  etats: string[] = ['A faire', 'En cours', 'Terminée']; // Liste des états
  etatTache: string = 'A faire'; // État de la tâche

  // Priorités
  selectButton(buttonNumber: number): void {
    this.selectedButton = buttonNumber;
  }

  // Etats
  selectEtat(selectedEtatProv: number): void {
    this.etatTache = this.etats[selectedEtatProv];
  }

  // Fermer la popup
  closePopup() {
    this.router.navigate(['/']); 
  }

  verificateur(nomTache: string, dateControl: FormControl, description: string, selectedButton: number | null) {
    //Vérifier que les champs ne sont pas vides
    if (nomTache == '' || dateControl == null || description == '' || selectedButton == null) {
      return false;
    }
    else {
      //vérifier que la date ne soit pas dépassée
      const date = new Date();
      const dateNow = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      const dateSelected = dateControl.value;
      if (dateSelected < dateNow) {
        return false;
      }
      return true;
    }
  }

  //Valider la création de tâche
  submit() {
    //TESTS
    alert('Nom de la tâche : ' + this.nomTache+' /n Date : ' + this.selectedDate+'/nDescription : ' + this.description+'/nPriorité : ' + this.selectedButton+'/nEtat : ' + this.etatTache);

    
    //Vérifier les données
    if(this.verificateur(this.nomTache, this.selectedDate, this.description, this.selectedButton)) {
      //Si les données sont valides, on instancie la tâche
      //this.creationTache(this.nomTache, this.selectedDate, this.description, this.selectedButton, this.etatTache);

      //Ajouter la tâche dans la liste de tâches
      //this.addTache(this.tache);

      //On affiche un message de confirmation
      alert('Tâche créée avec succès !');

      //On ferme la popup
      this.closePopup();
    }
    else {
      //Sinon, on affiche un message d'erreur
      alert('Veuillez remplir tous les champs.');
    }
  }

}
