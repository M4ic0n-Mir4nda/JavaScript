function promisse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey, sou a promisse');
            resolve();
        }, 2000)
    })
}

export default async function assincrona() {
    await promisse();
    console.log('Terminou')
}