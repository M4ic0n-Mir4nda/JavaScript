function getDiaAtual() {
    const textoDiaSemana = document.querySelector('.data')
    const textoHoraAtual = document.querySelector('.hora');

    const data = new Date();
    const diaTexto = getDia();
    const dia = formatNum(data.getDate());
    const mesTexto = getMes();
    const ano = data.getFullYear();
    const hora = formatNum(data.getHours());
    const min = formatNum(data.getMinutes());

    textoDiaSemana.innerHTML = `${diaTexto}, ${dia} de ${mesTexto} de ${ano}` + 
                                `<br> ${hora}:${min}`;
}

function getDia() {
    const data = new Date();
    const diaAtual = data.getDay();

    let diaAtualText;
    
    switch (diaAtual) {
        case 0:
            diaAtualText = 'domingo';
            return diaAtualText;
        case 1:
            diaAtualText = 'segunda-feira';
            return diaAtualText;
        case 2:
            diaAtualText = 'terca-feira';
            return diaAtualText;
        case 3:
            diaAtualText = 'quarta-feira';
            return diaAtualText;
        case 4:
            diaAtualText = 'quinta-feira';
            return diaAtualText;
        case 5:
            diaAtualText = 'sexta-feira';
            return diaAtualText;
        case 6:
            diaAtualText = 'sábado';
            return diaAtualText;
    }
}

function getMes() {
    const data = new Date();
    const mesAtual = data.getMonth() + 1;
    
    let mesAnoText;

    switch (mesAtual) {
        case 1:
            mesAnoText = 'janeiro'
            return mesAnoText
        case 2:
            mesAnoText = 'fevereiro'
            return mesAnoText
        case 3:
            mesAnoText = 'março'
            return mesAnoText
        case 4:
            mesAnoText = 'abril'
            return mesAnoText
        case 5:
            mesAnoText = 'maio'
            return mesAnoText
        case 6:
            mesAnoText = 'junho'
            return mesAnoText 
        case 7:
            mesAnoText = 'julho'
            return mesAnoText
        case 8:
            mesAnoText = 'agosto'
            return mesAnoText
        case 9:
            mesAnoText = 'setembro'
            return mesAnoText
        case 10:
            mesAnoText = 'outubro'
            return mesAnoText
        case 11:
            mesAnoText = 'novembro'
            return mesAnoText
        case 12:
            mesAnoText = 'dezembro'
            return mesAnoText
    }
}

function formatNum(num) {
    return num > 10 ? num : `0${num}`;
}

getDiaAtual();


// const h1 = document.querySelector('.data');
// const data = new Date();
// const opcoes = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   };

// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
