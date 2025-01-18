// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFTAdapter } from "@layerzerolabs/oft-evm/contracts/OFTAdapter.sol";

// Standard LayerZero Adapter for ERC-20 Tokens
contract OORTOFTAdapterTest is OFTAdapter {
    constructor(
        address _token,
        address _lzEndpoint,
        address _owner
    ) OFTAdapter(_token, _lzEndpoint, _owner) Ownable(_owner) {}

    function debit(
        address from, 
        uint256 amountLD, 
        uint256 minAmountLD, 
        uint32 dstEid
        ) external {
        _debit(
            from,
            amountLD,
            minAmountLD,
            dstEid
        );
    }

    function credit(
        address to,
        uint256 _mountLD,
        uint32 srcEid
    ) external {
        _credit(
            to,
            _mountLD,
            srcEid
        );
    }
}