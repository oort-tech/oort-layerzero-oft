import { Contract } from 'ethers'
import { type DeployFunction } from 'hardhat-deploy/types'

import { getDeploymentAddressAndAbi } from '@layerzerolabs/lz-evm-sdk-v2'
import { getNamedAccounts } from 'hardhat'

const contractName = 'OORTOFTUpgradeable'
const chain = {
    tokenAddress: '0x5651fA7a726B9Ec0cAd00Ee140179912B6E73599',
    endpointAddress: '0x1a44076050125825900e736c501f859c50fE728c', //Same endpoint address for current networks
}

const deploy: DeployFunction = async (hre) => {
    const { deploy } = hre.deployments
    const {deployer, proxyOwner} = await getNamedAccounts();
    console.log(`deploying ${contractName} on network: ${hre.network.name} with ${deployer}`)

    const { address, abi } = getDeploymentAddressAndAbi(hre.network.name, 'EndpointV2')
    //const endpointV2Deployment = new Contract(address, abi, signer)
    try {
        const proxy = await hre.ethers.getContract('OORTOFTUpgradeable')
        console.log(`Proxy: ${proxy.address}`)
    } catch (e) {
        console.log(`Proxy not found`)
    }

    await deploy(contractName, {
        from: deployer,
        args: [chain.tokenAddress, chain.endpointAddress], // replace '0x' with the address of the ERC-20 token
        log: true,
        waitConfirmations: 1,
        skipIfAlreadyDeployed: true,
        proxy: {
            owner: deployer,
            proxyContract: 'UUPS',
            execute: {
                init: {
                    methodName: 'initialize',
                    args: [deployer],
                },
            },
        },
    })
}

deploy.tags = [contractName]

export default deploy
