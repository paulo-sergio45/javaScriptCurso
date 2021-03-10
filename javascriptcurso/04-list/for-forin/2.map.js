const service = require("./scriptnodebr6listasjs")

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];
    for (let i = 0; i <= this.length-1; i++) {
        const resultado = callback(this[i],i);
        novoArrayMapeado.push(resultado);
    }
    return novoArrayMapeado;
}

async function main() {
    try {
        const results = await service.obterPessoas("a")
        //equivalente ao map
        // const names = [];
        // results.results.forEach(function (item) {
        //     names.push(item.name)
        // });
        //map normal
        // const names = results.results.map(function (pessoa) {
        //     return pessoa.name
        // })
        // em map em uma linha
        // const names = results.results.map((pessoa) => pessoa.name);

        const names = results.results.meuMap(function (pessoa,indice) {
            return `${indice} ${pessoa.name}`;
        })
        console.log("names", names);

    } catch (error) {
        console.log("DEU RUIM", error);

    }
}
main();