
var valores = [8, 1, 7, 4, 2, 9]
valores.sort()
valores.indexOf(7)
/*
for (var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

