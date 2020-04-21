import timeSpan from '../time-span';
import { exception } from '..';
export default class dateTime {
  private _tickes: number = 0;

  constructor(time: string)
  constructor(ticks?: number)
  constructor(time: any, ticks?: any) {
    if (typeof ticks === "undefined") {
      this._tickes = new Date(time).getTime();
    } else {
      this._tickes = ticks;
    }
  }

  public static get now(): dateTime {
    return new dateTime(new Date().getTime());
  }

  public get tickes(): number {
    return this._tickes;
  }

  public get year(): number {
    throw new exception.notImplementedException();
  }

  public get month(): number {
    throw new exception.notImplementedException();
  }

  public get day(): number {
    throw new exception.notImplementedException();
  }

  public get hour(): number {
    throw new exception.notImplementedException();
  }

  public get minute(): number {
    throw new exception.notImplementedException();
  }

  public get second(): number {
    throw new exception.notImplementedException();
  }

  public get millisecond(): number {
    throw new exception.notImplementedException();
  }

  public get dayOfYear(): number {
    throw new exception.notImplementedException();
  }

  public get dayOfWeek(): number {
    throw new exception.notImplementedException();
  }

  public addDays(value: number) {
    throw new exception.notImplementedException();
  }

  public addHours(value: number) {
    throw new exception.notImplementedException();
  }

  public addMilliseconds(value: number) {
    throw new exception.notImplementedException();
  }

  public addMinutes(value: number) {
    throw new exception.notImplementedException();
  }

  public addMonths(value: number) {
    throw new exception.notImplementedException();
  }

  public addSeconds(value: number) {
    throw new exception.notImplementedException();
  }

  public addTicks(value: number) {
    throw new exception.notImplementedException();
  }

  public addYears(value: number) {
    throw new exception.notImplementedException();
  }

  public static isLeapYear(year: number): boolean {
    if (year < 1970 || year > 9999) {
      throw new exception.argumentOutOfRangeException();
    }
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  }


  public isLeapYear(): boolean {
    throw new exception.notImplementedException();
  }

  /**
   * 当使用 >, <, >=, <= 等关系运算符时，js自动调用toString，并使用返回值进行运算
   */
  toString(): number {
    return this._tickes;
  }
}
