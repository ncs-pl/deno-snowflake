import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test({
  name: "This should not throw an error",
  fn(): void {
    assertEquals("hello", "hello");
  },
});
