import { TupleOfLength } from "./shared";

type ArrayToObject<T> = {
  [K in keyof T as K extends `${number}` ? `${K}` : never]: T[K];
};

type TupleIsSmallerThan<Left, Right> =
  ArrayToObject<Left> extends ArrayToObject<Right> ? false : true;

type NumberLessThan<
  Left extends number,
  Right extends number
> = TupleIsSmallerThan<TupleOfLength<Left>, TupleOfLength<Right>>;

type ResultsArrayToObject = [
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
