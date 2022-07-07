import Web3 from 'web3'
import { 
    Contract, 
    ContractSendMethod, 
    Options 
} from 'web3-eth-contract'

export const despliegueWeb3 = async (
    nombreContrato: string, 
    parametros: Array<any>, 
    from?: string, 
    gas?: number
): Promise<Options> => {

    const web3 = new Web3(web3Provider)

    console.log(`Desplegando Contrato: [${nombreContrato}] con Web3.js`)
    
    const rutaArtefactos = `browser/despliegue/contratos/artifacts/${nombreContrato}.json`

    const metaData = JSON.parse(await remix.call('fileManager', 'getFile', rutaArtefactos))

    const cuentas = await web3.eth.getAccounts()

    const contrato: Contract  = new web3.eth.Contract(metaData.abi)

    const contratoDepliegue: ContractSendMethod = contrato.deploy({
        data: metaData.data.bytecode.object,
        arguments: parametros
    })

    const instanciaContrato = await contratoDepliegue.send({
        from: from || cuentas[0],
        gas: gas || 1500000
    })
    return instanciaContrato.options    
}
