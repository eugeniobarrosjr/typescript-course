"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.move = function (meters) {
        console.log(this.nome + " moves " + meters + "m");
    };
    return Animal;
}());
exports.default = Animal;
