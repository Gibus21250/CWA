export enum Etat {
    A_FAIRE,
    EN_COURS,
    TERMINE
}

export const EtatInfos: {[key in Etat]: string} = {
    [Etat.A_FAIRE]: 'À faire',
    [Etat.EN_COURS]: 'En cours',
    [Etat.TERMINE]: 'Terminée',
};