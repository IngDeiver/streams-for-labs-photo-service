import crypto from 'crypto'
import { queryVault } from './apivault'
import fs from 'fs'

const RSA_VAULT_URI = process.env.VAULT_RSA_URI || ""
console.log("RSA_VAULT_URI: ", RSA_VAULT_URI);

export const decryptFile = async (path: string) => {
    const  keys: any  = await queryVault(RSA_VAULT_URI)
    
    const fileEncrypted = fs.readFileSync(path)
    console.log("File to decrypt: ", fileEncrypted);
    
    const decryptedFile = await crypto.privateDecrypt(
        keys.private,
        fileEncrypted
    )
    console.log("decryptedFile:", decryptedFile.toString("utf8"));
    
    return decryptedFile
    
}