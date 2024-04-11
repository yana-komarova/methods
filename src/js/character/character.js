export default class Character {
    constructor(name, type) {
      if (name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть длиной от 2 до 10 символов');
      }
      if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
        throw new Error('Некорректный тип персонажа');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
  
      switch (type) {
        case 'Bowman':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Swordsman':
          this.attack = 40;
          this.defence = 10;
          break;
        case 'Magician':
          this.attack = 10;
          this.defence = 40;
          break;
        case 'Undead':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Zombie':
          this.attack = 40;
          this.defence = 10;
          break;
        case 'Daemon':
          this.attack = 10;
          this.defence = 40;
          break;
      }
    }
  }
  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
  
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }
  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }