class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName = () => console.log(this.name)
    showStats = () => console.log(this)
    drinkSake = () => this.health += 10
}


class Sensei extends Ninja {
    constructor(name){
        super(name, 200,10,10)
        this.wisdom = 10
    }
    speakWisdom = () => {
        this.drinkSake()
        console.log("A Wise Message")
    }

}

const superSensei = new Sensei("Brad")
superSensei.speakWisdom()
superSensei.showStats()