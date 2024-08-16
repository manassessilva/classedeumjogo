class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
        this.arm = ""

        if(type === "mago") {
            this.arm = "magia"
        }
        else if(type === "guerreiro") {
            this.arm = "espada"
        }
        else if(type === "monge") {
            this.arm = "artes marciais"
        }
        else if(type === "ninja") {
            this.arm = "shuriken"
        }
        else {
            console.log(
                "Insira um dos tipos válidos: " + "\n" + 
                "- mago" + "\n" + 
                "- guerreiro" + "\n" +
                "- monge" + "\n" +
                "- ninja" + "\n" + 
                "\n" + 
                "Veja um exemplo abaixo utilizando o tipo mago: " +
                "\n"
            )
            
            this.type = "mago"
            this.arm = "magia"
        }
    }
    
    

    attack() {
        console.log(`O ${this.type} ${this.name} atacou usando ${this.arm}.`)
    }
}

let createHero = new hero(
    prompt("Olá herói! Insira o seu nome: "),
    prompt("Agora insria a idade do seu herói: "),
    prompt("Informe o tipo do seu herói: ")
)

createHero.attack()