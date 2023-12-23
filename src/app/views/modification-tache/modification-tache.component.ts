import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';

@Component({
  selector: 'app-modification-tache',
  templateUrl: './modification-tache.component.html',
  styleUrls: ['./modification-tache.component.css']
})
export class ModificationTacheComponent implements OnInit {

  private originalTache: Tache = new Tache('', new Date(), new Date(), '', 0, 0);
  modifiedTache: Tache = new Tache('', new Date(), new Date(), '', 0, 0);

  strDate: string = '';

  constructor(private router: Router, private tacheServ: TacheService) {    
  }

  ngOnInit(): void {

    //On récupère la tache passé par le componant Details
    this.originalTache = new Tache(
      history.state.laTache._intitule,
      history.state.laTache._dateCreation,
      history.state.laTache._dateEcheance,
      history.state.laTache._description,
      history.state.laTache._priorite,
      history.state.laTache._etat
    );

    this.modifiedTache = new Tache(
      history.state.laTache._intitule,
      history.state.laTache._dateCreation,
      history.state.laTache._dateEcheance,
      history.state.laTache._description,
      history.state.laTache._priorite,
      history.state.laTache._etat
    );

    this.strDate = this.formatDateForInput(history.state.laTache._dateEcheance);
    
  }

  formatDateForInput(date: Date): string {
    // Obtenir le format YYYY-MM-DDTHH:mm
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }


  //Valider la modification
  onSubmit() {
    if(this.verificateur()) {
      const resDate = new Date(this.strDate);
      this.modifiedTache.dateEcheance = resDate;
      this.tacheServ.replaceTache(this.originalTache, this.modifiedTache);
      this.router.navigate(['/']);
    }
  }

  selectButton(n: number) {
    this.modifiedTache.priorite = n;
  }

  // Etats
  selectEtat(n: number): void {
    this.modifiedTache.etat = n;
  }
  // Fermer la popup
  closePopup() {
    this.router.navigate(['/']); 
  }

  verificateur() {
    //Vérifier que les champs ne sont pas vides
    
    if (this.modifiedTache.intitule == '' || this.modifiedTache.description == '' 
    || this.strDate == '') {
      return false;
    }

    const dateTmp = new Date(this.strDate);
    return dateTmp > new Date();
  }

}
