import chalk from "chalk";

const promptsSchemaMain = [
    {
        name: "select",
        description: chalk.yellow(
            "escolha a ferramenta (1 - QRCODE ou  (2 - PASSWORD"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        required: true,

    }
]

export default promptsSchemaMain;