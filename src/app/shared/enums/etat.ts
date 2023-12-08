export enum Etat {
    NONE,
    EN_ATTENTE,
    EN_COURS,
    TERMINE
}

export const EtatInfos: {[key in Etat]: string} = {
    [Etat.NONE]: '--Aucun filtre--',
    [Etat.EN_ATTENTE]: 'En attente',
    [Etat.EN_COURS]: 'En cours',
    [Etat.TERMINE]: 'Terminée',
};