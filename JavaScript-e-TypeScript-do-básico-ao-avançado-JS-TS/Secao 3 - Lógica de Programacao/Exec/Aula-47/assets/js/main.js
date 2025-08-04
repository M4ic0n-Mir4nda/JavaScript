const btnIniciar = document.querySelector('.btn-iniciar');
const btnPausar = document.querySelector('.btn-pausar');
const btnZerar = document.querySelector('.btn-zerar');
const relogio = document.querySelector('.relogio');
let timer;
let [seg, min, hora] = [0, 0, 0]

function iniciarCronometro() {
    relogio.style.color = 'black';
    timer = setInterval(() => {
            if (seg < 60) seg++;
            if (seg == 60) {
                seg = 0;
                min++;
            } 
            if (min == 60) {
                min = 0;
                hora++;
            }
            relogio.innerHTML = `${formatarNumero(hora)}:${formatarNumero(min)}:${formatarNumero(seg)}`;
        }, 1000)
}

function pausarCronometro() {
    relogio.style.color = 'red';
    setTimeout(() => {
        clearInterval(timer);
    }, 1)
}

function zerarCronometro() {
    setTimeout(() => {
        clearInterval(timer);
        [seg, min, hora] = [0, 0, 0]
        relogio.innerHTML = `${formatarNumero(hora)}:${formatarNumero(min)}:${formatarNumero(seg)}`;
    }, 1)
}

function formatarNumero(num) {
    return num >= 10 ? num : `0${num}`;
}

btnIniciar.addEventListener('click', () => iniciarCronometro());
btnPausar.addEventListener('click', () => pausarCronometro());
btnZerar.addEventListener('click', () => zerarCronometro());