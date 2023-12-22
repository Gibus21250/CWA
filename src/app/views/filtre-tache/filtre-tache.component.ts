import { Component } from '@angular/core';
import { FiltreInfos, Filtre } from "src/app/shared/enums/filtre";
import { EtatInfos, Etat } from "src/app/shared/enums/etat";
import { ThemeInfos, Theme } from "src/app/shared/enums/theme";
import { TacheService } from 'src/app/shared/services/tache/tache.service';

@Component({
  selector: 'app-filtre-tache',
  templateUrl: './filtre-tache.component.html',
  styleUrls: ['./filtre-tache.component.css']
})

export class FiltreTacheComponent {

  //Données dynamique pour la liste de filtre
  filtres = Object.values(Filtre).filter(value => typeof value === 'number');
  FiltreInfos = FiltreInfos;

  etats = Object.values(Etat).filter(value => typeof value === 'number')
  EtatInfos = EtatInfos;

  themes = Object.values(Theme).filter(value => typeof value === 'number')
  ThemesInfo = ThemeInfos;

  /**
   *
   */
  constructor(private tacheService: TacheService) {

  }

  onTrierChange(event: any) : void {
    
  }

  onFiltrerChange(event: any) : void {
    
  }

  onThemeChange(theme: Theme) : void {
    //Ajouter les changement CSS
    this.tacheService.onThemeChange(theme);
  }

  isFiltre(value: any): value is Filtre {
    return typeof value === 'number';
  }

  isEtat(value: any): value is Etat {
    return typeof value === 'number';
  }

  isTheme(value: any): value is Theme {
    return typeof value === 'number';
  }

}
