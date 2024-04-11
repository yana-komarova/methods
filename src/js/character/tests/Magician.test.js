import Magician from '../classes/Magician';

describe('Magician', () => {
  const magician = new Magician('John');
  const expected = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  test('следует создать нового мага с действительным именем', () => {
    expect(magician).toEqual(expected);
  });
});