// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EnviarEther {
    function EnviarViaTransfer(address payable _destino) public payable {
        // Esta función ya no se recomienda para enviar Ether.
        _destino.transfer(msg.value);
    }

    function EnviarViaSend(address payable _destino) public payable {
        // Enviar devuelve un valor booleano que indica "success" or "failure".
        // Esta función ya no se recomienda para enviar Ether.
        bool sent = _destino.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function EnviarViaCall(address payable _destino) public payable{
        // Enviar devuelve un valor booleano que indica "success" or "failure".
        // Este es el método actual recomendado para usar.
        (bool sent, ) = _destino.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}