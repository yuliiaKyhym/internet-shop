class Parent {

    constructor(firstName, age) {
        this.firstName = firstName
        this.age = age
        this.lastName = "Kyhym"
    }

    greeting() {
        console.log('Hey!')
    }

    tellName() {
        console.log(`My name is ${this.firstName} ${this.lastName} !`)
    }

    tellAge() {
        console.log(`I'm ${this.age} years old!`)
    }

    tellJobTitle() {
        if (this instanceof Child) {
            console.log(`I don't have job title`)
        } else {
            this.job = "QA"
            console.log(`My job title is ${this.job}!`)

        }

    }
}

class Child extends Parent {

    greeting() {
        console.log(`Hey! This is new greeting`)
    }

    goToSchool() {
        console.log(`I like to go to school`)
    }

}

const parent = new Parent('Yuliia', 27)
const child = new Child('Illia', 1)

parent.greeting()
parent.tellName()
parent.tellAge()
parent.tellJobTitle()


child.greeting()
child.tellName()
child.tellAge()
child.goToSchool()
child.tellJobTitle()

