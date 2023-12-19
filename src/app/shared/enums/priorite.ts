export enum Priorite {
    BASSE,
    NORMALE,
    ELEVEE,
    PRIORITAIRE,
    CRITIQUE
}

export const PrioriteInfos: {[key in Priorite]: string} = {
    [Priorite.BASSE]: 'Basse',
    [Priorite.NORMALE]: 'Normale',
    [Priorite.ELEVEE]: 'Elevée',
    [Priorite.PRIORITAIRE]: 'Prioritaire',
    [Priorite.CRITIQUE]: 'Critique'
};