import { Connection, PublicKey } from "@solana/web3.js";
import { getMetadataPDA } from "./candyMachine";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

export const getMetadataFromMint = async (mint: PublicKey, connection: Connection): Promise<Metadata> => {
	return await Metadata.fromAccountAddress(connection, await getMetadataPDA(mint));
};
