//acesando arquivos de outras pastas
const ModuloA = require('../../ModuloA') //o nome precisa ser igual, se nao respeitar maiuscula e minuscula o linux nao reconhece !!!!
console.log(ModuloA.ola)

//modulo core do node
// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Ola voce chegou até aqui, abra o nevegador e coloque localhost:8080')
//     res.end()
// }).listen(8080)

//acesando uma pasta colando somente o nome dela, para isso o arquivo dentro dela precisa ser o index.js
const c = require('./PastaC')
console.log(c.ola2)
