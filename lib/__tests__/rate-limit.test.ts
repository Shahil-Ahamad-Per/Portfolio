import { describe, it, expect, beforeEach, vi } from "vitest";
import { checkRateLimit, incrementSubmissionCount } from "../rate-limit";

const STORAGE_KEY = "portfolio_contact_submissions";

function clearStorage() {
  localStorage.removeItem(STORAGE_KEY);
}

function setRecord(count: number, date?: string) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ count, date: date ?? new Date().toDateString() })
  );
}

describe("rate-limit", () => {
  beforeEach(() => {
    clearStorage();
  });

  describe("checkRateLimit", () => {
    it("returns full remaining when no record exists", () => {
      const result = checkRateLimit();
      expect(result.remaining).toBe(5);
      expect(result.isLimited).toBe(false);
    });

    it("returns correct remaining when under limit", () => {
      setRecord(2);
      const result = checkRateLimit();
      expect(result.remaining).toBe(3);
      expect(result.isLimited).toBe(false);
    });

    it("returns isLimited when at limit", () => {
      setRecord(5);
      const result = checkRateLimit();
      expect(result.remaining).toBe(0);
      expect(result.isLimited).toBe(true);
    });

    it("resets when date changes", () => {
      setRecord(5, "Mon Jan 01 2024");
      const result = checkRateLimit();
      expect(result.remaining).toBe(5);
      expect(result.isLimited).toBe(false);
    });
  });

  describe("incrementSubmissionCount", () => {
    it("increments from zero", () => {
      const result = incrementSubmissionCount();
      expect(result.count).toBe(1);
      expect(result.isLimited).toBe(false);
    });

    it("increments existing count", () => {
      setRecord(3);
      const result = incrementSubmissionCount();
      expect(result.count).toBe(4);
      expect(result.isLimited).toBe(false);
    });

    it("returns isLimited when reaching limit", () => {
      setRecord(4);
      const result = incrementSubmissionCount();
      expect(result.count).toBe(5);
      expect(result.isLimited).toBe(true);
    });

    it("resets count when date changes", () => {
      setRecord(5, "Mon Jan 01 2024");
      const result = incrementSubmissionCount();
      expect(result.count).toBe(1);
      expect(result.isLimited).toBe(false);
    });
  });
});
