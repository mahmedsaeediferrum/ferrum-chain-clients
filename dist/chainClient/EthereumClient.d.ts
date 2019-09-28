import { ChainClient, MultiChainConfig, NetworkStage, SimpleTransferTransaction } from "./types";
import { HexString } from 'ferrum-plumbing';
import { GasPriceProvider } from './GasPriceProvider';
export declare class EthereumClient implements ChainClient {
    private networkStage;
    private gasService;
    private readonly provider;
    private readonly contractAddresses;
    private readonly decimals;
    private readonly requiredConfirmations;
    private readonly txWaitTimeout;
    constructor(networkStage: NetworkStage, config: MultiChainConfig, gasService: GasPriceProvider);
    feeCurrency(): string;
    findContractInfo(contractAddress: string): {
        name: string;
        address: any;
        decimal: any;
    };
    getTransactionById(tid: string): Promise<SimpleTransferTransaction | undefined>;
    processPaymentFromPrivateKey(skHex: HexString, targetAddress: string, currency: string, amount: number): Promise<string>;
    /**
     * Note: This only returns incoming transactions to the given address and only works for ERC20 transactions
     */
    getRecentTransactionsByAddress(address: string): Promise<SimpleTransferTransaction[]>;
    private sendTransaction;
    private sendEth;
    getBalance(address: string, currency: string): Promise<number>;
    waitForTransaction(transactionId: string): Promise<SimpleTransferTransaction | undefined>;
    private web3;
}
//# sourceMappingURL=EthereumClient.d.ts.map