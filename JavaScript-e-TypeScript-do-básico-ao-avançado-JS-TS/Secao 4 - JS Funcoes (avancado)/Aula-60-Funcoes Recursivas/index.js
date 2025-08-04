function somaAteDez(cont) {
    if (cont >= 10) {
        return;
    }
    console.log(cont);
    cont += 1;
    somaAteDez(cont);
}

somaAteDez(0);