
/*
0 obter um usuario
1 obter o munero de telefone do usuario
2 obter o endereco do usuario
*/
// importamos um modulo interno do node.js
const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
    // quando der algum problema > reject(ERRO)
    // quando for executada > resolve
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date()
            });
        }, 1000);
    })

}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: "33154294",
                ddd: 27
            });
        }, 2000);
    })

}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "oloco",
            numero: 0
        });
    }, 2000);
}

// 1 primeira coisa adicionar a palavra async > automaticamente ela retornara uma promise
main();
async function main() {
    try {
        console.time("medida-promise");

        const usuario = await obterUsuario();
        // const telefone = await obterTelefone(usuario.id);
        // const endereco = await obterEnderecoAsync(usuario.id);
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])

        const endereco = resultado[1];
        const telefone = resultado[0]

        console.log(`
            Nome:${usuario.nome}
            Telefone:(${telefone.ddd}) ${telefone.telefone}
            Endereco: ${endereco.rua},${endereco.numero}
        `);
        console.timeEnd("medida-promise");

    } catch (error) {
        console.log("DEU RUIM", error);

    }
}
