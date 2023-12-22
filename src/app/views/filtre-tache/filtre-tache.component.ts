import { Component } from '@angular/core';
import { TriInfos, Tri } from "src/app/shared/enums/tris";
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
  tris = Object.values(Tri).filter(value => typeof value === 'number');
  TriInfos = TriInfos;

  etats = Object.values(Etat).filter(value => typeof value === 'number')
  EtatInfos = EtatInfos;

  themes = Object.values(Theme).filter(value => typeof value === 'number')
  ThemesInfo = ThemeInfos;

  /**
   *
   */
  constructor(private tacheService: TacheService) {}


  onThemeChange(theme: Theme) : void {
    //Ajouter les changement CSS
    this.tacheService.onThemeChange(theme);
  }

  isFiltre(value: any): value is Tri {
    return typeof value === 'number';
  }

  isEtat(value: any): value is Etat {
    return typeof value === 'number';
  }

  isTheme(value: any): value is Theme {
    return typeof value === 'number';
  }

}
