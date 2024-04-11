import Character from '../Character';
import Bowerman from '../classes/Bowerman';
import Swordsman from '../classes/Swordsman';
import Magician from '../classes/Magician';
import Daemon from '../classes/Daemon';
import Undead from '../classes/Undead';
import Zombie from '../classes/Zombie';

describe('Character', () => {
  it('should create a new character with valid name and type', () => {
    const character = new Character('John', 'Bowman');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Bowman');
  });

  it('should throw an error if name is less than 2 characters', () => {
    expect(() => new Character('J', 'Bowman')).toThrow('Имя должно быть длиной от 2 до 10 символов');
  });

  it('should throw an error if name is more than 10 characters', () => {
    expect(() => new Character('John Doe', 'Bowman')).toThrow('Имя должно быть длиной от 2 до 10 символов');
  });

  it('should throw an error if type is invalid', () => {
    expect(() => new Character('John', 'Invalid')).toThrow('Некорректный тип персонажа');
  });

  it('should set default values for health, level, attack, and defence', () => {
    const character = new Character('John', 'Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(25);
    expect(character.defence).toBe(25);
  });
});

describe('Bowerman', () => {
  it('should create a new bowerman with valid name', () => {
    const bowerman = new Bowerman('John');
    expect(bowerman.name).toBe('John');
    expect(bowerman.type).toBe('Bowman');
    expect(bowerman.attack).toBe(25);
    expect(bowerman.defence).toBe(25);
  });
});

import Swordsman from '../classes/Swordsman';

describe('Swordsman', () => {
  it('should create a new swordsman with valid name', () => {
    const swordsman = new Swordsman('John');
    expect(swordsman.name).toBe('John');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });
});

import Magician from '../classes/Magician';

describe('Magician', () => {
  it('should create a new magician with valid name', () => {
    const magician = new Magician('John');
    expect(magician.name).toBe('John');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });
});

import Daemon from '../classes/Daemon';

describe('Daemon', () => {
  it('should create a new daemon with valid name', () => {
    const daemon = new Daemon('John');
    expect(daemon.name).toBe('John');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });
});

import Undead from '../classes/Undead';

describe('Undead', () => {
  it('should create a new undead with valid name', () => {
    const undead = new Undead('John');
    expect(undead.name).toBe('John');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});

import Zombie from '../classes/Zombie';

describe('Zombie', () => {
  it('should create a new zombie with valid name', () => {
    const zombie = new Zombie('John');
    expect(zombie.name).toBe('John');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});

it('should level up character', () => {
    const character = new Character('John', 'Bowman');
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBeCloseTo(27.5); // округление до одного знака после запятой
    expect(character.defence).toBeCloseTo(27.5);
    expect(character.health).toBe(100);
  });

  it('should throw an error if character is dead when trying to level up', () => {
    const character = new Character('John', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
  });

  it('should apply damage to character', () => {
    const character = new Character('John', 'Bowman');
    character.damage(10);
    expect(character.health).toBeCloseTo(85); // округление до одного знака после запятой
  });

  it('should not let health go below 0', () => {
    const character = new Character('John', 'Bowman');
    character.damage(150);
    expect(character.health).toBe(0);
  });
