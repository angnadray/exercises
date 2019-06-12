function Pokemon(name, health, magic) {
    // pokemon nme
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];

    // learn an attack skill
    // save our attack skill to our skills array
    this.learnAttackSkill = function (attack) {
        this.skills.push(attack);
        console.log(this.skills);
    }
    this.showStatus = function () {
        console.log();
    }
    this.attack = function (attack, enemy) {
        // not enough magic
        if(this.magic < this.skills[attackIndex].magic)
        console.log("not enough magic");
        return;
    }
        // damage greater than enemy health (kills enemy)
        // enemy dead
        // self dead
        // attack successful 
    }


function AttackSkill(attack, damage, magic) {
    this.attack = attack;
    this.damage = damage;
    this.magic = magic;
}