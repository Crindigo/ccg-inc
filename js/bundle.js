(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 *
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseComponent = (function (_React$Component) {
    _inherits(BaseComponent, _React$Component);

    function BaseComponent() {
        _classCallCheck(this, BaseComponent);

        _get(Object.getPrototypeOf(BaseComponent.prototype), "constructor", this).apply(this, arguments);
    }

    /*
    ExampleComponent.propTypes = {
        aStringProp: React.PropTypes.string
    };
    ExampleComponent.defaultProps = {
        aStringProp: ''
    };
    */

    _createClass(BaseComponent, [{
        key: "_bind",

        //constructor() {
        //    super();
        // instead of getInitialState()
        //this.state = {};
        //}

        value: function _bind() {
            var _this = this;

            for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
                methods[_key] = arguments[_key];
            }

            methods.forEach(function (method) {
                return _this[method] = _this[method].bind(_this);
            });
        }
    }]);

    return BaseComponent;
})(React.Component);

exports["default"] = BaseComponent;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Pack = function Pack() {
    _classCallCheck(this, Pack);
};

exports.Pack = Pack;

var Card = function Card(category, name, element, type, power, health, lore) {
    var effectDesc = arguments.length <= 7 || arguments[7] === undefined ? '' : arguments[7];

    _classCallCheck(this, Card);

    this.category = category;
    this.name = name;
    this.element = element;
    this.type = type;
    this.power = power;
    this.health = health;
    this.lore = lore;
    this.effectDesc = effectDesc;

    this.rarity = Rarity.COMMON;
};

exports.Card = Card;

var CreatureCard = (function (_Card) {
    _inherits(CreatureCard, _Card);

    function CreatureCard(name, element, type, power, health, lore) {
        var effectDesc = arguments.length <= 6 || arguments[6] === undefined ? '' : arguments[6];

        _classCallCheck(this, CreatureCard);

        _get(Object.getPrototypeOf(CreatureCard.prototype), 'constructor', this).call(this, Category.CREATURE, name, element, type, power, health, lore, effectDesc);
    }

    return CreatureCard;
})(Card);

exports.CreatureCard = CreatureCard;

var SpellCard = (function (_Card2) {
    _inherits(SpellCard, _Card2);

    function SpellCard(name, element, type, lore) {
        var effectDesc = arguments.length <= 4 || arguments[4] === undefined ? '' : arguments[4];

        _classCallCheck(this, SpellCard);

        _get(Object.getPrototypeOf(SpellCard.prototype), 'constructor', this).call(this, Category.SPELL, name, element, type, 0, 0, lore, effectDesc);
    }

    return SpellCard;
})(Card);

exports.SpellCard = SpellCard;

var CounterCard = (function (_Card3) {
    _inherits(CounterCard, _Card3);

    function CounterCard(name, element, lore) {
        var effectDesc = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

        _classCallCheck(this, CounterCard);

        _get(Object.getPrototypeOf(CounterCard.prototype), 'constructor', this).call(this, Category.COUNTER, name, element, Type.COUNTER, 0, 0, lore, effectDesc);
    }

    return CounterCard;
})(Card);

exports.CounterCard = CounterCard;
var Category = {
    CREATURE: 'CREATURE',
    SPELL: 'SPELL',
    COUNTER: 'COUNTER'
};

exports.Category = Category;
var Rarity = {
    COMMON: 'COMMON',
    UNCOMMON: 'UNCOMMON',
    RARE: 'RARE',
    SECRET: 'SECRET'
};

exports.Rarity = Rarity;
var Element = {
    FIRE: 'FIRE',
    WATER: 'WATER',
    WIND: 'WIND',
    EARTH: 'EARTH',
    LIGHT: 'LIGHT',
    DARK: 'DARK'
};

exports.Element = Element;
var Type = {
    BEAST: 'BEAST',
    MACHINE: 'MACHINE',
    UNDEAD: 'UNDEAD',
    FAIRY: 'FAIRY',

    INSTANT: 'INSTANT',
    COUNTER: 'COUNTER'
};
exports.Type = Type;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _base = require('./base');

