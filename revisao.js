const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepçção">'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const atividades = []
const notas = []
const novaMedia = Number(prompt('Escolha uma média'))
let linhas = ''

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    inputNovasNotas()
    addNovaNotas()
    mediaFinal()
})

function addNovaNotas(){
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = linhas
}

function inputNovasNotas(){
    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(nomeAtividade.value)){
        alert(`${nomeAtividade.value} já está em uso`)
    }else{
        atividades.push(nomeAtividade.value)
        notas.push(Number(notaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${nomeAtividade.value}</td>`
        linha += `<td>${notaAtividade.value}</td>`
        linha += `<td>${notaAtividade.value >= novaMedia ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
    
        linhas += linha
    }
}

function somarNotas(){
    let ref = 0;

    for(let i = 0; i < notas.length; i++){
        ref += notas[i]
    }

    return ref / notas.length 
}

function mediaFinal(){
    const media = somarNotas()

    document.getElementById('media-final-valor').innerHTML = media.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = media >= novaMedia ? spanAprovado : spanReprovado
}