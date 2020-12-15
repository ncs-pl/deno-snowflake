# deno-snowflake

![Tests](https://github.com/n1c00o/deno-snowflake/workflows/testing/badge.svg?branch=main) [![nest badge](https://nest.land/badge.svg)](https://nest.land/package/deno_snowflake) [![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/deno_snowflake/snowflake.ts)

❄ Deno module to work with Twitter's Snowflake technology

## Explication

Snowflake is, according to the [official and archived repository](https://github.com/twitter-archivesnowflake/tree/snowflake), is a service for generating unique ID numbers at high scale.

### Original Twitter's Snowflake format

[Snowflake repository](https://github.com/twitter-archive/snowflake/tree/snowflake-2010#solution).

Here is a representation of the default format I took from bwmarrin's [repository](https://github.com/bwmarrin/snowflake)

```js
+--------------------------------------------------------------------------+
| 1 Bit Unused | 41 Bit Timestamp |  10 Bit NodeID  |   12 Bit Sequence ID |
+--------------------------------------------------------------------------+
```

A Snowflake ID following the default settings:

- The ID is a **63 bit integer** stored in an int 64.
- The first **41 bits** are used to store the timestamp _(in milliseconds)_, using a [custom epoch](#custom-epoch) _(This provide 69 years of lifetime)_.
- The next **10 bits** contains a Node ID _(a range from 0 to 1023, so 2^10 nodes)_.
- The last **12 bits** corresponds to a sequence number, which rolls over every 4096 (). This sequence is generally used as the increment number, a number incremented for every generated ID on the node.

The default settings allow the generation of 4096 unique IDs every millisecond, per Node ID.

### Custom epoch

The Snowflake's epoch can me modified by the entity using the Snowflake technology, which means you can use your own.

Here a list of some Snowflake's epoch:

- Twitter Epoch _(used by default by the module)_: **1288834974657** -> Nov 04 2010 01:42:54
- Discord Epoch: **1420070400000** -> Jan 01 2015 00:00:00

### Alternative

[sony/sonyflake](https://github.com/sony/sonyflake) is an alternative of Twitter Snowflakes which provide more lifetime _(174 years instead of 69)_, can work on more nodes _(up to 2^16 nodes instead of 2^10)_ but can less ID numbers per millisecond than Snowflakes _(102.4 instead of 2^12 per node)_.

## Getting Started

### Requirements

You need [deno](https://deno.land/) to use this deno module.

### Usage

Import the module to use it.

```ts
import * as Snowflake from 'https://x.nest.land/deno_snowflake@0.0.1/snowflake.ts';
// import * as Snowflake from "https://denopkg.com/n1c00o/deno-snowflake/snowflake.ts";
// import * as Snowflake from "https://deno.land/x/oak/snowflake.ts";
```

## License

The module is licensed under the MIT License. Please read [LICENSE](LICENSE) for more information.

## Contributing

Thanks for wanting to contribute to `deno_snowflake`! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md).
