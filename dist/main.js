"use strict";

var _cliente = require("./src/cliente.mjs");
var _impuestos = require("./src/impuestos.mjs");
var impuesto1 = new _impuestos.Impuestos(100000, 30000);
console.log(impuesto1);
console.log(impuesto1.montoBrutoAnual);
console.log(impuesto1.deducciones);
var cliente1 = new _cliente.Cliente("David", impuesto1);
console.log(cliente1);
console.log(cliente1.nombre);
cliente1.nombre = "Eduardo";
console.log(cliente1.nombre);
cliente1.calcularImpuesto();