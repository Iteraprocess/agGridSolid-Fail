"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ag_grid_solid_1 = __importDefault(require("ag-grid-solid"));
function MySolidApp() {
    return (
    // set fixed size to parent div, and apply grid theme ag-theme-alpine
    <div style={{ height: '500px' }} class="ag-theme-alpine">
            <ag_grid_solid_1.default rowData={[]} columnDefs={[]}/>
        </div>);
}
exports.default = MySolidApp;
;
