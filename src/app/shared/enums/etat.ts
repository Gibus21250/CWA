export enum Etat {
    EN_ATTENTE,
    EN_COURS,
    TERMINE
}

export const EtatInfos: {[key in Etat]: string} = {
    [Etat.EN_ATTENTE]: 'En attente',
    [Etat.EN_COURS]: 'En cours',
    [Etat.TERMINE]: 'Terminée',
};