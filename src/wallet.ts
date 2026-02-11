import { PublicKey } from '@solana/web3.js';
import { CONFIG } from './config';

export function getSmartWallet(): PublicKey {
  return new PublicKey(CONFIG.smartWalletAddress);
}
