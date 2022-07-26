## candy-machine-assistant

A package which provides functions to connect with Solana's NFT mint accounts, generate PDAs, get candy machine state, send confirmation transactions, retrieving collection data, creating mint accounts easier by avoiding writing of boilerplate code. 
This streamlines the minting from a deployed candy machine.

In this extract, 
```candyMachine``` has an interface given by  
    ```{
        id: anchor.web3.PublicKey;
        program: anchor.Program; 
        state: CandyMachineState;
    }```

other type interfaces are instances from ```@solana/web3.js;```

The most utilized examples are given below :

```getAtaForMint :
const userTokenAccountAddress = (await getAtaForMint(mint.publicKey, payer))[0];
// Generates the Associated Token Account Address given a mint and walletAddress.

getCandyMachineState :
const cndy = await getCandyMachineState(
    anchorWallet: anchor.Wallet,
	candyMachineId: anchor.web3.PublicKey,
	connection: anchor.web3.Connection,
);
// Returns the state of the candy machine.
    
sendTransaction :
await sendTransaction(
    connection: Connection,
	wallet: any,
	instructions: TransactionInstruction[] | Transaction,
	signers: Keypair[],
	awaitConfirmation = true,
	commitment: Commitment = "singleGossip",
	includesFeePayer: boolean = false,
	block?: BlockhashAndFeeCalculator,
);
// Sends a transaction to the blockchain given a set of parameters, returns void.

getCollectionPDA:
const [collectionPDA] = await getCollectionPDA(candyMachineAddress);
// Returns the Program Derived Address of the collection given a Candy Machine ID.

mintOneToken:
const mintResult = await mintOneToken(
    candyMachine,
    walletAddress.publicKey,
    beforeTransactions,
    afterTransactions,
    setupMint ?? setupTxn
);
// Returns a MintResult, given parameters and returns Mint Transaction ID and a Metadata Key.


createAccountsForMint:
let setupMint = await createAccountsForMint(candyMachine,walletAddress.publicKey);
// Returns the setup state of the account i.e. = {
    mint: anchor.web3.Keypair;
    userTokenAccount: anchor.web3.PublicKey;
    transaction: string;
}

awaitTransactionSignatureConfirmation:
await awaitTransactionSignatureConfirmation(
        setupMint.transaction,
        txTimeout,
        connection,
        true
    );
// Takes in a Transaction Signature, a timeout, a connection and queryStatus 
// returns the slot, amount of confirmations, errors if any and the confirmation status.

```