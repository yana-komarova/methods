import Bowerman from '../classes/Bowerman';

describe('Bowerman', () => {
  const bowerman = new Bowerman('John');
  const expected = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  test('следует создать нового Бауэрмана с действительным именем', () => {
    expect(bowerman).toEqual(expected);
  });
}); 