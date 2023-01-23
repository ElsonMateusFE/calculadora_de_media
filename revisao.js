const form = document.querySelector('#form-atividade')
const nomeAtividade = document.querySelector('#nome-atividade')
const notaAtividade = document.querySelector('#nota-atividade')
const imgProvado = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepção>'
const spanArovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const atividades = []
const notas = []
const escolheMedia = Number(prompt('Escolha uma média:'))
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    addAtividadeNotas()
    inputAtividadeNotas()
    mediaFinal()
})

function addAtividadeNotas(){

    if(atividades.includes(nomeAtividade.value)){
        alert(`${nomeAtividade.value} está em uso`)
    }else{
        atividades.push(nomeAtividade.value)
        notas.push(Number(notaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${nomeAtividade.value}</td>`
        linha += `<td>${notaAtividade.value}`
        linha += `<td>${notaAtividade.value >= escolheMedia ? imgProvado : imgReprovado}</td>`
        linha += '</tr>'
        
        linhas += linha
    } 
}

function inputAtividadeNotas(){
    const tBody = document.querySelector('tbody')
    tBody.innerHTML = linhas
}

function somaDasNotasEMedias(){
    let soma = 0

    for(let i = 0; i < notas.length; i++){
        soma += notas[i]
    }

    return soma / notas.length
}

function mediaFinal(){
    const mediaDoAluno = somaDasNotasEMedias()

    document.querySelector('#media-final-valor').innerHTML = mediaDoAluno.toFixed(2)
    document.querySelector('#media-final-resultado').innerHTML = mediaDoAluno >= escolheMedia ? spanArovado : spanReprovado
}