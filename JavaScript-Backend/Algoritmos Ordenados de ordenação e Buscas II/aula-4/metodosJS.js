/*
No dia a dia do trabalho, é muito comum usarmos métodos nativos - ou seja, aqueles que já são próprios da linguagem e só precisam ser “chamados” como funções - para que nosso código fique mais legível ou então para simplificar o trabalho. Exemplos bem comuns são os métodos sort() e find(), respectivamente usados para ordenação e busca.

O método sort() molda elementos de um array em strings e os ordena em ordem crescente. Vamos ver um exemplo?

let numeros = [1, 2, 3, 101, 20, 3, 30, 31, 40];
numeros.sort();
console.log(numeros);

// Saída
// [1, 101, 2, 20, 3, 3, 30, 31, 40]COPIAR CÓDIGO
Observe que a saída mostra a classificação dos números um pouco diferente do esperado. Isso ocorre pois o método trata os elementos do array como strings e os coloca em ordem sequencial de acordo com sua posição na tabela ASCII, onde 20 vem antes de 3.

Para que o sort() funcione de acordo com o esperado, precisamos passar os parâmetros de comparação de forma explícita:

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
// Saída 
//[1, 2, 3, 4, 5]COPIAR CÓDIGO
Você pode conferir com detalhes o uso do sort() em JavaScript na documentação do MDN.

Indo além do uso do método no dia a dia, já imaginou como esses métodos funcionam “por baixo dos panos”? Não é somente uma palavra para complementar seu código, pois assim como criamos funções, os métodos nativos da linguagem também possuem lógica e algoritmos por trás. Vamos conhecer um pouco mais?

No JavaScript, a forma como o método é implementado depende do motor que faz a interpretação. A partir de cada versão aprovada do JavaScript pelo ECMA, as empresas ou fundações responsáveis pelos navegadores/interpretadores (chamadas de vendors no jargão da área) decidem e fazem a implementação das funcionalidades.

No caso do motor V8, utilizado pelo Chrome/NodeJS, o sort() tem em sua implementação os algoritmos quick sort - ordenação rápida e insertion sort - ordenação por inserção, e funcionam da seguinte maneira:

 function QuickSort(a, from, to) {
    var third_index = 0;
    while (true) {
      // Insertion sort is faster for short arrays.
      if (to - from <= 10) {
        InsertionSort(a, from, to);
        return;
      }COPIAR CÓDIGO
Por outro lado, no motor SpiderMonkey, utilizado pelo Firefox, o algoritmo utilizado por trás do método sort() é o merge sort, implementado abaixo em C++:

JSBool
js::array_sort(JSContext *cx, uintN argc, Value *vp)
{
    jsuint len, newlen, i, undefs;
    size_t elemsize;
    JSString *str;

    Value *argv = JS_ARGV(cx, vp);
    Value fval;
    if (argc > 0 && !argv[0].isUndefined()) {
        if (argv[0].isPrimitive()) {
            JS_ReportErrorNumber(cx, js_GetErrorMessage, NULL, JSMSG_BAD_SORT_ARG);
            return false;
        }
        fval = argv[0];     /* non-default compare function 
    } else {
        fval.setNull();
    }

    JSObject *obj = ToObject(cx, &vp[1]);
    if (!obj)
        return false;
+
−    if (!js_GetLengthProperty(cx, obj, &len))
        return false;
    if (len == 0) {
        vp->setObject(*obj);
        return true;
    }

    /*
     * We need a temporary array of 2 * len Value to hold the array elements
     * and the scratch space for merge sort. Check that its size does not
     * overflow size_t, which would allow for indexing beyond the end of the
     * malloc'd vector.
     * 
#if JS_BITS_PER_WORD == 32
    if (size_t(len) > size_t(-1) / (2 * sizeof(Value))) {
        js_ReportAllocationOverflow(cx);
        return false;
    }COPIAR CÓDIGO
Esse conhecimento é importante para escolhermos os métodos nativos que aplicamos em nosso código e também para entendermos certos comportamentos dos programas e aplicações ao serem interpretados pelos motores.

Você pode conferir aqui o código-fonte implementado pelo motor SpiderMonkey e pelo motor V8.

Bônus: ordenação estável
Algoritmos de ordenação podem ser estáveis ou instáveis. Caso queira começar neste assunto, este tópico do Stack Overflow tem informações em português para começar; em seguida você pode conferir os testes de estabilidade do método array.sort() em diferentes navegadores (em inglês).

*/
