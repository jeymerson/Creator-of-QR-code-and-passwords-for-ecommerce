import permittedCharacters from "./utils/permitted-characters.js";
async function handle() {
    let characters= await permittedCharacters();
    let password = "";
    const passworLenght = process.env.PASSWORD_LENGHT;
 
    for(let i =0; i < passworLenght; i++) {
        const index = Math.floor(Math.random()* characters.length);
        password += characters[index]
    }
    return password;

}

export default handle;