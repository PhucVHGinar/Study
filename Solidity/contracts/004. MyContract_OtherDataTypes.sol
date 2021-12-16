pragma solidity ^0.5.1;

contract MyContract {
    string public stringValue = "myValue";
    bool public myBool = true;
    int public myInt = -69; // signed integer: a signed integer can have negative
    uint public myUnit = 99; // unsigned integer: an unsigned integer can not have negative in it
    uint8 public myUint8 = 8;
    uint256 public myUint256 = 99999;
}