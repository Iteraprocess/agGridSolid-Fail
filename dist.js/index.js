"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web_1 = require("solid-js/web");
const MySolidApp_1 = __importDefault(require("./MySolidApp"));
const dom = document.querySelector('#main');
(0, web_1.render)(MySolidApp_1.default, dom);
