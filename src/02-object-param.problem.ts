import { type } from "os";
import { expect, it } from "vitest";

// We can create a type
// type AddTwoNumbersArgs = {first: number; Second: number}

// Also we can use an interface
// Interface is almost exclusively used with objects.
interface AddTwoNumbersArgs {
  first: number;
  second: number;
}

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
