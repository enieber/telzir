import tax from "./tax";

describe("test tax rule", () => {
  it("should import tax function", () => {
    expect(tax).not.toBeUndefined();
    expect(typeof tax).toEqual("function");
  });
  it("should return $1.9 when origin 011 to 016", () => {
    const result = tax("011", "016");
    expect(result).toEqual(1.9);
  });
  it("should return $1.9 when origin 011 to 017", () => {
    const result = tax("011", "017");
    expect(result).toEqual(1.7);
  });
  it("should return $1.9 when origin 011 to 018", () => {
    const result = tax("011", "018");
    expect(result).toEqual(0.9);
  });
  it("should return $2.90 when origin 016 to 011", () => {
    const result = tax("016", "011");
    expect(result).toEqual(2.9);
  });
  it("should return $2.70 when origin 017 to 011", () => {
    const result = tax("017", "011");
    expect(result).toEqual(2.70);
  });
  it("should return $1.90 when origin 018 to 011", () => {
    const result = tax("018", "011");
    expect(result).toEqual(1.90);
  });
});
