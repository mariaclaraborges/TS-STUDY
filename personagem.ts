import prompt from "prompt-sync";

class Personagem{ //Aqui, eu declaro a classe Personagem, que é um molde para os objetos que eu quero criar. Ela é um tipo de dado, como number, string, boolean, etc.
    constructor(
        //Dessa forma, continuam sendo atributos da classe. Mas, ao invés de declarar os atributos, eu declaro o construtor e, dentro dele, declaro os atributos.
        public nome: string, 
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ){}
}

let sansa: Personagem = new Personagem("Sansa Stark", 100, 20, 35, 15.5); //Aqui, eu crio um objeto do tipo Personagem, que é uma instância da classe Personagem. O objeto é uma cópia da classe, com os atributos preenchidos.

let teclado = prompt();
let option: number = 0;

while(option != 9){
    console.log("==========Personagem==========");
    console.log("1 - Treinar ataque");
    console.log("2 - Treinar defesa");
    console.log("3 - Imprimir atributos");
    console.log("9 - Sair");
    console.log("==============================");

    option = +teclado("Digite a opção desejada: "); //+ converte para number

    switch(option){
        case 1:
            sansa.ataque += 5;
            console.log("Ataque treinado com sucesso!");
            break;
        case 3:
            console.log("Sansa:>> ", sansa);
            break;
        default:
            break;
    }
}


//npm i prompt-sync: leitura de dados do terminal e escrita de dados no terminal