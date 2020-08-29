"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
var Animal_1 = __importDefault(require("./Animal"));
var Cavalo = /** @class */ (function (_super) {
    __extends(Cavalo, _super);
    function Cavalo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cavalo.prototype.move = function (meters) {
        console.log('Galopando');
        _super.prototype.move.call(this, meters);
    };
    return Cavalo;
}(Animal_1.default));
exports.default = Cavalo;
