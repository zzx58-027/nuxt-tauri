import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  // tailwind-merge 无需? 需要, clsx 不方便用
  return twMerge(clsx(inputs));
}
