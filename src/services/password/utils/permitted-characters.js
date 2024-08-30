async function permittedCharacters() {
    let permitted = [];
    //se o arquivo envi tiver ativado, estas opções estaão disponíveis
    if(process.env.UPPERCASE_LETTERS === "true") {
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if(process.env.LOWERCASE_LETTERS === "true") {
        permitted.push(..."abcdefghijklmnopqrstuvwxyz")
    }
    if(process.env.NUMBERS === "true") {
        permitted.push(..."0123456789")
    }
    if(process.env.SPECIAL_CHARACTERS === "true") {
        permitted.push(..."!@#$%^&*()_+-=[]{}|;:,.<>/?~")
    }
    return permitted;
}

export default permittedCharacters;