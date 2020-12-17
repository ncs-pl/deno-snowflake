import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { generate, melt, MeltedSnowflake, TWITTER_EPOCH } from "./snowflake.ts";

Deno.test({
  // Information comes from https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-show-id
  // The tweet with ID 1050118621198921728 has a timestamp that should be 1539202764211

  name:
    "Get information about Snowflake ID `1050118621198921728` with Twitter Epoch (`1288834974657`)",
  fn(): void {
    const melted: MeltedSnowflake = melt("1050118621198921728", TWITTER_EPOCH);
    assertEquals(String(melted.timestamp), "1539202764211");
  },
});

Deno.test({
  name: "Generate a Snowflake ID",
  fn(): void {
    const timestamp: number = Date.now();
    const snowflakeID = generate({
      timestamp,
      epoch: TWITTER_EPOCH,
      processID: 0,
      workerID: 1,
    });
    const meltedSnowflakeID: MeltedSnowflake = melt(snowflakeID, TWITTER_EPOCH);
    assertEquals(String(meltedSnowflakeID.timestamp), String(timestamp));
  },
});
