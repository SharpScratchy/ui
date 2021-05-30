import cssClassSuffixer from "./cssClassSuffixer";

test("Suffixer allow undefined suffix", () => {
  const className = cssClassSuffixer("button");
  expect(className).toBe("button");
});

test("When suffix is present, should append a css class corresponding to", () => {
  const className = cssClassSuffixer("button", "primary");
  expect(className).toBe("button button--primary");
});
