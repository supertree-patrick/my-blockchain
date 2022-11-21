pragma solidity 0.8.4;
import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "@openzeppelin/contracts/utils/Counters.sol";

contract SimpleNft is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() public ERC721("SimpleNft", "SNT") {}

  function mint(address to, string calldata tokenURI) public returns(uint256) {
    _tokenIds.increment();

    uint256 newTokenId = _tokenIds.current();

    _mint(to, newTokenId);
    _setTokenURI(newTokenId, tokenURI);
  }
}