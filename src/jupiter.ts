import axios from 'axios';
import { PublicKey } from '@solana/web3.js';
import { sendLog } from './telegram';

const JUPITER_QUOTE_URL = 'https://quote-api.jup.ag/v6/quote';

export async function getQuote(
  inputMint: string,
  outputMint: string,
  amountInLamports: number,
) {
  const { data } = await axios.get(JUPITER_QUOTE_URL, {
    params: {
      inputMint,
      outputMint,
      amount: amountInLamports,
      slippageBps: 300
    }
  });
  return data;
}

export async function buyToken(
  wallet: PublicKey,
  inputMint: string,
  outputMint: string,
  amountInLamports: number,
) {
  await sendLog(`🟢 BUY\nInput: ${inputMint}\nOutput: ${outputMint}\nAmount: ${amountInLamports}`);
}

export async function sellToken(
  wallet: PublicKey,
  inputMint: string,
  outputMint: string,
  amountInLamports: number,
) {
  await sendLog(`🔴 SELL\nInput: ${inputMint}\nOutput: ${outputMint}\nAmount: ${amountInLamports}`);
}
