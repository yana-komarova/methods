import Character from '../Character';

describe('Character', () => {
  const character = new Character('John', 'Bowman');
  const expected = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  test('Должен создать нового персонажа с валидным именем и типом', () => {
    expect(character).toEqual(expected);
  });
  
  test('Должен выбросить ошибку, если имя короче 2 символов', () => {
    expect(() => new Character('J', 'Bowman')).toThrow('Имя должно быть длиной от 2 до 10 символов');
  });
  
  test('Должен выбросить ошибку, если имя длиннее 10 символов', () => {
    expect(() => new Character('John Doe', 'Bowman')).toThrow('Имя должно быть длиной от 2 до 10 символов');
  });
  
  test('Должен выбросить ошибку, если тип невалидный', () => {
    expect(() => new Character('John', 'Invalid')).toThrow('Некорректный тип персонажа');
  });
  
  test('Должен установить значения по умолчанию для здоровья, уровня, атаки и защиты', () => {
    const character = new Character('John', 'Bowman');
    expect(character).toEqual(expected);
  });

  test('прокачать персонажа', () => {
    character.levelUp();
    expected.level = 2;
    expected.attack = 27.5; // округление до одного знака после запятой
    expected.defence = 27.5;
    expect(character).toEqual(expected);
  });

  test('должен выдавать ошибку, если персонаж мертв при попытке повысить уровень', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
  });

  test('должен наносить урон персонажу', () => {
    character.damage(10);
    expected.health = 90;
    expect(character).toEqual(expected);
  });

  test('не следует допускать, чтобы здоровье опускалось ниже 0', () => {
    character.damage(150);
    expected.health = 0;
    expect(character).toEqual(expected);
  });
});