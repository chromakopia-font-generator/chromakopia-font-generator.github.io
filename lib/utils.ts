import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development"
}

/**
 * 将字符串中的每个单词的首字母大写，如果单词首字母已经是大写则不转换
 * @param sentence - 要处理的字符串
 * @returns 每个单词首字母大写的字符串
 */
export function capitalizeWords(sentence: string): string {
  return sentence
    .split(' ')
    .map(word => {
      if (word.length === 0) return word;
      const firstChar = word.charAt(0);
      if (firstChar === firstChar.toUpperCase()) {
        return word;
      }
      return firstChar.toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

export function getCategories(): string[] {
  return ["1", "2", "3"];
}