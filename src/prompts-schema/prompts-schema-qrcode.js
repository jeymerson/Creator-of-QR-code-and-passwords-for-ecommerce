import chalk from 'chalk';

const promptsSchemaQRCode = [
    {
        name: "link", //tudo que o usuário responder abaixo será salvo aqui no link
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name:"type",
        description: chalk.yellow(
            "Escolha entre o tipo de QRcode (1- NORMAL ou (2- TERMINAL"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true, 
    }

]
export default promptsSchemaQRCode;