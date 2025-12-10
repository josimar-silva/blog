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

import { formatDate } from "@/lib/utils";

import { ErrorBoundary } from "./error-boundary";

interface FormattedDateProps {
  date: string | Date;
  className?: string;
}

/**
 * Internal component that renders the formatted date.
 * Throws errors for invalid dates, caught by ErrorBoundary wrapper.
 */
function FormattedDateContent({
  date,
  className,
}: Readonly<FormattedDateProps>) {
  const formattedDate = formatDate(date);
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const isoDate = dateObj.toISOString().split("T")[0]; // YYYY-MM-DD

  return (
    <time dateTime={isoDate} className={className}>
      {formattedDate}
    </time>
  );
}

/**
 * Renders a semantic time element with formatted date.
 * Automatically handles invalid dates with a graceful fallback UI.
 *
 * Features:
 * - Provides machine-readable datetime attribute in ISO format
 * - Human-readable display text for valid dates
 * - Graceful error handling for invalid dates with error boundary
 *
 * @returns Formatted time element, or error fallback UI for invalid dates
 *
 * @example
 * ```tsx
 * <FormattedDate date="2025-01-15" />
 * <FormattedDate date={new Date()} className="text-sm" />
 * // Invalid dates automatically show: "Invalid date"
 * <FormattedDate date="invalid-date" />
 * ```
 * @param props
 */
export function FormattedDate(props: Readonly<FormattedDateProps>) {
  return (
    <ErrorBoundary
      fallback={<span className="text-sm text-gray-500">Invalid date</span>}
    >
      <FormattedDateContent {...props} />
    </ErrorBoundary>
  );
}
