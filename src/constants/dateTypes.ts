export interface DateInterface {
  id: number;
  name: string;
  key: string;
}

export enum DateEnum {
  Earth_Date = 'earth_date',
  Martian_Sol = 'sol',
}

const DATE_TYPES: Array<DateInterface> = [
  { id: 0, name: 'Martian Sol', key: 'sol' },
  { id: 1, name: 'Earth Date', key: 'earth_date' },
];

export default DATE_TYPES;
