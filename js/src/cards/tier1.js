import { Pack, CreatureCard, SpellCard, CounterCard, Element, Type, Rarity } from './base';

export class Tier1Pack extends Pack {
    constructor() {
        super('Tier 1');

        add(new Squirrel());
        add(new Roomba());
        add(new FleshLump());
        add(new FireSprite());
        add(new OffBrandPotion());
        add(new Blowdart());
        add(new Clumsy());
        add(new CounterHeal1());
        add(new SharingIsCaring());
    }
}

class Squirrel extends CreatureCard {
    constructor() {
        super('Squirrel', Element.EARTH, Type.BEAST, 1, 1, 'This small creature dies easily');
    }
}

class Roomba extends CreatureCard {
    constructor() {
        super('Roomba', Element.EARTH, Type.MACHINE, 1, 1, 'A vacuum for lazy people.');
    }
}

class FleshLump extends CreatureCard {
    constructor() {
        super('Flesh Lump', Element.DARK, Type.UNDEAD, 1, 1, 'I guess it\'s still moving.');
    }
}

class FireSprite extends CreatureCard {
    constructor() {
        super('Fire Sprite', Element.FIRE, Type.FAIRY, 1, 1, 'Watch out for those first degree burns.');
    }
}

class OffBrandPotion extends SpellCard {
    constructor() {
        super('Off-Brand Potion', Element.WATER, Type.INSTANT, 'Sold by a very eccentric foreigner.',
            'Restore 1 life to self.');
    }

    onUse(game, owner, opp) {
        owner.addLife(1);
    }
}

class Blowdart extends SpellCard {
    constructor() {
        super('Blowdart', Element.EARTH, Type.INSTANT, 'State-of-the-art weaponry from 900 years ago.',
            'Deal 1 damage to opponent.');
    }

    onUse(game, owner, opp) {
        opp.addLife(-1);
    }
}

class Clumsy extends CounterCard {
    constructor() {
        super('Clumsy', Element.EARTH, 'Too excited from the attack, you weren\'t paying attention and tripped.',
            'After being attacked: Deal 1 damage to random attacker.');
    }

    onAfterSelfAttacked(game, owner, opp) {
        opp.getRandomCreature().damage(1);
    }
}

class CounterHeal1 extends CounterCard {
    constructor() {
        super('Counter-Heal 1', Element.LIGHT, 'Cheap auto-potion.', 'After taking damage: Restore 2 life to self.');
        this.rarity = Rarity.UNCOMMON;
    }

    onAfterSelfDamaged(game, owner, opp, damage) {
        owner.addLife(2);
    }
}

class SharingIsCaring extends CounterCard {
    constructor() {
        super('Sharing is Caring', Element.LIGHT, 'Spreading the kindness.',
            'After a player is healed: heal the other player by the same amount.');
    }

    onAfterSelfHeal(game, owner, opp, heal) {
        opp.addLife(heal);
    }

    onAfterOppHeal(game, owner, opp, heal) {
        owner.addLife(heal);
    }
}
