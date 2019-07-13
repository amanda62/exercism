/*
# D&D Character

Generate a character: 
six abilities, scores determined randomly 4*6-sided dice. sum of three highest rolls.
strength, dexterity, constitution, intelligence, wisdom and charisma. 

initial hitpoints =  10 + character's constitution modifier
constitution modifier  = (constitution-10)/2  round down

*/

export const abilityModifier = (constitution) => {
    if (constitution < 3) throw new Error('Ability scores must be at least 3');
    if (constitution > 18) throw new Error('Ability scores can be at most 18');
    return Math.floor((constitution - 10) / 2);
};

export class Character {
    constructor() {
        this._strength = Character.rollAbility();
        this._dexterity = Character.rollAbility();
        this._constitution = Character.rollAbility();
        this._intelligence = Character.rollAbility();
        this._wisdom = Character.rollAbility();
        this._charisma = Character.rollAbility();
    }

    get strength() { return this._strength; }
    get dexterity() { return this._dexterity; }
    get constitution() { return this._constitution; }
    get intelligence() { return this._intelligence; }
    get wisdom() { return this._wisdom; }
    get charisma() { return this._charisma; }
    get hitpoints() { return 10 + abilityModifier(this._constitution); }

    static rollAbility() {
        let diceRoll = [];
        while (diceRoll.length < 3) diceRoll.push(getRandomInt(1, 6));

        diceRoll.sort((a, b) => a - b);

        let sum = diceRoll.slice(0, 3);
        return sum.reduce((sum, roll) => sum += roll);
    }
}

//AUX FUNCTIONS
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
