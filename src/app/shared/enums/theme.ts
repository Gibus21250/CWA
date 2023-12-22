export enum Theme {
    GESTIONPERSO,
    PRO,
    ETUDES,
    GESTIONPROJET,
    SANTE,
    ORGANISATION,
    TACHESDOMESTIQUE
}

export const ThemeInfos: {[key in Theme]: string} = {
    [Theme.GESTIONPERSO]: 'Gestion personelle',
    [Theme.PRO]: 'Travail professionnel',
    [Theme.ETUDES]: 'Éducation et études',
    [Theme.GESTIONPROJET]: 'Gestion de projet',
    [Theme.SANTE]: 'Santé et bien-être',
    [Theme.ORGANISATION]: 'Organisation des évènements',
    [Theme.TACHESDOMESTIQUE]: 'Gestion des tâches domestiques'
};