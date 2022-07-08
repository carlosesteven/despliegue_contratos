import { ethers, Contract } from 'ethers'

export class InteraccionesEthers{

    // VARIABLES
    
    constructor(id: string, nombre: string) {
        // INICIA LAS VARIABLES DEL CONSTRUCTOR

        console.log(`Ejecutando contrato mediante con Ethers.js`)
        console.log("")
        console.log(`Contrato ID: ${id}`)
        console.log(`Contrato NOMBRE: ${nombre}`)
        console.log("")
    }

    async obtenerArtefactosContrato()
    {
        const artefactosContrato = `browser/despliegue/contratos/artifacts/${this.contratoNombre}.json` 

        const datos = JSON.parse(
            await remix.call('fileManager', 'getFile', artefactosContrato)
        )

        return datos.abi;
    }

    obtenetFirma(){
        return (new ethers.providers.Web3Provider(web3Provider)).getSigner(this.cuentaId)
    }

    async verNumeroContrato()
    {
        // FUNCIÓN PARA VERIFICAR EL NUMERO ACTUAL GUARDADO EN EL CONTRATO
    }

    async cambiarNumeroContrato(nuevoValor : number)
    {
        // FUNCIÓN PARA CAMBIAR EL NUMERO ACTUAL GUARDADO EN EL CONTRATO
    }
}