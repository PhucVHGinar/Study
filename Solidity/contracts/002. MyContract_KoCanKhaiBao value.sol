pragma solidity ^0.5.1;

contract MyContract {
    string public value = "MyValue";


    function set(string memory _value) public {
        value = _value; // _value is just a variable to store local, value is a variable that's public on blockchain 
    }
}