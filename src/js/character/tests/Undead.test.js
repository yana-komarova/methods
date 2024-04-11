import Undead from '../classes/Undead';

describe('Undead', () => {
  const undead = new Undead('John');
  const expected = {
    name: 'John',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  test('следует создать новую нежить с действительным именем', () => {
    expect(undead).toEqual(expected);
  });
});