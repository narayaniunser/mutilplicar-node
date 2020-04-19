const opt = {
    base: {
        demand : true,
        alias : 'b'
    },
    limite : {
        alias : 'l',
        default : 10
    }
}

const argv = require ('yargs')
                .command('listar','Imprime en consola',opt)
                .command('crear','Crea el archivo con la base y limite',opt)
                .help()
                .argv;

module.exports = {
    argv
}