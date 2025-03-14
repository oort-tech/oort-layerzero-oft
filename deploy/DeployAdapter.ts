import { Contract } from 'ethers'
import { type DeployFunction } from 'hardhat-deploy/types'

import { getDeploymentAddressAndAbi } from '@layerzerolabs/lz-evm-sdk-v2'
import { getNamedAccounts } from 'hardhat'

const contractName = 'OORTOFTUpgradeableTest'
const chain = {
    tokenAddress: '0x4872d996f8a94A044AE8e1fa1d928a431602D3b5',
    endpointAddress: '0x6EDCE65403992e310A62460808c4b910D972f10f',
}

const deploy: DeployFunction = async (hre) => {
    const { deploy } = hre.deployments
    const {deployer, proxyOwner} = await getNamedAccounts();
    console.log(`deploying ${contractName} on network: ${hre.network.name} with ${deployer}`)

    const { address, abi } = getDeploymentAddressAndAbi(hre.network.name, 'EndpointV2')
    //const endpointV2Deployment = new Contract(address, abi, signer)
    try {
        const proxy = await hre.ethers.getContract('OORTOFTUpgradeableTest')
        console.log(`Proxy: ${proxy.address}`)
    } catch (e) {
        console.log(`Proxy not found`)
    }

    await deploy(contractName, {
        from: deployer,
        args: [chain.tokenAddress, chain.endpointAddress], // replace '0x' with the address of the ERC-20 token
        log: true,
        waitConfirmations: 1,
        skipIfAlreadyDeployed: false,
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
