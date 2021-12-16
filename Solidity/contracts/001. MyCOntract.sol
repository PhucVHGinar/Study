pragma solidity ^0.5.1;

contract MyContract {
    string public value = "MyValue";

    constructor() public {
        value = "my value";
    }

   function get() public view returns(string memory) {
       return value;
  }

    function set(string memory _value) public {
        value = _value; // _value is just a variable to store local, value is a variable that's public on blockchain 
    }
}