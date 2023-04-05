// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`;}
        if(this.health === 0){return `${this.name} has died in act of combat`;}
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0){return `A Saxon has received ${damage} points of damage`;}
        if(this.health === 0){return `A Saxon has died in combat`;}
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonObject){
        this.saxonArmy.push(saxonObject);
    }
    vikingAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        const saxonAlive = this.saxonArmy.filter(saxons => saxons.health > 0);
        const saxonDead = this.saxonArmy.filter(saxons => saxons.health === 0);
        this.saxonArmy = saxonAlive;


        if(saxonDead.length > 0){return `A Saxon has received ${this.vikingArmy[randomViking].strength} points of damage`;}
        if(saxonDead.length === 0){return `A Saxon has died in combat`;}
        // return receiveDamage();
    }
    saxonAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let vikingClone = this.vikingArmy;
        this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        const vikingsAlive = this.vikingArmy.filter(vikings => vikings.health > 0);
        const vikingDead = this.vikingArmy.filter(vikings => vikings.health === 0);
        this.vikingArmy = vikingsAlive;

        if(vikingDead.length === 0){return `${vikingClone[randomViking].name} has received ${this.saxonArmy[randomSaxon].strength} points of damage`;}
        if(vikingDead.length > 0){return `${vikingClone[randomViking].name} has died in act of combat`;}
    }
    showStatus(){
        if (this.saxonArmy.length === 0){return "Vikings have won the war of the century!";}
        if (this.vikingArmy.length === 0){return "Saxons have fought for their lives and survived another day...";}
        if (this.vikingArmy.length === 1 && this.saxonArmy.length === 1){return "Vikings and Saxons are still in the thick of battle."}
    }
}
