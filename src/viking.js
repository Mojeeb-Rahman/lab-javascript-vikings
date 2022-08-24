// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      //   console.log(`${this.name} has died in act of combat`);
      return `${this.name} has died in act of combat`;
    } else {
      //   console.log(`${this.name} has received ${damage} points of damage`);
      return `${this.name} has received ${damage} points of damage`;
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      //   console.log(`A Saxon has died in combat`);
      return `A Saxon has died in combat`;
    } else {
      //   console.log(`A Saxon has received ${damage} points of damage`);
      return `A Saxon has received ${damage} points of damage`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObject) {
    this.vikingArmy.push(vikingObject);
  }

  addSaxon(saxonObject) {
    this.saxonArmy.push(saxonObject);
  }

  vikingAttack() {
    const vikingArmyRandomIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const saxonArmyRandomIndex = Math.floor(
      Math.random() * this.saxonArmy.length
    );
    // console.log("Viking Array Length: " + this.vikingArmy);
    // console.log("Viking Index: " + vikingArmyRandomIndex);

    // console.log("Saxon Array Length: " + this.saxonArmy);
    // console.log("Saxon Index: " + saxonArmyRandomIndex);

    const viking = this.vikingArmy[vikingArmyRandomIndex];
    const saxon = this.saxonArmy[saxonArmyRandomIndex];

    const vikingAttackResult = saxon.receiveDamage(viking.strength);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxonArmyRandomIndex, 1);
    }
    return vikingAttackResult;
  }

  saxonAttack() {
    const vikingArmyRandomIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const saxonArmyRandomIndex = Math.floor(
      Math.random() * this.saxonArmy.length
    );
    // console.log("Viking Array Length: " + this.vikingArmy);
    // console.log("Viking Index: " + vikingArmyRandomIndex);

    // console.log("Saxon Array Length: " + this.saxonArmy);
    // console.log("Saxon Index: " + saxonArmyRandomIndex);

    const viking = this.vikingArmy[vikingArmyRandomIndex];
    const saxon = this.saxonArmy[saxonArmyRandomIndex];

    const saxonAttackResult = viking.receiveDamage(saxon.strength);

    if (viking.health <= 0) {
      this.vikingArmy.splice(vikingArmyRandomIndex, 1);
    }
    return saxonAttackResult;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
const vikingSaxonWar = new War();
vikingSaxonWar.addViking(new Viking("Mojeeb Rahman 1", 80, 50));
vikingSaxonWar.addViking(new Viking("Mojeeb Rahman 2", 50, 50));
vikingSaxonWar.addViking(new Viking("Mojeeb Rahman 3", 100, 50));
vikingSaxonWar.addViking(new Viking("Mojeeb Rahman 4", 70, 70));
vikingSaxonWar.addViking(new Viking("Mojeeb Rahman 5", 90, 50));
vikingSaxonWar.addViking(new Viking("Mojeeb Rahman 6", 100, 90));

vikingSaxonWar.addSaxon(new Saxon(80, 80));
vikingSaxonWar.addSaxon(new Saxon(50, 100));
vikingSaxonWar.addSaxon(new Saxon(50, 80));
vikingSaxonWar.addSaxon(new Saxon(50, 120));
vikingSaxonWar.addSaxon(new Saxon(70, 80));
vikingSaxonWar.addSaxon(new Saxon(50, 80));

for (let index = 0; index < 4; index++) {
  vikingSaxonWar.vikingAttack();
  vikingSaxonWar.saxonAttack();
}

console.log(vikingSaxonWar.showStatus());
