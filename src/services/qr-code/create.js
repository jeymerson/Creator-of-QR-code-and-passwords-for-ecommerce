import prompt from "prompt";
import promptsSchemaQRCode from "../../prompts-schema/prompts-schema-qrcode.js";
import handle from "./handle.js";

async function creatQRCode () {

    prompt.get(promptsSchemaQRCode, handle);
    //iniciar o prompt
    prompt.start();

}

export default creatQRCode;