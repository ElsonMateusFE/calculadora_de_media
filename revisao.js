const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepção">'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const atividades = []
const notas = []
const escolherMedia = parseFloat(prompt('Escolha uma média (0 - 10)'))
let linhas = ''

form.addEventListener('submit', function(evento){
    evento.preventDefault()

    inputNota()
    addNota()
    addMedia()
})

function inputNota(){
    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')
    
    if(atividades.includes(nomeAtividade.value)){
        alert(`Atividade ${nomeAtividade.value} já foi ultilizada`)
    }else{
        atividades.push(nomeAtividade.value)
        notas.push(parseFloat(notaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${nomeAtividade.value}</td>`
        linha += `<td>${notaAtividade.value}</td>`
        linha += `<td>${notaAtividade.value >= escolherMedia ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
        
        linhas += linha
        
        nomeAtividade.value = ''
        notaAtividade.value = ''
    }
}

function addNota(){
    const tBody = document.querySelector('tbody')
    tBody.innerHTML = linhas
}

function somaMedia(){
    let valorRef = 0
    for(let i = 0; i < notas.length; i++){
        valorRef += notas[i]
    }
    return valorRef / notas.length
}

function addMedia(){
    const mediaFinal = somaMedia()

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= escolherMedia ? spanAprovado : spanReprovado
}