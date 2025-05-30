class Calculadora {
  constructor() {
    this.historico = [];
    this.ultimoResultado = 0;
  }

  somar(a, b) {
    if (b === undefined) {
      b = a;
      a = this.ultimoResultado;
    }
    const resultado = a + b;
    this.historico.push(`${a} + ${b} = ${resultado}`);
    this.ultimoResultado = resultado;
    return this;
  }

  subtrair(a, b) {
    if (b === undefined) {
      b = a;
      a = this.ultimoResultado;
    }
    const resultado = a - b;
    this.historico.push(`${a} - ${b} = ${resultado}`);
    this.ultimoResultado = resultado;
    return this;
  }

  multiplicar(a, b) {
    if (b === undefined) {
      b = a;
      a = this.ultimoResultado;
    }
    const resultado = a * b;
    this.historico.push(`${a} * ${b} = ${resultado}`);
    this.ultimoResultado = resultado;
    return this;
  }

  dividir(a, b) {
    if (b === undefined) {
      b = a;
      a = this.ultimoResultado;
    }
    const resultado = a / b;
    this.historico.push(`${a} / ${b} = ${Math.round(resultado)}`);
    this.ultimoResultado = Math.round(resultado);
    return this;
  }

  limparHistorico() {
    this.historico = [];
    this.ultimoResultado = 0;
    return this;
  }

  obterResultado() {
    return BigInt(this.ultimoResultado);
  }

  toJSON() {
    return JSON.stringify({
        historico: [...this.historico],
        ultimoResultado: this.ultimoResultado
    })
  }

  toString() {
    if (this.historico.length === 0) return "Calculadora Limpa";
    const historicoFormatado = this.historico
      .map((op, i) => `${i + 1}. ${op}`)
      .join('\n');
    return `=== Histórico da Calculadora ===\n${historicoFormatado}\n=== Fim do Histórico ===\nForam realizadas ${this.historico.length} operações\nÚltimo Resultado: ${this.ultimoResultado}`;
  }
}

const calc = new Calculadora();
calc.somar(1, 2).subtrair(1).multiplicar(10).dividir(2);
console.log(calc.toString());
console.log(calc.toJSON());
console.log(calc.obterResultado());
