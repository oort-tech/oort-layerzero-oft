import { EndpointId } from "@layerzerolabs/lz-definitions";
const bsc_mainnetContract = {
    eid: EndpointId.BSC_V2_MAINNET,
    contractName: "OORTOFTUpgradeable"
};
const ethereum_mainnetContract = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: "OORTOFTUpgradeable"
};
export default { contracts: [{ contract: bsc_mainnetContract }, { contract: ethereum_mainnetContract }], connections: [{ from: bsc_mainnetContract, to: ethereum_mainnetContract, config: { sendLibrary: "0x9F8C645f2D0b2159767Bd6E0839DE4BE49e823DE", receiveLibraryConfig: { receiveLibrary: "0xB217266c3A98C8B2709Ee26836C98cf12f6cCEC1", gracePeriod: 0 }, sendConfig: { executorConfig: { maxMessageSize: 10000, executor: "0x3ebD570ed38B1b3b4BC886999fcF507e9D584859" }, ulnConfig: { confirmations: 20, requiredDVNs: ["0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc", "0xfD6865c841c2d64565562fCc7e05e619A30615f0"], optionalDVNs: [], optionalDVNThreshold: 0 } }, receiveConfig: { ulnConfig: { confirmations: 15, requiredDVNs: ["0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc", "0xfD6865c841c2d64565562fCc7e05e619A30615f0"], optionalDVNs: [], optionalDVNThreshold: 0 } } } }, { from: ethereum_mainnetContract, to: bsc_mainnetContract, config: { sendLibrary: "0xbB2Ea70C9E858123480642Cf96acbcCE1372dCe1", receiveLibraryConfig: { receiveLibrary: "0xc02Ab410f0734EFa3F14628780e6e695156024C2", gracePeriod: 0 }, sendConfig: { executorConfig: { maxMessageSize: 10000, executor: "0x173272739Bd7Aa6e4e214714048a9fE699453059" }, ulnConfig: { confirmations: 15, requiredDVNs: ["0x589dEDbD617e0CBcB916A9223F4d1300c294236b", "0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc"], optionalDVNs: [], optionalDVNThreshold: 0 } }, receiveConfig: { ulnConfig: { confirmations: 20, requiredDVNs: ["0x589dEDbD617e0CBcB916A9223F4d1300c294236b", "0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc"], optionalDVNs: [], optionalDVNThreshold: 0 } } } }] };
