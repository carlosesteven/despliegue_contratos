// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract RecibirEther {

    // La dirección de pago puede recibir Ether
    address payable public propietario;

    // Guadar la dirección del propietario del contrato
    constructor() payable {
        propietario = payable(msg.sender);
    }

    // Función para recibir Ether. msg.data debe estar vacío
    receive() external payable {}

    // Se llama a la función "fallback" cuando msg.data no está vacío
    fallback() external payable {}

    // Función para ver el saldo disponible en el contrato
    function verSaldoDisponible() public view returns (uint) {
        return address(this).balance;
    }

    // Función para retirar todo el Ether de este contrato.
    function retirarEther() public {
        // Obtener la cantidad de Ether almacenada en este contrato
        uint cantidad = address(this).balance;

        // Enviar todo el éter al propietario
        // El propietario puede recibir Ether ya que la dirección del propietario es payable
        (bool success, ) = propietario.call{value: cantidad}("");
        require(success, "Error al enviar Ether");
    }

    // Función para transferir Ether desde este contrato a la dirección desde la entrada
    function TransferirEther(address payable _destino, uint _cantidad) public {
        (bool success, ) = _destino.call{
            value: _cantidad
        }("");
        require(success, "Error al enviar Ether");
    }
}

