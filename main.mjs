import { Cliente } from "./src/cliente.mjs";
import { Impuestos } from "./src/impuestos.mjs";

let impuesto1 = new Impuestos(100000, 30000);

console.log(impuesto1);
console.log(impuesto1.montoBrutoAnual);
console.log(impuesto1.deducciones);

let cliente1 = new Cliente("David", impuesto1);
console.log(cliente1);
console.log(cliente1.nombre);

cliente1.nombre = "Eduardo";
console.log(cliente1.nombre);

cliente1.calcularImpuesto();
