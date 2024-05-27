const form = document.getElementById('form');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji"/>'
const atividades = [];
const notas = [];
const aprovado = '<span class="aprovado">Aprovado</span>';
const reprovado = '<span class="reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
    atualizaMedia();
    calcularMedia();
})

function adicionarLinha() {
    const inputNome = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    if (atividades.includes(inputNome.value)) {
        alert(`A atividade: ${inputNome.value} já foi inserida!`)
    } else {
        atividades.push(inputNome.value);
        notas.push(parseFloat(inputNota.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`
    
        linhas += linha;
    
        inputNome.value = '';
        inputNota.value = ''; 
    }

}

function atualizarTabela() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calcularMedia();

    document.getElementById('mediaFinal').innerHTML = mediaFinal;
    document.getElementById('resultado').innerHTML = mediaFinal >= notaMinima ? aprovado : reprovado;
}

function calcularMedia() {
    let somaNotas = 0;

    for(let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];

        return somaNotas / notas.length;
    }
}