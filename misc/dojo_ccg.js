class Card {
    constructor(name,cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost)
        this.power = power
        this.res = res
    }

    attack(target){
        target.res -= this.power
    }
}

class Effect extends Card{
    constructor(name,cost,stat,magnitude){
        super(name,cost)
        this.stat = stat
        this.magnitude = magnitude
    }

    play(target){
        if (target instanceof Unit){
            if (this.stat == "power"){
                target.power += this.magnitude
            }
            else if (this.stat == "res"){
                target.res += this.magnitude
            }
        }
        else{
            throw new Error("Target must be a unit!");
        }
    }
}

const newUnit = new Unit("Unit",5,5,5)
const newUnit2 = new Unit("Unit2",5,5,5)
const newEffect = new Effect("Effect",1,"power",2)
newEffect.play(newUnit)
console.log(newUnit)
newUnit.attack(newUnit2)
console.log(newUnit2)