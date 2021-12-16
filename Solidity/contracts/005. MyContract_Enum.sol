pragma solidity ^0.5.1;
// Enum is an enumerated list that's gonna allow us to keep track of set list of things in our contract
contract MyContract {
    enum State { Waiting, Ready, Active }
    State public state;

    constructor() public {
        state = State.Ready;
    }

    function activate() public {
        state = State.Active;
    }

    function isActive() public view returns(bool) {
        return state == State.Active;
    }
}