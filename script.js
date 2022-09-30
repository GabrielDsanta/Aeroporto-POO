
let choice = true
let Clientes = []
let Voos = []
let Pacotes = []
let Passagens = []


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
        return this.#Nome
    }

    ExibirCPFCliente(){
        return this.#CPF
    }

    ExibirDataCliente(){
        return this.#DataNascimento
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
        return this.#ValorTotal = valorTotal
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
        return this.#Empresa
    }

    ExibirNumero(){
        return this.#Numero
    }

    ExibirDataVoo(){
        return this.#DataVoo
    }

    ExibirHorario(){
        return this.#Horario
    }

    ExibirLocalPartida(){
        return this.#LocalPartida
    }

    ExibirLocalDestino(){
        return this.#LocalDestino
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
        if(primeiraClasse == true){
            return this.#PrimeiraClasse = true
        }

        else{
            return this.#PrimeiraClasse = false
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
        return this.#Assento
    }

    ExibirPrimeiraClasse(){
        return this.#PrimeiraClasse
    }

    ExibirValor(){
        return this.#Valor
    }

    ExibirPassageiro(){
        return this.#Passageiro
    }

    ExibirVoo(){
        return this.#Voo
    }

    CalcularValor(){
        if(this.#PrimeiraClasse == true){
            let ValorTotal = Number(this.#Valor * 1.5)
            return ValorTotal
        }
    }

    ExibirResumo(destino){
        return alert(`Passageiro: ${this.#Passageiro.ExibirNomeCliente()} No Assento: ${this.#Assento} do Voo: ${this.#Voo.ExibirNumero()} Com Destino para: ${destino} !`)
    }
}


while(choice){
    choice = prompt("1 Cadastrar Cliente /// 2 Cadastrar Voo /// 3 Comprar Passagem /// 4 Pacote De Viagem /// 5 Encerrar")
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
        CreatePacoteViagem()
        break;

        case "5":
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
    let ExibirErro = 0
    if(Voos.length == 0 || Clientes.length == 0){
        return alert("Nenhum Voo ou Cliente Cadastrado")
    }

    let assento = Number(prompt("Qual o número do Assento ?"))

    Passagens.forEach(VerificateAssento)

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

    if(ExibirErro == 0){
        return alert("Nome Inválido")
    }

    function VerificateName(item, index){
        if(item.ExibirNomeCliente() == passageiro){
            ExibirErro++
            passageiro = Clientes[index]
            voo = prompt("Qual o número do Voo ?")

            Voos.forEach(VerificateVoo)
        }

    }

    function VerificateVoo(item, index){
        if(item.ExibirNumero() == voo){
            voo = Voos[index]
            let Origem = item.ExibirLocalPartida()
            let Destino = item.ExibirLocalDestino()

            let NewPassagemArea = new PassagemArea(assento, primeiraClasse, valor, passageiro, voo)
    
            Passagens.push(NewPassagemArea)

            alert(NewPassagemArea.CalcularValor())
            NewPassagemArea.ExibirResumo(Destino)
        }
        else{
            index++
        }

        

    }

    function VerificateAssento(item){
        if(item.ExibirAssento() == assento){
            alert("Este assento já foi escolhido")
            CreatePassagemArea()
        }
    }
}

function CreatePacoteViagem(){
    let TodasPassagens = []
    let PassagensDisponiveis = []
    let MensagemErro = 0

    if(Voos.length == 0 || Clientes.length == 0){
        return alert("Nenhum Voo ou Cliente Cadastrado")
    }

    let titular = prompt("Qual o Titular do Pacote ?")
    Clientes.forEach(VerificateNamePassageiro)
    if(MensagemErro == 0){
        return alert("Titular inválido")
    }
    
    Voos.forEach(AddPassagens)

    let passagemIda = prompt(`Voos: {${TodasPassagens}} Escolha a passagem de Ida `)

    Voos.forEach(FindPassagensVolta)

    let passagemVolta = prompt(`Voos: {${PassagensDisponiveis}} Escolha a passagem de Volta`)

    Voos.forEach(VerificatePassagemVolta)

    let valorTotal = Passagens[0].CalcularValor()

    alert(Passagens[0].CalcularValor())

    let NewPacote = new PacoteViagem(titular, passagemIda, passagemVolta, valorTotal)

    Pacotes.push(NewPacote)

    function FindPassagensVolta(item, index){
        if(item.ExibirNumero() == passagemIda){
            passagemIda = Voos[index]
            let ValorParametro = item.ExibirLocalDestino()

            Voos.forEach(Finder)

            function Finder(valor){
                if(valor.ExibirLocalPartida() == ValorParametro){
                    PassagensDisponiveis.push(valor.ExibirNumero())
                }
            }

        }
    }
    
    function AddPassagens(item){
        TodasPassagens.push(item.ExibirNumero())
    }

    function VerificateNamePassageiro(item, index){
        if(item.ExibirNomeCliente() == titular){
            MensagemErro++
            return titular = Clientes[index]
        }
    }

    function VerificatePassagemVolta(item, index){
        if(item.ExibirNumero() == passagemVolta){
            return passagemVolta = Voos[index]
        }
    }
}

