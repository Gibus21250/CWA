import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { Tache } from 'src/app/shared/models/tache';
import { TacheService } from 'src/app/shared/services/tache/tache.service';
import { EtatInfos } from 'src/app/shared/enums/etat';
import { PrioriteInfos } from 'src/app/shared/enums/priorite';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';
import { Etat } from 'src/app/shared/enums/etat';

@Component({
  selector: 'app-details-tache',
  templateUrl: './details-tache.component.html',
  styleUrls: ['./details-tache.component.css']
})
export class DetailsTacheComponent implements AfterViewInit {

  public tache: Tache | null | undefined;

  public etatStr: string = "";
  public prioriteStr: string = "";

  public dateCreatStr: string = "";
  public dateEcheanceStr: string = "";

  constructor(private tacheService: TacheService, private datepipe: DatePipe, private router: Router, private renderer: Renderer2, private el: ElementRef) {

    tacheService.selectedTache$.subscribe((newTache: Tache | null) => {
      this.tache = newTache;

      if (this.tache != undefined) {
        this.etatStr = EtatInfos[this.tache.etat];
        this.prioriteStr = PrioriteInfos[this.tache.priorite];

        let creaTmp = this.datepipe.transform(this.tache.dateCreation, 'dd/MM/yyyy : HH:mm');
        let echeanceTmp = this.datepipe.transform(this.tache.dateEcheance, 'dd/MM/yyyy : HH:mm');

        if (creaTmp != null)
          this.dateCreatStr = creaTmp;

        if (echeanceTmp != null)
          this.dateEcheanceStr = echeanceTmp;

          setTimeout(() => {
            this.ngAfterViewInit();
          })
          
      }

    })
  }

  ngAfterViewInit(): void {
    //Actualisation de la prgress barre
    const element = this.el.nativeElement.querySelector('.progressbar');

    if (element) {
      //On calcule le pourcentage restant entre DC et DE par rapport à date d'aujourd'hui
      const aujourdhui = new Date();
      
      if(this.tache != undefined) {
        
        const tempsRestant = this.tache.dateEcheance.getTime() - aujourdhui.getTime();
  
        if (tempsRestant > 0) {
          const tempsTotal = this.tache.dateEcheance.getTime() - this.tache.dateCreation.getTime();
          const tempsPasse = tempsTotal - tempsRestant;

          const res = (tempsPasse / tempsTotal) * 100;
          
          let strres = res + '%'
          this.renderer.setStyle(element, 'width', strres);
        } else {
          this.renderer.setStyle(element, 'width', '100%');
        }
      }
    }
  }

  // Méthode pour afficher la popup de modification
  showPopupM() {
    if(this.tache != undefined)
      this.router.navigate(['/modificationPopup'], {state: {laTache: this.tache}});

    this.tache = null;
  }

  suppTache(): void {
    if(this.tache != null && this.tache != undefined) {
      let res = window.prompt("Tapez CONFIRMER, pour supprimer cette tâche");
      if(res === "CONFIRMER") {
          this.tacheService.suppTache(this.tache);
          this.tache = null; // Affectez null pour masquer la div
      }
    }
  }

  terminerTache(): void {
    if(this.tache != null && this.tache != undefined) {
      const originale = Object.assign({}, this.tache);
      this.tache.etat = Etat.TERMINE;
      this.tacheService.replaceTache(originale, this.tache);

      this.tache = null; // Affectez null pour masquer la div
    }
    else {
      alert("Erreur lors de la terminaison de la tâche");
    }
  }


}
