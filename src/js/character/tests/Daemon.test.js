import Daemon from '../classes/Daemon';

describe('Daemon', () => {
  const daemon = new Daemon('John');
  const expected = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  test('следует создать новый демон с действительным именем', () => {
    expect(daemon).toEqual(expected);
  });
});