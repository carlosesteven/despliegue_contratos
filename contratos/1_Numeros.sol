// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;
contract Numeros{

    uint numero;
    
    event seCambioNumero(address direccion, uint numero);   
    
    function cambiarNumero( uint _numero ) public 
    {
        emit seCambioNumero(msg.sender, _numero);
        numero = _numero;
    } 
    
    function verNumero() public view returns (uint) {
        return numero;
    }
}
