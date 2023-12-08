import { Etat } from "../enums/etat";
import { Priorite } from "../enums/priorite";

export class Tache {

    private _intitule: string;
    private _dateCreation: Date;
    private _dateEcheance: Date;
    private _description: string;
    private _priorite: Priorite;
    private _etat: Etat;

    constructor(i: string, de: Date, desc: string, prio: Priorite, etat: Etat) {
        this._intitule = i;
        this._dateCreation = new Date();
        this._dateEcheance = de;
        this._description = desc;
        this._priorite = prio;
        this._etat = etat;
    }

    //Getter et setters

    get intitule(): string {
        return this._intitule;
      }
    
      set intitule(value: string) {
        this._intitule = value;
      }
    
      get dateCreation(): Date {
        return this._dateCreation;
      }
    
      set dateCreation(value: Date) {
        this._dateCreation = value;
      }
    
      get dateEcheance(): Date {
        return this._dateEcheance;
      }
    
      set dateEcheance(value: Date) {
        this._dateEcheance = value;
      }
    
      get description(): string {
        return this._description;
      }

      get etat(): Etat {
        return this._etat;
      }
    
      set description(value: string) {
        this._description = value;
      }
    
      get priorite(): Priorite {
        return this._priorite;
      }
    
      set priorite(value: Priorite) {
        this._priorite = value;
      }

      set etat(value: Etat) {
        this._etat = value;
      }
    
}