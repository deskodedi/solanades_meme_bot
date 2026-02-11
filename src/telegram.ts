import { Telegraf } from 'telegraf';
import { CONFIG } from './config';

export const bot = new Telegraf(CONFIG.telegramBotToken);

export async function sendLog(message: string) {
  try {
    await bot.telegram.sendMessage(CONFIG.telegramChatId, message, { parse_mode: 'Markdown' });
  } catch (e) {
    console.error('Telegram error:', e);
  }
}
