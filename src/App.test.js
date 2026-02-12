import { describe, it, expect } from "vitest";

describe("что-то правдивое и ложное", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
