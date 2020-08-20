"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 23;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Bob");
console.log(person);
person.printAge();
person.setType('admin');
var Bob = /** @class */ (function (_super) {
    __extends(Bob, _super);
    function Bob() {
        var _this = _super.call(this, 'alice') || this;
        _this.age = 12;
        return _this;
    }
    return Bob;
}(Person));
var bob = new Bob();
console.log(bob);
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species + 'xxx';
        },
        set: function (value) {
            this._species = value;
        },
        enumerable: false,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Bob's species";
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calcCircumference(8));
