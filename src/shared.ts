export type TupleOfLength<
  Length extends number,
  Base extends unknown[] = []
> = Base extends { length: Length }
  ? Base
  : TupleOfLength<Length, [...Base, unknown]>;
