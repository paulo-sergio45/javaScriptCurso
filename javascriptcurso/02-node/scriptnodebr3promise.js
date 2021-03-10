
/*
0 obter um usuario
1 obter o munero de telefone do usuario
2 obter o endereco do usuario
*/
// importamos um modulo interno do node.js
const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco)

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
// para manipular o sucesso usamos o funçao .the
// para manipular erros usamos .catch
// usuario > telefone > telefone
const usuarioPromise = obterUsuario()

usuarioPromise
    .then(function (resultado) {
        return obterTelefone(resultado.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: resultado.nome,
                        id: resultado.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolverEndereco(result) {
            return {
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result
            }

        })
    })
    .then(function (resultado) {
        console.log(`
            Nome ${resultado.usuario.nome}
            Endereco:${resultado.endereco.rua},${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
            `
        );

    })
    .catch(function (error) {
        console.log("DEU RUIM", error);
    })
