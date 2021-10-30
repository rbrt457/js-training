class Fighter {
    constructor(name, damagePerAttack , health ){
        this.name = name
        this.damagePerAttack  = damagePerAttack
        this.health  = health
    }
}

let david = new Fighter('David', 10, 6)
let jhon = new Fighter('Jhon', 5, 4)


function fight(fighter1, fighter2, firstAttacker){
    let firstHit
    let secondHit
        if(fighter1.name === firstAttacker || fighter2.name === firstAttacker){
            if(fighter1.name === firstAttacker){
                firstHit = fighter1
                secondHit = fighter2
            }
            else{
                firstHit = fighter2
                secondHit = fighter1
            }
            while(firstHit.health  >= 0 || secondHit.health  >= 0){
                if(firstHit.health  > 0){
                    secondHit.health  -= firstHit.damagePerAttack
                }
                if(secondHit.health  > 0){
                    firstHit.health  -= secondHit.damagePerAttack
                }
                if(firstHit.health  <= 0 || secondHit.health  <= 0){
                    break
                }
            }
            console.log(`Боец 1: Имя - ${fighter1.name}, Урон - '${fighter1.damagePerAttack }' ,Здоровье - '${fighter1.health }'`)
            console.log(`Боец 2: Имя - ${fighter2.name}, Урон - '${fighter2.damagePerAttack }' , Здоровье - '${fighter2.health }'`)
            if (fighter1.health  > 0 && fighter2.health  <= 0){
                console.log(`Победил - ${fighter1.name}`)
                return fighter1.name
            }
            else{
            console.log(`Победил - ${fighter2.name}`)
            return fighter2.name
            }
        }
        else{
            console.log('Такого бойца нет')
        }
}
fight(david, jhon, 'Jhon')