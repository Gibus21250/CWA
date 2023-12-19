import { Component } from '@angular/core';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';
import { EtatInfos} from 'src/app/shared/enums/etat';
import { PrioriteInfos } from 'src/app/shared/enums/priorite';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-details-tache',
  templateUrl: './details-tache.component.html',
  styleUrls: ['./details-tache.component.css']
})
export class DetailsTacheComponent {

  public tache: Tache | null | undefined;

  public etatStr: string = "";
  public prioriteStr: string = "";

  public dateCreatStr: string = "";
  public dateEcheanceStr: string = "";

  constructor(private tacheService: TacheService, private datepipe: DatePipe) {
    tacheService.selectedTache$.subscribe((newTache: Tache | null) => {
      this.tache = newTache;
      if(this.tache != undefined){
        this.etatStr = EtatInfos[this.tache.etat];
        this.prioriteStr = PrioriteInfos[this.tache.priorite];

        let creaTmp = this.datepipe.transform(this.tache.dateCreation, 'dd/MM/yyyy : HH:mm');
        let echeanceTmp = this.datepipe.transform(this.tache.dateEcheance, 'dd/MM/yyyy : HH:mm');

        if(creaTmp != null)
          this.dateCreatStr = creaTmp;
        
        if(echeanceTmp != null)
          this.dateEcheanceStr = echeanceTmp;
      }
      
    })
  }

}
