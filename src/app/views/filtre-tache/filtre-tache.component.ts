import { Component } from '@angular/core';
import { TriInfos, Tri } from "src/app/shared/enums/tris";
import { EtatInfos, Etat } from "src/app/shared/enums/etat";
import { ThemeInfos, Theme } from "src/app/shared/enums/theme";
import { TacheService } from 'src/app/shared/services/tache/tache.service';
import { Tache } from 'src/app/shared/models/tache'

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
  constructor(private tacheService: TacheService) { }

  onThemeChange(theme: Theme): void {

    const doc = document;
    let monElement:  HTMLImageElement | null = null;
    switch (theme) {
      case 0:
        monElement = doc.getElementById('background') as  HTMLImageElement;
        monElement.src = "assets/images/personnelle2F.jpg";
        break;
      case 1:
        monElement = doc.getElementById('background') as  HTMLImageElement;
        monElement.src = "assets/images/travailF.jpg";
        break;
      case 2:
        monElement = doc.getElementById('background') as  HTMLImageElement;
        monElement.src = "assets/images/etudeF.jpg";
        break;
      case 3:
        monElement = doc.getElementById('background') as  HTMLImageElement;
        monElement.src = "assets/images/gestionF.jpg";
        break;
      case 4:
        monElement = doc.getElementById('background') as  HTMLImageElement;
        monElement.src = "assets/images/santeF.jpg";
        break;
      case 5:
        monElement = doc.getElementById('background') as  HTMLImageElement;
        monElement.src = "assets/images/organisation2F.jpg";
        break;
      case 6:
        monElement = doc.getElementById('background') as  HTMLImageElement;
        monElement.src = "assets/images/domestiqueF.jpg";
        break;
    }

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
