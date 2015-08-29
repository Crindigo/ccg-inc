export class Pack
{

}

export class Card
{
    constructor(category, name, element, type, power, health, lore, effectDesc = '') {
        this.category = category;
        this.name = name;
        this.element = element;
        this.type = type;
        this.power = power;
        this.health = health;
        this.lore = lore;
        this.effectDesc = effectDesc;

        this.rarity = Rarity.COMMON;
    }
}

export class CreatureCard extends Card
{
    constructor(name, element, type, power, health, lore, effectDesc = '') {
        super(Category.CREATURE, name, element, type, power, health, lore, effectDesc);
    }
}

export class SpellCard extends Card
{
    constructor(name, element, type, lore, effectDesc = '') {
        super(Category.SPELL, name, element, type, 0, 0, lore, effectDesc);
    }
}

export class CounterCard extends Card
{
    constructor(name, element, lore, effectDesc = '') {
        super(Category.COUNTER, name, element, Type.COUNTER, 0, 0, lore, effectDesc);
    }
}

export var Category = {
    CREATURE: 'CREATURE',
    SPELL: 'SPELL',
    COUNTER: 'COUNTER'
};

export var Rarity = {
    COMMON: 'COMMON',
    UNCOMMON: 'UNCOMMON',
    RARE: 'RARE',
    SECRET: 'SECRET'
};

export var Element = {
    FIRE: 'FIRE',
    WATER: 'WATER',
    WIND: 'WIND',
    EARTH: 'EARTH',
    LIGHT: 'LIGHT',
    DARK: 'DARK'
};

export var Type = {
    BEAST: 'BEAST',
    MACHINE: 'MACHINE',
    UNDEAD: 'UNDEAD',
    FAIRY: 'FAIRY',

    INSTANT: 'INSTANT',
    COUNTER: 'COUNTER'
};
