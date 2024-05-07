function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipo = document.getElementById('tipo-ingresso').value;
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if(tipo == 'pista') {
            comprarPista(quantidade);
    } else if(tipo == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }

}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(quantidade > qtdPista) {
        alert('A quantidade de ingressos inserido, não está disponivel neste setor');

    } else {
        qtdPista -= quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade > qtdSuperior) {
        alert('A quantidade de ingressos inserido, não está disponivel neste setor');

    } else {
        qtdSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantidade > qtdInferior) {
        alert('A quantidade de ingressos inserido, não está disponivel neste setor');

    } else {
        qtdInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}