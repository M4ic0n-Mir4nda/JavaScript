// eslint-disable-next-line import/extensions
import { somasHorasExtras, calculaDescontos } from '../index.js';

// eslint-disable-next-line no-undef
describe('Testes dos cálculos de folha', () => {
  // eslint-disable-next-line no-undef
  it('Deve retornas a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somasHorasExtras(2000, 500);

    // eslint-disable-next-line no-undef
    expect(retornado).toBe(esperado);
  });

  // eslint-disable-next-line no-undef
  it('Deve descontar o valor do salário', () => {
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200);

    // eslint-disable-next-line no-undef
    expect(retornado).toBe(esperado);
  });
});
