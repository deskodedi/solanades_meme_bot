import 'dotenv/config';

export const CONFIG = {
  rpcUrl: process.env.RPC_URL!,
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN!,
  telegramChatId: process.env.TELEGRAM_CHAT_ID!,
  smartWalletAddress: process.env.SMART_WALLET_ADDRESS!,
  takeProfitMultiplier: Number(process.env.TAKE_PROFIT_MULTIPLIER || 2.0),
  stopLossMultiplier: Number(process.env.STOP_LOSS_MULTIPLIER || 0.5),
  maxBuyAmountSol: Number(process.env.MAX_BUY_AMOUNT_SOL || 0.05),
};
