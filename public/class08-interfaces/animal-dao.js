"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = __importDefault(require("../class07-classes/Animal"));
var AnimalDao = /** @class */ (function () {
    function AnimalDao() {
        this.tablename = '';
        this.insert = function () {
            return true;
        };
        this.update = function () {
            return true;
        };
        this.delete = function () {
            return new Animal_1.default('Rex');
        };
        this.find = function () {
            return new Animal_1.default('Rex');
        };
        this.findAll = function () {
            return [new Animal_1.default('Rex')];
        };
    }
    return AnimalDao;
}());
exports.default = AnimalDao;
