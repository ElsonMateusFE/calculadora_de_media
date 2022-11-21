const form = document.getElementById('form-atividade')
const emojiAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">'
const emojiReprovado = '<img src="./images/reprovado.png" alt="Emoji decepção">'
const alertProvado = '<span class="resultado aprovado">Aprovado</span>'
const alertReprovado = '<span class="resultado reprovado">Reprovado</span>'
//const escolhaMedia = parseFloat(prompt('Escolha uma média:'))
const atividades = []
const notas = []
let linhas = ''

form.addEventListener('submit', function(evento){
    evento.preventDefault()

    inputAtividadesNotas()
    addNovaAtividadesNotas()
    atualizaMedia()

})

function inputAtividadesNotas(){
    const nomeAtivdiade = document.getElementById('nome-atividade')
    const notaAtivdiade = document.getElementById('nota-atividade')

    if(atividades.includes(nomeAtivdiade.value)){
        alert(`${nomeAtivdiade.value}`)
    }else{
        atividades.push(nomeAtivdiade.value)
        notas.push(parseFloat(notaAtivdiade.value))
    
        let linha = '<tr>'
        linha += `<td>${nomeAtivdiade.value}</td>`
        linha += `<td>${notaAtivdiade.value}</td>`
        linha += `<td>${notaAtivdiade.value >= 7 ? emojiAprovado : emojiReprovado}</td>`
        linha += '</tr>'
    
        linhas += linha
    
        nomeAtivdiade.value = ''
        notaAtivdiade.value = ''
    }
}

function addNovaAtividadesNotas(){
    tBody = document.querySelector('tbody')
    tBody.innerHTML = linhas
}

function somarEMedia(){
    let refNotas = 0

    for(let i = 0; i < notas.length; i++){
        refNotas += notas[i]
    }

    return refNotas / notas.length
}

function atualizaMedia(){
    const mediaFinal = somarEMedia()

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? alertProvado : alertReprovado
}