class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  get nombre() {
    return this.nombre;
  }
  set nombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  /* calcularImpuesto(montoBrutoAnual, deducciones){
       let formula = (montoBrutoAnual - deducciones)* 0.21
       return formula
    } */

  calcularImpuesto(montoBrutoAnual, deducciones) {
    if (this.impuesto) {
      montoBrutoAnual = this.impuesto.montoBrutoAnual;
      deducciones = this.impuesto.deducciones;
      let formula = (montoBrutoAnual - deducciones) * 0.21;
      return formula;
    }
  }
}
