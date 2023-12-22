export enum Tri {
    NONE,
    ALPHA,
    ANTIALPHA,
    ECHEANCEPROCHE,
    ECHEANCELOIN,
    PRIORITECROISS,
    PRIORITEDECROISS
}

export const TriInfos: {[key in Tri]: string} = {
    [Tri.NONE]: '--Aucun filtre--',
    [Tri.ALPHA]: 'Filtrer par ordre alphabétique',
    [Tri.ANTIALPHA]: 'Filtrer par ordre anti-alphabétique',
    [Tri.ECHEANCEPROCHE]: 'Filtrer par échéance proche',
    [Tri.ECHEANCELOIN]: 'Filtrer par échéance lointaine',
    [Tri.PRIORITECROISS]: 'Filtrer par priorité croissante',
    [Tri.PRIORITEDECROISS]: 'Filtrer par priorité décroissante'
};