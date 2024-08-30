import handle from "./handle.js";
import chalk from "chalk";

async function createPassword(params) {
    console.log(chalk.green("password"))
    const password = await handle();
    console.log(password)
}

export default createPassword;