import prompt from "prompt"

import promptsSchemaMain from "./prompts-schema/prompts-schema-main.js" 
import creatQRCode  from "./services/qr-code/create.js"
import createPassword from "./services/password/create.js"



async function main() {

    prompt.get(promptsSchemaMain, async (err, choose)=>{
       
              if(err)console.log(err);
            if(choose.select == 1) await creatQRCode();
            if(choose.select == 2) await createPassword();
    })

    prompt.start();

}
main();