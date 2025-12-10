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

import { formatDate } from "./utils";

describe("formatDate", () => {
  describe("valid date inputs", () => {
    it("should format ISO date string as dd/MM/yyyy", () => {
      expect(formatDate("2025-01-15")).toBe("15/01/2025");
    });

    it("should format Date object as dd/MM/yyyy", () => {
      const date = new Date("2025-12-31");
      expect(formatDate(date)).toBe("31/12/2025");
    });

    it("should handle single digit days and months", () => {
      expect(formatDate("2025-03-05")).toBe("05/03/2025");
    });

    it("should format dates at the start of the year", () => {
      expect(formatDate("2025-01-01")).toBe("01/01/2025");
    });

    it("should format dates at the end of the year", () => {
      expect(formatDate("2025-12-31")).toBe("31/12/2025");
    });

    it("should handle leap year dates", () => {
      expect(formatDate("2024-02-29")).toBe("29/02/2024");
    });
  });

  describe("edge cases", () => {
    it("should throw error for invalid date string", () => {
      expect(() => formatDate("invalid-date")).toThrow();
    });

    it("should throw error for empty string", () => {
      expect(() => formatDate("")).toThrow();
    });

    it("should throw error for null", () => {
      expect(() => formatDate(null as unknown as string)).toThrow();
    });

    it("should throw error for undefined", () => {
      expect(() => formatDate(undefined as unknown as string)).toThrow();
    });
  });

  describe("various date formats", () => {
    it("should handle ISO 8601 datetime strings", () => {
      expect(formatDate("2025-06-15T14:30:00Z")).toBe("15/06/2025");
    });

    it("should handle ISO 8601 datetime with timezone", () => {
      expect(formatDate("2025-06-15T14:30:00-03:00")).toBe("15/06/2025");
    });

    it("should handle dates with timestamp", () => {
      const timestamp = new Date(2025, 5, 15); // June 15, 2025
      expect(formatDate(timestamp)).toBe("15/06/2025");
    });
  });
});
