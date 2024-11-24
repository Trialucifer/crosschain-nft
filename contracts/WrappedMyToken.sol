//SPDX-License-Identifier: MIT

pragma solidity ^0.8.22;

import { MyToken } from "./MyToken.sol";

contract WrappedMyToken is MyToken {
    constructor (string memory tokenName, string memory tokenSymbol) MyToken(tokenName, tokenSymbol) {}

    /**
     * tokenId不一定是自增的，防止意外问题，重写这个方法
     * 实际的生产中需要考虑权限问题
     * 只允许CCIP合约调用或者设置白名单，或者调用的时候要经过某种测试
     */
    function mintTokenWithSpecificTokenId(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }
}

