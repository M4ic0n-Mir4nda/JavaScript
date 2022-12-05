const cliente = {
    nome: 'Joao',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['1155566698', '115523651'],
    saldo: 200.00,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente')
        } else {
            this.saldo -= valor
            console.log(`Pagamento efetuado com sucesso, novo saldo é ${this.saldo}`)
        }
    }
};

cliente.efetuaPagamento(25);