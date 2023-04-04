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
        if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`;}
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
        this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength)
        //remove dead saxon
        // if(this.saxonArmy.health.includes(0)){this.saxonArmy.splice(this.saxonArmy.health.indexOf(0),1)}
    }
    saxonAttack(){
        this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength)
    }
    showStatus(){}
}
