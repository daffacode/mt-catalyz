"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainName = exports.ChainId = void 0;
const validation_1 = require("../validation");
const chain_name_1 = require("./chain-name");
/**
 * Different supported chain ids
 * @alpha
 */
var ChainId;
(function (ChainId) {
    ChainId[ChainId["ETHEREUM_MAINNET"] = 1] = "ETHEREUM_MAINNET";
    ChainId[ChainId["HARMONY_TESTNET"] = 1666700000] = "HARMONY_TESTNET";
    ChainId[ChainId["ETHEREUM_ROPSTEN"] = 3] = "ETHEREUM_ROPSTEN";
    ChainId[ChainId["ETHEREUM_RINKEBY"] = 4] = "ETHEREUM_RINKEBY";
    ChainId[ChainId["ETHEREUM_GOERLI"] = 5] = "ETHEREUM_GOERLI";
    ChainId[ChainId["ETHEREUM_KOVAN"] = 42] = "ETHEREUM_KOVAN";
    ChainId[ChainId["MATIC_MAINNET"] = 137] = "MATIC_MAINNET";
    ChainId[ChainId["MATIC_MUMBAI"] = 80001] = "MATIC_MUMBAI";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
/**
 * Get the chain name by chain id
 * @alpha
 */
function getChainName(chainId) {
    switch (chainId) {
        case ChainId.ETHEREUM_MAINNET:
            return chain_name_1.ChainName.ETHEREUM_MAINNET;
        case ChainId.HARMONY_TESTNET:
            return chain_name_1.ChainName.HARMONY_TESTNET;
        case ChainId.ETHEREUM_ROPSTEN:
            return chain_name_1.ChainName.ETHEREUM_ROPSTEN;
        case ChainId.ETHEREUM_RINKEBY:
            return chain_name_1.ChainName.ETHEREUM_RINKEBY;
        case ChainId.ETHEREUM_GOERLI:
            return chain_name_1.ChainName.ETHEREUM_GOERLI;
        case ChainId.ETHEREUM_KOVAN:
            return chain_name_1.ChainName.ETHEREUM_KOVAN;
        case ChainId.MATIC_MAINNET:
            return chain_name_1.ChainName.MATIC_MAINNET;
        case ChainId.MATIC_MUMBAI:
            return chain_name_1.ChainName.MATIC_MUMBAI;
        default:
            return null;
    }
}
exports.getChainName = getChainName;
/**
 * @alpha
 */
(function (ChainId) {
    ChainId.schema = {
        type: 'number',
        enum: Object.values(ChainId),
    };
    ChainId.validate = validation_1.generateValidator(ChainId.schema);
})(ChainId = exports.ChainId || (exports.ChainId = {}));
//# sourceMappingURL=chain-id.js.map