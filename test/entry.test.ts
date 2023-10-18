import { assert, expect, test } from "vitest";

import { Foo } from "../dist/vite-lib";

test("entry is defined()", () => {
  expect(Foo).toBeDefined();
});
