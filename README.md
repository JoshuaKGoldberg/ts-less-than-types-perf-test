# ts-less-than-types-perf-test

Quick little experiment for analyzing TypeScript type system performance on two different versions of a `NumberLessThan` type.

Both versions take in two numbers and convert each of them to a tuple of that size.
After that, to compute which is a smaller tuple:

- `src/array-to-object.ts`: Converts each tuple to an object and checks object assignability
- `src/recursive-both-ways.ts`: Recursively iterates through each tuple until one is empty
