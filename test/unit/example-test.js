// Mocha
describe('Calculadora', () => {
  it('deve somar dois números corretamente', () => {});

  it('deve multiplicar dois números corretamente', () => {});

  it('deve dividir dois números corretamente', () => {});

  it('deve subtrair dois números corretamente', () => {});
});

// Chai
assert.equal(2 + 2, 4);

expect(2 + 2).to.equal(4);

(2 + 2).should.equal(4);

// Sinon
const spy = sinon.spy();

spy();

expect(spy.calledOnce).to.be.true;

const stub = sinon.stub().returns(42);
expect(stub()).to.equal(42);

const mock = sinon.mock(objeto);
mock.expects('metodo').once().withArgs(1).returns(2);
mock.expects().once().withArgs(2).returns(3);

expect(objeto.metodo(1)).to.equal(2);
expect(objeto.metodo(2)).to.equal(3);

mock.verify();
