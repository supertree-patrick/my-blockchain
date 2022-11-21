pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleToken is ERC20 {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {
    // address(this) 해당 컨트렉트의 주소
    _mint(address(this), 1e30);
  }

  function faucet() external {
    _transfer(address(this), msg.sender, 1000);
  }
}