var Tier1Pack = (function (_Pack) {
    _inherits(Tier1Pack, _Pack);

    function Tier1Pack() {
        _classCallCheck(this, Tier1Pack);

        _get(Object.getPrototypeOf(Tier1Pack.prototype), 'constructor', this).call(this, 'Tier 1');

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

    return Tier1Pack;
})(_base.Pack);

exports.Tier1Pack = Tier1Pack;

var Squirrel = (function (_CreatureCard) {
    _inherits(Squirrel, _CreatureCard);

    function Squirrel() {
        _classCallCheck(this, Squirrel);

        _get(Object.getPrototypeOf(Squirrel.prototype), 'constructor', this).call(this, 'Squirrel', _base.Element.EARTH, _base.Type.BEAST, 1, 1, 'This small creature dies easily');
    }

    return Squirrel;
})(_base.CreatureCard);

var Roomba = (function (_CreatureCard2) {
    _inherits(Roomba, _CreatureCard2);

    function Roomba() {
        _classCallCheck(this, Roomba);

        _get(Object.getPrototypeOf(Roomba.prototype), 'constructor', this).call(this, 'Roomba', _base.Element.EARTH, _base.Type.MACHINE, 1, 1, 'A vacuum for lazy people.');
    }

    return Roomba;
})(_base.CreatureCard);

var FleshLump = (function (_CreatureCard3) {
    _inherits(FleshLump, _CreatureCard3);

    function FleshLump() {
        _classCallCheck(this, FleshLump);

        _get(Object.getPrototypeOf(FleshLump.prototype), 'constructor', this).call(this, 'Flesh Lump', _base.Element.DARK, _base.Type.UNDEAD, 1, 1, 'I guess it\'s still moving.');
    }

    return FleshLump;
})(_base.CreatureCard);

var FireSprite = (function (_CreatureCard4) {
    _inherits(FireSprite, _CreatureCard4);

    function FireSprite() {
        _classCallCheck(this, FireSprite);

        _get(Object.getPrototypeOf(FireSprite.prototype), 'constructor', this).call(this, 'Fire Sprite', _base.Element.FIRE, _base.Type.FAIRY, 1, 1, 'Watch out for those first degree burns.');
    }

    return FireSprite;
})(_base.CreatureCard);

var OffBrandPotion = (function (_SpellCard) {
    _inherits(OffBrandPotion, _SpellCard);

    function OffBrandPotion() {
        _classCallCheck(this, OffBrandPotion);

        _get(Object.getPrototypeOf(OffBrandPotion.prototype), 'constructor', this).call(this, 'Off-Brand Potion', _base.Element.WATER, _base.Type.INSTANT, 'Sold by a very eccentric foreigner.', 'Restore 1 life to self.');
    }

    _createClass(OffBrandPotion, [{
        key: 'onUse',
        value: function onUse(game, owner, opp) {
            owner.addLife(1);
        }
    }]);

    return OffBrandPotion;
})(_base.SpellCard);

var Blowdart = (function (_SpellCard2) {
    _inherits(Blowdart, _SpellCard2);

    function Blowdart() {
        _classCallCheck(this, Blowdart);

        _get(Object.getPrototypeOf(Blowdart.prototype), 'constructor', this).call(this, 'Blowdart', _base.Element.EARTH, _base.Type.INSTANT, 'State-of-the-art weaponry from 900 years ago.', 'Deal 1 damage to opponent.');
    }

    _createClass(Blowdart, [{
        key: 'onUse',
        value: function onUse(game, owner, opp) {
            opp.addLife(-1);
        }
    }]);

    return Blowdart;
})(_base.SpellCard);

var Clumsy = (function (_CounterCard) {
    _inherits(Clumsy, _CounterCard);

    function Clumsy() {
        _classCallCheck(this, Clumsy);

        _get(Object.getPrototypeOf(Clumsy.prototype), 'constructor', this).call(this, 'Clumsy', _base.Element.EARTH, 'Too excited from the attack, you weren\'t paying attention and tripped.', 'After being attacked: Deal 1 damage to random attacker.');
    }

    _createClass(Clumsy, [{
        key: 'onAfterSelfAttacked',
        value: function onAfterSelfAttacked(game, owner, opp) {
            opp.getRandomCreature().damage(1);
        }
    }]);

    return Clumsy;
})(_base.CounterCard);

var CounterHeal1 = (function (_CounterCard2) {
    _inherits(CounterHeal1, _CounterCard2);

    function CounterHeal1() {
        _classCallCheck(this, CounterHeal1);

        _get(Object.getPrototypeOf(CounterHeal1.prototype), 'constructor', this).call(this, 'Counter-Heal 1', _base.Element.LIGHT, 'Cheap auto-potion.', 'After taking damage: Restore 2 life to self.');
        this.rarity = _base.Rarity.UNCOMMON;
    }

    _createClass(CounterHeal1, [{
        key: 'onAfterSelfDamaged',
        value: function onAfterSelfDamaged(game, owner, opp, damage) {
            owner.addLife(2);
        }
    }]);

    return CounterHeal1;
})(_base.CounterCard);

var SharingIsCaring = (function (_CounterCard3) {
    _inherits(SharingIsCaring, _CounterCard3);

    function SharingIsCaring() {
        _classCallCheck(this, SharingIsCaring);

        _get(Object.getPrototypeOf(SharingIsCaring.prototype), 'constructor', this).call(this, 'Sharing is Caring', _base.Element.LIGHT, 'Spreading the kindness.', 'After a player is healed: heal the other player by the same amount.');
    }

    _createClass(SharingIsCaring, [{
        key: 'onAfterSelfHeal',
        value: function onAfterSelfHeal(game, owner, opp, heal) {
            opp.addLife(heal);
        }
    }, {
        key: 'onAfterOppHeal',
        value: function onAfterOppHeal(game, owner, opp, heal) {
            owner.addLife(heal);
        }
    }]);

    return SharingIsCaring;
})(_base.CounterCard);

},{"./base":2}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _baseComponent = require('./base-component');

var _baseComponent2 = _interopRequireDefault(_baseComponent);

var _cardsTier1 = require('./cards/tier1');

var CCG = function CCG(selector) {
    _classCallCheck(this, CCG);

    React.render(React.createElement(ExampleComponent, null), document.querySelector(selector));
};

var ExampleComponent = (function (_BaseComponent) {
    _inherits(ExampleComponent, _BaseComponent);

    function ExampleComponent() {
        _classCallCheck(this, ExampleComponent);

        _get(Object.getPrototypeOf(ExampleComponent.prototype), 'constructor', this).call(this);
        this._bind('_handleClick');
    }

    _createClass(ExampleComponent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { onClick: this._handleClick },
                'Hello, world.'
            );
        }
    }, {
        key: '_handleClick',
        value: function _handleClick() {
            console.log(this);
            alert('Click');
        }
    }]);

    return ExampleComponent;
})(_baseComponent2['default']);

new CCG('#ccgRoot');

},{"./base-component":1,"./cards/tier1":3}]},{},[4]);
