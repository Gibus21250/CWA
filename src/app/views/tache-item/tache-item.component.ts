import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';

@Component({
  selector: 'app-tache-item',
  templateUrl: './tache-item.component.html',
  styleUrls: ['./tache-item.component.css']
})
export class TacheItemComponent implements OnInit {

  public _formateEcheanceDate!: string | null;

  @Input()
  public _tache!: Tache;

  constructor(private tacheService: TacheService) {
  }

  ngOnInit(): void {
    if (this._tache.dateEcheance) {
      const now = new Date();
      const timeDifference = this._tache.dateEcheance.getTime() - now.getTime();

      if(timeDifference > 0) {
        
        //On récupère le nombre de jours
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        if(daysRemaining > 1) {
          this._formateEcheanceDate = daysRemaining > 1 ? `${daysRemaining} jours` : `${daysRemaining} jour`;
        } else {
          const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
          const minutesRemaining = Math.ceil((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          this._formateEcheanceDate = `${hoursRemaining}h ${minutesRemaining}min`;
        }
      }else {
        this._formateEcheanceDate = 'Passé'
      }
    }
  }

}
