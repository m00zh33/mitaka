import { expect } from "chai";
import "mocha";
import { Talos } from "../../lib/searcher";

describe("Talos", () => {
  const subject = new Talos();
  describe("#searchByIP", () => {
    it("should return URL", () => {
      expect(subject.searchByIP("1.1.1.1")).to.equal("https://talosintelligence.com/reputation_center/lookup?search=1.1.1.1");
    });
  });
  describe("#searchByDomain", () => {
    it("should return URL", () => {
      expect(subject.searchByDomain("github.com")).to.equal("https://talosintelligence.com/reputation_center/lookup?search=github.com");
    });
  });
});
