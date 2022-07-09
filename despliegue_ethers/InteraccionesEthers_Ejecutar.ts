import { InteraccionesEthers } from './InteraccionesEthers'

(async () => { 
    try {
        
        // DECLARACIÓN DE TODAS LAS INTERACCIONES CON EL CONTRATO

        const objeto = new InteraccionesEthers(
            "",
            "Numeros"
        )

        await objeto.cambiarNumeroContrato( 50 );

        const numeroActual = await objeto.verNumeroContrato();
        console.log(`Numero actual: ${numeroActual}`)

    } catch (e) {
        console.log(`Error: ${e.message}`)
    }
})()