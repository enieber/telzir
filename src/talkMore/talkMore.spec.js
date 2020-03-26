import tax from "../tax/tax";
import talkMore from "./talkMore";

describe("test talk more", () => {
  it("shold talkMore is fucntion", () => {
    expect(talkMore).not.toBeUndefined();
    expect(typeof talkMore).toEqual('function')
  });
  describe("plam talkMore 30", () => {
    it('shold return $0.00 call at 20min when origin 011 to 016', () => {
        const valueTax = tax('011', '016')
        const result = talkMore('talk-30', 20, valueTax)
        expect(result).toEqual(0.00)
    })
    it('shold return $10.45 call at 35min when origin 011 to 016', () => {
        const valueTax = tax('011', '016')
        const result = talkMore('talk-30', 35, valueTax)
        expect(result).toEqual(10.45)
    })
  })
  describe("plam talkMore 60", () => {
    it('shold return $37.40 call at 80min when origin 011 to 017', () => {
        const valueTax = tax('011', '017')
        const result = talkMore('talk-60', 80, valueTax)
        expect(result).toEqual(37.40)
    })
    it('shold return $0.00 call at 60min when origin 011 to 017', () => {
        const valueTax = tax('011', '017')
        const result = talkMore('talk-60', 60, valueTax)
        expect(result).toEqual(0.00)
    })
  })
  describe("plam talkMore 120", () => {
    it('shold return $167.20 call at 200min when origin 018 to 011', () => {
        const valueTax = tax('018', '011')
        const result = talkMore('talk-120', 200, valueTax)
        expect(result).toEqual(167.20)
    })
    it('shold return $0.00 call at 100min when origin 018 to 011', () => {
        const valueTax = tax('018', '011')
        const result = talkMore('talk-120', 100, valueTax)
        expect(result).toEqual(0.00)
    })
  })
});
