
export default class Personagem { //exportar o personagem para utilizá-lo em outros lugares
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) { }
    //Toda vez que pensar em ler dados na classe - use parâmetros 
    //Toda vez que pensar em imprimir na classe, use retorno

    status(): string { //void: método que não tem retorno. não recebe nada, não retorna nada
        //o main irá definir como o status será impresso
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this.nome +
            "\nEnergia: ", this.energia.toFixed(1) +
            "\nAtaque: ", this.ataque.toFixed(1) +
            "\nDefesa: ", this.defesa.toFixed(1));
    }

    treinarAtaque(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;

        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }

    treinarDefesa(): void {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;

        if (this.defesa > 100) {
            this.defesa = 0;
        }

    }

    descansar(tempo: number): void {
        this.energia += Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        }
    }

    batalhar(): number {
        let desgaste: number = Math.random() * 100;
        this.energia -= desgaste;
        return desgaste;
    }

    isDead(): boolean {
        if (this.energia < 0) {
            return true;
        }
        else {
            return false;
        }
    }
}