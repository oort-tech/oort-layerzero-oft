// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFTAdapterUpgradeable } from "@layerzerolabs/oft-evm-upgradeable/contracts/oft/OFTAdapterUpgradeable.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import { SafeERC20 } from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

///////////////////////////////////////////////////
//   ____  ____  ___  ______  ____  __________  ////
//  / __ \/ __ \/ _ \/_  __/ / __ \/ __/_  __/  ////
// / /_/ / /_/ / , _/ / /   / /_/ / _/  / /   /////
// \____/\____/_/|_| /_/    \____/_/   /_/    /////
//////////////////////////////////////////////////

contract OORTOFTUpgradeable is OFTAdapterUpgradeable {
    using SafeERC20 for IERC20;

    constructor(
        address _token,
        address _lzEndpoint
    ) OFTAdapterUpgradeable(_token, _lzEndpoint) {}

    function version() external pure returns (uint256 major, uint256 minor, uint256 patch) {
        major = 1;
        minor = 0;
        patch = 0;
    }

    // Admin
    function initialize(address _delegate) external initializer {
        __OFTCore_init(_delegate);
        __Ownable_init(_delegate);
        _transferOwnership(_delegate);
    }

    // Restrictive
    function AdminWithdrawTokens(address _token, address _to, uint256 _amount) external onlyOwner {
        IERC20(_token).safeTransfer(_to, _amount);
    }
}
