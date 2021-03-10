const EventEmitter = require("events");

class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuraio:Click";

meuEmissor.on(nomeEvento, function (click) {
    console.log("um click", click);
});
// meuEmissor.emit(nomeEvento, "na barra de rolagem");
// meuEmissor.emit(nomeEvento, "no ok");

// let cout = 0;
// setInterval(function () {
//     meuEmissor.emit(nomeEvento,"no ok"+cout++)
// },1000);

const stdin = process.openStdin()
stdin.addListener("data",function (value) {
    console.log(`vode digitou: ${value.toString()}`)
    
})