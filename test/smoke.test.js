const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const app = require("../src/server");

describe("devops-lab-api", () => {
  it("exports an express app", () => {
    assert.equal(typeof app, "function");
  });
});
