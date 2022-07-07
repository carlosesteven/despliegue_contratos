import { ethers } from 'ethers'

export const despliegueEthers = async (
    nombreContrato: string, 
    parametros: Array<any>, 
    idCuenta?: number
): Promise<ethers.Contract> => 
{    
    console.log(`Desplegando Contrato: [${nombreContrato}] con Ethers.js`)
    
    const rutaArtefactos = `browser/despliegue/contratos/artifacts/${nombreContrato}.json` 

    const metaData = JSON.parse(
        await remix.call('fileManager', 'getFile', rutaArtefactos)
    )
    
    const firma = (new ethers.providers.Web3Provider(web3Provider)).getSigner(idCuenta)

    const factory = new ethers.ContractFactory(
        metaData.abi, 
        metaData.data.bytecode.object, 
        firma
    )

    const contrato = await factory.deploy(...parametros)   

    await contrato.deployed()
    
    return contrato
}
