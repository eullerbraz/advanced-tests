const { expect } = require('chai');
const { fetchData, fetchDataPromise } = require('../src/asyncFunctions.js');

// Utiliza done para avisar que o teste terminou
describe('Função fetchData com Callback', () => {
  it('deve retornar "dados recebidos"', (done) => {
    fetchData((data) => {
      expect(data).to.equal('dados recebidos');
      done();
    });
  });
});

// Utiliza return da Promise para avisar que o teste terminou
describe('Função fetchData com Promise', () => {
  it('deve retornar "dados recebidos"', () => {
    return fetchDataPromise().then((resultado) => {
      expect(resultado).to.equal('dados recebidos');
    });
  });
});

// Utiliza async/await para avisar que o teste terminou, mais moderno
describe('Função fetchData com async/await', () => {
  it('deve retornar "dados recebidos"', async () => {
    const resultado = await fetchDataPromise();

    expect(resultado).to.equal('dados recebidos');
  });
});
