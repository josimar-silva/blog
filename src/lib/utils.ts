/**
 * MIT License
 *
 * Copyright (c) 2025 Josimar Silva
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Default locale for date formatting across the application.
 * Using en-GB for consistent dd/MM/yyyy format.
 */
export const DEFAULT_DATE_LOCALE = "en-GB";

/**
 * Default options for date formatting.
 * Format: "dd/MM/yyyy" (e.g., "15/01/2025")
 */
export const DEFAULT_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

/**
 * Formats a date string or Date object to "dd/MM/yyyy" format.
 *
 * @param date - Date string (ISO format) or Date object
 * @returns Formatted date string (e.g., "15/01/2025")
 * @throws Error if date is invalid, null, or undefined
 *
 * @example
 * ```tsx
 * formatDate("2025-01-15") // "15/01/2025"
 * formatDate(new Date("2025-01-15")) // "15/01/2025"
 * ```
 */
export function formatDate(date: string | Date): string {
  if (!date) {
    throw new Error("Date is required");
  }

  const dateObj = typeof date === "string" ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) {
    throw new Error("Invalid date");
  }

  return dateObj.toLocaleDateString(DEFAULT_DATE_LOCALE, DEFAULT_DATE_OPTIONS);
}
