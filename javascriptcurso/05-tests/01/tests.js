const assert = require("assert");
const {obterPessoas} = require("./service.js");

// instalamos o pacote nock , para simular requisitos
// const nock = require("nock");

describe("Star Wars Testes", function () {
    this.beforeAll(function () {
        const response = {}
        
    })
    it("deve buscar r2d2 com o formato correto", async  () => {
        const expected = [{ nome: "R2-D2", peso: "96" }];
        const nomeBase = "r2-d2";
        const resultado = await obterPessoas(nomeBase);
        assert.deepEqual(resultado, expected);
    });
});