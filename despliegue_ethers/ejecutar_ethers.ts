import { despliegueEthers } from './ethers_js'

(async () => { 
    try {
        const resultado = await despliegueEthers('Numeros', [])
        console.log(`Identificador Contrato: ${resultado.address}`)
    } catch (e) {
        console.log(`Error: ${e.message}`)
    }
})()
