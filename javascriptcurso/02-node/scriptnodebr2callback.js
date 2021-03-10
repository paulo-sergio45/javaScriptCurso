
/*
0 obter um usuario
1 obter o munero de telefone do usuario
2 obter o endereco do usuario
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date()
        });
    }, 1000); 
}


function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: "33154294",
            ddd: 27
        });
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "oloco",
            numero: 0
        });
    }, 2000);
}

function resolverUsuario(erro, usuario) {
    console.log("usuario", usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false
    if (error) {
        console.error("DEU RUIM EM USUARIO", error);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error("DEU RUIM EM TELEFONE", error1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error("DEU RUIM EM ENDERECO", error2);
                return;
            }
            console.log(`
            Nome: ${usuario.nome}
            Endereco: ${endereco.rua} Nº: ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
    `);
        });
    });
});

    //const telefone = ObterTelefone();

    //console.log("telefone", telefone)
