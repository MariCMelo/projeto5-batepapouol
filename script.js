const usuario = { name: "teste" };


let mensagem = [];
const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', usuario);

promessa.then(sucessoLogin);
promessa.catch(erroLogin);

function sucessoLogin() {
    console.log('Usuário entrou')
}

function erroLogin() {
    console.log('Usuário já logado')
}

function enviarStatus() {
    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', usuario);

}

setInterval(enviarStatus, 5000);

function pegarMensagem() {
    promessa2 = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages')
    promessa2.then(mensagemChegou);
    promessa2.catch(ocorreuErro);
}
pegarMensagem()

function mensagemChegou(resposta) {
    console.log('Mensagem recebida')
    console.log(resposta.data);
    mensagem = resposta.data;

    exibeMensagens();
}

function ocorreuErro(erro) {
    console.log('mensagem não foi recuperada');
    console.log(erro)
}

function exibeMensagens() {

    const lista = document.querySelector('.mensagensEnviadas');

    lista.innerHTML = '';

    for (let index = 0; index < mensagem.length; index++) {

        let template = `
        <li class = "conversa-enviada">
       <span class = "hora"> (${mensagem[index].time}) </span>
       <span class = "de">${mensagem[index].from} </span>
       <span class = "mensagem-escrita">${mensagem[index].text}</span>
       <span class = "para">  ${mensagem[index].to} </span>
       <span class = "tipo">${mensagem[index].type}</tipo>
            </li>
            `
        lista.innerHTML = lista.innerHTML + template;
    }

}

function enviarMensagem() {
    const textoMensagem = document.querySelector('.mensagem').value
    const novaMensagem = {
        from: 'teste',
        text: textoMensagem,
        to: 'Todos',
        type: "message"
    }
    const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', novaMensagem);
    console.log("deu certo vou chorar")

    const lista = document.querySelector('.mensagensEnviadas');
    lista.innerHTML = '';

    const mensagemEnviada = document.querySelector('.mensagem');
    mensagemEnviada.value = '';

    pegarMensagem()
    exibeMensagens();
}

setInterval(pegarMensagem, 500);
setInterval(exibeMensagens, 500);






// // pegarMensagensNoServidor();


// // function pegarReceitasNoServidor() {

// //     const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants')
// //     promise.then(mensagemChegou);
// //     promise.catch(deuErroPegarMensagem);

// // }

// // function mensagemChegou(resposta) {
// //     console.log('Mensagem Chegou!');
// //     console.log(resposta.data);

// //     mensagem = resposta.data;

// //     exibeMensagens();
// // }

// // function deuErroPegarMensagem(erro) {
// //     console.log('Deu erro ao pegar mensagens no Servidor');
// //     console.log(erro);
// // }

// // function adicionarMensagem() {
// //     // pegar os dados digitados nos inputs
// //     const mensagemChat = document.querySelector('.mensagem').ariaValueMax;
// // }



// // promessa.then(respostaChegou);
// // promessa.catch(erroNoEnvio);
// // console.log('esperando o retorno');

// // exibeMensagens();

// // function respostaChegou(resposta) {
// //     console.log('resposta do servidor chagou');
// //     console.log(resposta);

// //     pegarMensagensNoServidor();
// // }

// // function erroNoEnvio(erro) {
// //     console.log('mensagem não foi salva');
// //     console.log(erro);

// // }

// // function test() {
// //     console.log('oi!')
// // }


