import { TupleOfLength } from "./shared";

type TupleSmallerThan<
  Left extends unknown[],
  Right extends unknown[]
> = Right extends { length: 0 }
  ? false
  : Left extends { length: 0 }
  ? true
  : TupleSmallerThan<PopFirst<Left>, PopFirst<Right>>;

type PopFirst<T extends unknown[]> = T extends [infer _, ...infer Rest]
  ? Rest
  : never;

type NumberLessThan<
  Left extends number,
  Right extends number
> = TupleSmallerThan<TupleOfLength<Left>, TupleOfLength<Right>>;

type ResultsRecursiveBothWays = [
  NumberLessThan<500, 520>,
  NumberLessThan<501, 520>,
  NumberLessThan<502, 520>,
  NumberLessThan<503, 520>,
  NumberLessThan<504, 520>,
  NumberLessThan<505, 520>,
  NumberLessThan<506, 520>,
  NumberLessThan<507, 520>,
  NumberLessThan<508, 520>,
  NumberLessThan<509, 520>,
  NumberLessThan<510, 520>,
  NumberLessThan<511, 520>,
  NumberLessThan<512, 520>,
  NumberLessThan<513, 520>,
  NumberLessThan<514, 520>,
  NumberLessThan<515, 520>,
  NumberLessThan<516, 520>,
  NumberLessThan<517, 520>,
  NumberLessThan<518, 520>,
  NumberLessThan<519, 520>,
  NumberLessThan<520, 520>,
  NumberLessThan<521, 520>,
  NumberLessThan<522, 520>,
  NumberLessThan<523, 520>,
  NumberLessThan<524, 520>,
  NumberLessThan<525, 520>,
  NumberLessThan<526, 520>,
  NumberLessThan<527, 520>,
  NumberLessThan<528, 520>,
  NumberLessThan<529, 520>,
  NumberLessThan<530, 520>
];
