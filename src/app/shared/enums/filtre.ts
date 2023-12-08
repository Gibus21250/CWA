export enum Filtre {
    NONE,
    ALPHA,
    ANTIALPHA,
    ECHEANCEPROCHE,
    ECHEANCELOIN,
    PRIORITECROISS,
    PRIORITEDECROISS
}

export const FiltreInfos: {[key in Filtre]: string} = {
    [Filtre.NONE]: '--Aucun filtre--',
    [Filtre.ALPHA]: 'Filtrer par ordre alphabétique',
    [Filtre.ANTIALPHA]: 'Filtrer par ordre anti-alphabétique',
    [Filtre.ECHEANCEPROCHE]: 'Filtrer par échéance proche',
    [Filtre.ECHEANCELOIN]: 'Filtrer par échéance lointaine',
    [Filtre.PRIORITECROISS]: 'Filtrer par priorité croissante',
    [Filtre.PRIORITEDECROISS]: 'Filtrer par priorité décroissante'
};