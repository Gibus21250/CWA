import { Component } from '@angular/core';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';

@Component({
  selector: 'app-details-tache',
  templateUrl: './details-tache.component.html',
  styleUrls: ['./details-tache.component.css']
})
export class DetailsTacheComponent {

  public tache: Tache | null | undefined;

  constructor(private tacheService: TacheService) {
    tacheService.selectedTache$.subscribe((newTache: Tache | null) => {
      this.tache = newTache;
    })
  }

}
