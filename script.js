
let choice = true
let Clientes = []
let Voos = []
let Passagens = []
let Pacotes = []

class Cliente {
    #Nome
    #CPF
    #DataNascimento

    constructor(nome, cpf, dataNascimento){
        this.DefinirNome(nome)
        this.DefinirCPF(cpf)
        this.DefinirDataNascimento(dataNascimento)
    }

    DefinirNome(nome){
        if(nome.length > 50){
            return alert("Cadastre um nome com menos de 50 caracteres")
        }

        else{
            return this.#Nome = nome
        }
    }

    DefinirCPF(cpf){
        if(cpf.length > 11){
            return alert("CPF inválido")
        }

        else{
            return this.#CPF = cpf
        }
    }

    DefinirDataNascimento(dataNascimento){
        return this.#DataNascimento = dataNascimento
    }

    ExibirNomeCliente(){
        return alert(`${this.#Nome}`)
    }

    ExibirCPFCliente(){
        return alert(`${this.#CPF}`)
    }

    ExibirDataCliente(){
        return alert(`${this.#DataNascimento}`)
    }

    ExibirDadosCliente(){
        return alert(`Nome: ${this.#Nome} CPF: ${this.#CPF} Data De Nascimento: ${this.#DataNascimento}`)
    }




}

class PacoteViagem{
    #Titular
    #DataIda
    #DataVolta
    #ValorTotal

    constructor(titular, dataIda, dataVolta, valorTotal){
        this.DefinirTitular(titular)
        this.DefinirDataIda(dataIda)
        this.DefinirDataVolta(dataVolta)
        this.DefinirValorTotal(valorTotal)
    }

    DefinirTitular(titular){
        return this.#Titular = titular
    }

    DefinirDataIda(dataIda){
        return this.#DataIda = dataIda
    }

    DefinirDataVolta(dataVolta){
        return this.#DataVolta = dataVolta
    }

    DefinirValorTotal(valorTotal){
        return this.#ValorTotalr = valorTotal
    }

    ExibirTitular(){
        return this.#Titular
    }

    ExibirDataIda(){
        return this.#DataIda
    }

    ExibirDataVolta(){
        return this.#DataVolta
    }

    ExibirValorTotal(){
        return this.#ValorTotal
    }

}

class Voo{
    #Empresa
    #Numero
    #DataVoo
    #Horario
    #LocalPartida
    #LocalDestino

    constructor(empresa, numero, dataVoo, horario, localPartida, localDestino){
        this.DefinirEmpresa(empresa)
        this.DefinirNumero(numero)
        this.DefinirDataVoo(dataVoo)
        this.DefinirHorario(horario)
        this.DefinirLocalPartida(localPartida)
        this.DefinirLocalDestino(localDestino)
    }

    DefinirEmpresa(empresa){
        return this.#Empresa = empresa
    }

    DefinirNumero(numero){
        return this.#Numero = numero
    }

    DefinirDataVoo(dataVoo){
        return this.#DataVoo = dataVoo
    }

    DefinirHorario(horario){
        return this.#Horario = horario
    }

    DefinirLocalPartida(localPartida){
        return this.#LocalPartida = localPartida
    }

    DefinirLocalDestino(localDestino){
        return this.#LocalDestino = localDestino
    }

    ExibirEmpresa(){
        return alert(`${this.#Empresa}`)
    }

    ExibirNumero(){
        return alert(`${this.#Numero}`)
    }

    ExibirDataVoo(){
        return alert(`${this.#DataVoo}`)
    }

    ExibirHorario(){
        return alert(`${this.#Horario}`)
    }

    ExibirLocalPartida(){
        return alert(`${this.#LocalPartida}`)
    }

    ExibirLocalDestino(){
        return alert(`${this.#LocalDestino}`)
    }
}

class PassagemArea{
    #Assento
    #PrimeiraClasse
    #Valor
    #Passageiro
    #Voo

    constructor(assento, primeiraClasse, valor, passageiro, voo){
        this.DefinirAssento(assento)
        this.DefinirPrimeiraClasse(primeiraClasse)
        this.DefinirValor(valor)
        this.DefinirPassageiro(passageiro)
        this.DefinirVoo(voo)
    }

    DefinirAssento(assento){
        return this.#Assento = assento
    }

    DefinirPrimeiraClasse(primeiraClasse){
        if(typeof primeiraClasse == Boolean){
            return this.#PrimeiraClasse = primeiraClasse
        }

        else{
            return
        }
    }

    DefinirValor(valor){
        if(valor > 0){
            return this.#Valor = valor
        }
        else{
            return 
        }
    }

    DefinirPassageiro(passageiro){
        return this.#Passageiro = passageiro
    }

    DefinirVoo(voo){
        return this.#Voo = voo
    }

    ExibirAssento(){
        return alert(`${this.#Assento}`)
    }

    ExibirPrimeiraClasse(){
        return alert(`${this.#PrimeiraClasse}`)
    }

    ExibirValor(){
        return alert(`${this.#Valor}`)
    }

    ExibirPassageiro(){
        return alert(`${this.#Passageiro}`)
    }

    ExibirVoo(){
        return alert(`${this.#Voo}`)
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

