import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  dateActuelle: string | undefined;

  ngOnInit(): void {
    //Première initialisation de l'hrologe
    this.updateDate();

    //On s'abonne à une clock de 1s, pour executer le code actualisant l'horloge dans l'affichage
    interval(1000).subscribe(() => {
      this.updateDate();
    })
  }

  private updateDate() {
    let date = new Date();
    this.dateActuelle = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' • ' + date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
  }

}
