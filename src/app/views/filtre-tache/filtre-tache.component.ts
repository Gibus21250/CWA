import { Component } from '@angular/core';
import { FiltreInfos, Filtre } from "src/app/shared/enums/filtre";
import { EtatInfos, Etat } from "src/app/shared/enums/etat";
import { ThemeInfos, Theme } from "src/app/shared/enums/theme";

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

  onTrierChange(event: any) : void {
    let trie = event.target.value;
    
    switch (trie) {
      case Filtre.NONE:
        
        break;
    
      default:
        break;
    }
  }

  onFiltrerChange(event: any) : void {
    
  }

  onThemeChange(event: any) : void {
    
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
