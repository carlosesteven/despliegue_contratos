import { despliegueWeb3 } from './web3_js'

(async () => {
    try {
        const result = await despliegueWeb3('Numeros', [])
        console.log(`Identificador Contrato: ${result.address}`)
    } catch (e) {
        console.log(e.message)
    }
})()
