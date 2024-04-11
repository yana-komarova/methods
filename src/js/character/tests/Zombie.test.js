import Zombie from '../classes/Zombie';

describe('Zombie', () => {
  const zombie = new Zombie('John');
  const expected = {
    name: 'John',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  test('следует создать нового зомби с действительным именем', () => {
    expect(zombie).toEqual(expected);
  });
});