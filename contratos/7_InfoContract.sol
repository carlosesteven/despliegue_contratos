// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract InfoContract {

   string nombre;
   uint edad;

    function cambiarInformacion(string memory _nombre, uint _edad) public {
        nombre = _nombre;
        edad = _edad;
    }

    function getInformacion() public view returns (string memory, uint) {
        return (nombre, edad);
    }   
    
}