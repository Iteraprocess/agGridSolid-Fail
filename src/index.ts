import { render } from "solid-js/web";
import MySolidApp from "./MySolidApp";

const dom = document.querySelector('#main');

render(MySolidApp, dom as Element);