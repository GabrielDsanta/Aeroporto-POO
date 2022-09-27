
let choice = true
let Clientes = []
let Voos = []
let Passagens = []
let Pacotes = []

class Cliente {
    Nome
    CPF
    DataNascimento

    constructor(nome, cpf, dataNascimento){
        this.Nome = nome
        this.CPF = cpf
        this.DataNascimento = dataNascimento
    }
}

class PacoteViagem{
    Titular
    DataIda
    DataVolta
    ValorTotal

    constructor(titular, dataIda, dataVolta, valorTotal){
        this.Titular = titular
        this.dataIda = dataIda
        this.dataVolta = dataVolta
        this.valorTotal = valorTotal
    }
}

class Voo{
    Empresa
    Numero
    DataVoo
    Horario
    LocalPartida
    LocalDestino

    constructor(empresa, numero, dataVoo, horario, localPartida, localDestino){
        this.Empresa = empresa
        this.Numero = numero
        this.DataVoo = dataVoo
        this.Horario = horario
        this.LocalPartida = localPartida
        this.LocalDestino = localDestino
    }
}

class PassagemArea{
    Assento
    PrimeiraClasse
    Valor
    Passageiro
    Voo

    constructor(assento, primeiraClasse, valor, passageiro, voo){
        this.Assento = assento
        this.PrimeiraClasse = primeiraClasse
        this.Valor = valor
        this.Passageiro = passageiro
        this.Voo = voo
    }

    CalcularValor(){
        if(this.PrimeiraClasse == true){
            this.Valor = this.Valor * 1.50
            return alert(`Valor Total: ${this.Valor}`)
        }
    }

    ExibirResumo(destino){
        return alert(`Passageiro: ${this.Passageiro} No Assento: ${this.Assento} do Voo: ${this.Voo} Com Destino para: ${destino} !`)
    }
}


while(choice){
    choice = prompt("1 Cadastrar Cliente /// 2 Cadastrar Voo /// 3 Comprar Passagem /// 4 Encerrar")
    switch(choice){
        case "1":
        CreateClient()
        break;

        case "2":
        CreateVoo()
        break;

        case "3":
        CreatePassagemArea()
        break;

        case "4":
        choice = false
        break;

        default:
        alert("Opção inválida")
        break;
    }
}

function CreateClient(){
    let nome = prompt("Qual o nome do Cliente ?")
    let cpf = prompt("Qual o CPF do Cliente ?")
    let dataNascimento = prompt("Qual a Data de Nascimento do Cliente ?")

    if(cpf.length < 11 || cpf == "" || nome == "" || dataNascimento == ""){
        return alert("Valores inválidos")
    }

    let NewCliente = new Cliente(nome, cpf, dataNascimento)

    Clientes.push(NewCliente)
}

function CreateVoo(){
    let empresa = prompt("Qual a Empresa do Voo ?")
    let numero = prompt("Qual o Número do Voo ?")
    let data = prompt("Qual a Data do Voo ?")
    let horario = Number(prompt("Qual o Horário do Voo ?"))
    let localPartida = prompt("Qual o Local De Partida do Voo ?")
    let localDestino = prompt("Qual o Destino do Voo ?")

    if(localDestino == "" || empresa == "" || horario == "" || numero == "" || localPartida == "" || data == ""){
        return alert("Valores inválidos")
    }

    let NewVoo = new Voo(empresa, numero, data, horario, localPartida, localDestino)

    Voos.push(NewVoo)
}

function CreatePassagemArea(){
    if(Voos.length == 0 || Clientes.length == 0){
        return alert("Nenhum Voo ou Cliente Cadastrado")
    }

    let assento = Number(prompt("Qual o número do Assento ?"))
    let primeiraClasse = prompt("Primeira Classe ?")

    if(primeiraClasse == "Sim"){
        primeiraClasse = true
    }
    else{
        primeiraClasse = false
    }

    let valor = parseFloat(prompt("Qual o Valor da Passagem ?"))
    let passageiro = prompt("Qual o nome do Passageiro ?")
    let voo

    Clientes.forEach(VerificateName)

    function VerificateName(item){
        if(item.Nome != passageiro){
            return alert("Nome inválido")
        }

        voo = prompt("Qual o número do Voo ?")

        Voos.forEach(VerificateVoo)
    }

    function VerificateVoo(item){
        if(item.Numero != voo){
            return alert("Número de Voo inválido")
        }

        let Origem = item.LocalPartida
        let Destino = item.LocalDestino

        let NewPassagemArea = new PassagemArea(assento, primeiraClasse, valor, passageiro, voo)
        let NewPacote = new PacoteViagem(passageiro, Origem, Destino, valor)
    
        Pacotes.push(NewPacote)
        Passagens.push(NewPassagemArea)

        NewPassagemArea.CalcularValor()
        NewPassagemArea.ExibirResumo(Destino)
    }
}

