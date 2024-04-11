import Swordsman from '../classes/Swordsman';

describe('Swordsman', () => {
  const swordsman = new Swordsman('John');
  const expected = {
    name: 'John',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  test('следует создать нового фехтовальщика с действительным именем', () => {
    expect(swordsman).toEqual(expected);
  });
});