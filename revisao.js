const form = document.querySelector('#form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepção">'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const atividades = []
const notas = []
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    recebendoDados()
    calculandoMedia()
    mediaFinal()
})

function recebendoDados(){
    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(nomeAtividade.value)){
        alert(`A atividade ${nomeAtividade.value} já está em uso`)
    }else{
        atividades.push(nomeAtividade.value)
        notas.push(Number(notaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${nomeAtividade.value}</td>`
        linha += `<td>${notaAtividade.value}</td>`
        linha += `<td>${notaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
    
        linhas += linha
    
        document.querySelector('tbody').innerHTML = linhas
    }
}

function calculandoMedia(){
    let soma = 0

    for(let i = 0; i < notas.length; i++){
        soma += notas[i]
    }

    return soma / notas.length
}

function mediaFinal(){
    const media = calculandoMedia()

    document.getElementById('media-final-valor').innerHTML = media.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = media >= 7 ? spanAprovado : spanReprovado
}