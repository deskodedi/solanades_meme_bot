import { Connection } from '@solana/web3.js';
import { CONFIG } from './config';
import { bot, sendLog } from './telegram';
import { getSmartWallet } from './wallet';
import { buyToken, sellToken } from './jupiter';

const SOL_MINT = 'So11111111111111111111111111111111111111112';

async function main() {
  const connection = new Connection(CONFIG.rpcUrl, 'confirmed');
  const wallet = getSmartWallet();

  await sendLog(`🤖 Bot started\nWallet: ${wallet.toBase58()}`);

  const targetTokenMint = 'TARGET_TOKEN_MINT_HERE';

  const amountInLamports = CONFIG.maxBuyAmountSol * 1_000_000_000;

  await buyToken(wallet, SOL_MINT, targetTokenMint, amountInLamports);

  await sendLog('⏳ Monitoring for TP / SL...');
}

main().catch(async (e) => {
  console.error(e);
  await sendLog('❌ Bot crashed: ' + String(e));
});

bot.launch();
