const { expect } = require('chai');
const soma = require('../src/calculadora.js');

describe('Função soma', () => {
  it('deve retornar a soma de dois números', () => {
    const resultado = soma(2, 3);

    expect(resultado).to.equal(5);
  });

  it('deve retornar a soma correta de números negativos', () => {
    const resultado = soma(-1, -1);

    expect(resultado).to.equal(-2);
  });
});
