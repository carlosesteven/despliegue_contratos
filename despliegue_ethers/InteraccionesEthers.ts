import { ethers, Contract } from 'ethers'

export class InteraccionesEthers{

    // VARIABLES
    contratoId: string;
    contratoNombre: string;
    cuentaId : Number = 0;
    
    constructor(id: string, nombre: string) {
        // INICIA LAS VARIABLES DEL CONSTRUCTOR
        this.contratoId = id;
        this.contratoNombre = nombre;

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

        let abiContrato = await this.obtenerArtefactosContrato()

        let firmaBilletera = this.obtenetFirma()

        let contrato = new Contract(
            this.contratoId,
            abiContrato,
            firmaBilletera
        )

        let transaccion = await contrato.callStatic.verNumero()

        return transaccion
    }

    async cambiarNumeroContrato(nuevoValor : number)
    {
        // FUNCIÓN PARA CAMBIAR EL NUMERO ACTUAL GUARDADO EN EL CONTRATO
         let abiContrato = await this.obtenerArtefactosContrato()

        let firmaBilletera = this.obtenetFirma()

        let contrato = new Contract(
            this.contratoId,
            abiContrato,
            firmaBilletera
        )

        let transaccion = await contrato.cambiarNumero(nuevoValor)

        console.log("Estado: cambiando numero, espere un momento")

        await transaccion.wait()

        console.log("Estado: termino de actualizar el numero en el contrato")

        return await contrato.callStatic.verNumero()

    }
}