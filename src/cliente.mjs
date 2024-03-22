class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  calcularImpuesto() {
    if (this._impuesto) {
      let montoBrutoAnual = this._impuesto.montoBrutoAnual;
      let deducciones = this._impuesto.deducciones;
      let formula = (montoBrutoAnual - deducciones) * 0.21;
      console.log("total impuesto: " + formula);
      return formula;
    }
  }
}

export { Cliente };
