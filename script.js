function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    

    if (Number(fano.value) < 1900 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados novamente!')
    }else{
    var fsex = document.getElementsByName('radsexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Masculino'
            if(idade <= 12){
                // CRIANÇA
                img.setAttribute('src', 'imagens/menino.png')
            }else if(idade < 21){
                // JOVEM
                img.setAttribute('src', 'imagens/jovemH.png')
            }else if(idade < 50){
                // ADULTO
                img.setAttribute('src', 'imagens/adulto.png')
            }else {
                // IDOSO
                img.setAttribute('src', 'imagens/idoso.png')
            }

        } else if(fsex[1].checked) {
            genero = 'Femenino'
            if(idade <= 12){
                // CRIANÇA
                img.setAttribute('src', 'imagens/menina.png')
            }else if(idade < 21){
                // JOVEM
                img.setAttribute('src', 'imagens/jovemM.png')
            }else if(idade < 50){
                // ADULTO
                img.setAttribute('src', 'imagens/adulta.png')
            }else{
                // IDOSO
                img.setAttribute('src', 'imagens/idosa.png')
            }

        }
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
