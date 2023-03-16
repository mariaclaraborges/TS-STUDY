
//CLASSE

//Toda que for identificado como algo que seja responsabilidade da CLASSE

export default class Personagem { //exportar o personagem para utilizá-lo em outros lugares
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {}

    //trabalhando com métodos sem retorno e sem parâmetros
    
    status(): void { //void: método que não tem retorno. não recebe nada, não retorna nada
        console.log("Guerreiro: ");
        console.log("Nome: ", this.nome);
        console.log("Energia: ", this.energia.toFixed(1));
        console.log("Ataque: ", this.ataque.toFixed(1));
        console.log("Defesa: ", this.defesa.toFixed(1));
    }

    treinarAtaque(): void{
        this.ataque += Math.random()*7;
        this.energia -= Math.random()*10;
        this.isDead();
        
        if(this.defesa > 100){
            this.defesa = 0;
        }
    }

    treinarDefesa(): void{
        this.defesa += Math.random()*5;
        this.energia -= Math.random()*10;
        this.isDead();
        
        if(this.defesa > 100){
            this.defesa = 0;
        }
        
    }

    descansar(): void{
        this.energia += Math.random()*10;
        if(this.energia>100){
            this.energia = 100;
        }
    }

    batalhar(): void {
        this.energia -= Math.random() * 100;
        this.isDead();
    }

    isDead(): void{
        if(this.energia < 0){
            console.log("Ops! Você morreu.")
        }
    }
}