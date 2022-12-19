function dorme(milissegundos){
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}


/*

Dessa forma a função iria ocorrer infinitamente por não ter uma condição de saida

async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
    return incrementaNumero(numero + 1)
  }
  
  incrementaNumero(1)

*/

async function incrementaNumero(numero){
    console.log(numero)
    await dorme(1000)
  
    if (numero === 10) {
            return 'finalizou'
    }
    // O return da função chama ela mesmo assim se tornando numa função recursiva
    return incrementaNumero(numero + 1)
  }
  
incrementaNumero(1)