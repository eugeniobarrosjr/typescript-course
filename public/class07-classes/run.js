"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = __importDefault(require("./Animal"));
var Horse_1 = __importDefault(require("./Horse"));
var animal = new Animal_1.default('Rex');
animal.move(20);
var horse = new Horse_1.default('Titã');
horse.move(20);
