import timeSpan from '../time-span';
import { exception } from '..';
export default class dateTime {
  private _tickes: number = 0;
  private _date: Date;

  private _ticksPerMillisecond: number = 1;
  private _ticksPerSecond: number = this._ticksPerMillisecond * 1000;
  private _ticksPerMinute: number = this._ticksPerSecond * 60;
  private _ticksPerHour: number = this._ticksPerMinute * 60;
  private _ticksPerDay: number = this._ticksPerHour * 24;

  private _daysPerYear = 365;
  private _daysPer4Years = this._daysPerYear * 4 + 1;       // 1461
  private _daysPer100Years = this._daysPer4Years * 25 - 1;  // 36524
  private _daysPer400Years = this._daysPer100Years * 4 + 1; // 146097

  private _millisPerSecond = 1000;
  private _millisPerMinute = this._millisPerSecond * 60;
  private _millisPerHour = this._millisPerMinute * 60;
  private _millisPerDay = this._millisPerHour * 24;

  private static readonly _s_daysToMonth365: Array<number> = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  private static readonly _s_daysToMonth366: Array<number> = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];

  constructor(time: string)
  constructor(ticks?: number)
  constructor(time: any, ticks?: any) {
    if (typeof ticks === "undefined") {
      this._date = new Date(time);
      this._tickes = this._date.getTime();
    } else {
      this._tickes = ticks;
      this._date = new Date(ticks);
    }
  }


  private _getDatePart(): { year: number, month: number, day: number } {
    // n = number of days since 1/1/0001
    let n: number = parseInt((this._tickes / this._ticksPerDay).toString());
    // y400 = number of whole 400-year periods since 1/1/0001
    let y400: number = n / this._daysPer400Years;
    // n = day number within 400-year period
    n -= y400 * this._daysPer400Years;
    // y100 = number of whole 100-year periods within 400-year period
    let y100: number = n / this._daysPer100Years;
    // Last 100-year period has an extra day, so decrement result if 4
    if (y100 == 4) y100 = 3;
    // n = day number within 100-year period
    n -= y100 * this._daysPer100Years;
    // y4 = number of whole 4-year periods within 100-year period
    let y4: number = n / this._daysPer4Years;
    // n = day number within 4-year period
    n -= y4 * this._daysPer4Years;
    // y1 = number of whole years within 4-year period
    let y1 = n / this._daysPerYear;
    // Last year has an extra day, so decrement result if 4
    if (y1 == 4) y1 = 3;

    const result = {
      year: 0,
      month: 0,
      day: 0
    }
    // compute year
    const year = y400 * 400 + y100 * 100 + y4 * 4 + y1 + 1 + 1969;
    // n = day number within year
    n -= y1 * this._daysPerYear;
    // dayOfYear = n + 1;
    // Leap year calculation looks different from IsLeapYear since y1, y4,
    // and y100 are relative to year 1, not year 0
    let leapYear: boolean = y1 == 3 && (y4 != 24 || y100 == 3);
    let days: Array<number> = leapYear ? dateTime._s_daysToMonth366 : dateTime._s_daysToMonth365;
    // All months have less than 32 days, so n >> 5 is a good conservative
    // estimate for the month
    let m: number = (n >> 5) + 1;
    // m = 1-based month number
    while (n >= days[m]) m++;
    // compute month and day
    const month = m;
    const day = n - days[m - 1] + 1;
    return {
      year: parseInt(year.toString()),
      day: parseInt(day.toString()),
      month: parseInt(month.toString())
    };
  }

  private _daysInMonth(year: number, month: number): number {
    if (month < 1 || month > 12) throw new exception.argumentOutOfRangeException();
    // IsLeapYear checks the year argument
    const days = dateTime.isLeapYear(year) ? dateTime._s_daysToMonth366 : dateTime._s_daysToMonth365;
    return days[month] - days[month - 1];
  }

  private _dateToTicks(year: number, month: number, day: number) {
    if (year >= 1 && year <= 9999 && month >= 1 && month <= 12) {
      const days: Array<number> = dateTime.isLeapYear(year) ? dateTime._s_daysToMonth366 : dateTime._s_daysToMonth365;
      if (day >= 1 && day <= days[month] - days[month - 1]) {
        const y: number = year - 1;
        const n: number = y * 365 + y / 4 - y / 100 + y / 400 + days[month - 1] + day - 1;
        return n * this._ticksPerDay;
      }
    }
    throw new exception.argumentOutOfRangeException();
  }

  public static get now(): dateTime {
    return new dateTime(new Date().getTime());
  }

  public get tickes(): number {
    return this._tickes;
  }

  public get year(): number {
    return this._date.getFullYear();
  }

  public get month(): number {
    return this._date.getMonth() + 1;
  }

  public get day(): number {
    return this._date.getDate();
  }

  public get hour(): number {
    return this._date.getHours();
  }

  public get minute(): number {
    return this._date.getMinutes();
  }

  public get second(): number {
    return this._date.getSeconds();
  }

  public get millisecond(): number {
    return this._date.getMilliseconds();
  }

  public get dayOfYear(): number {
    throw new exception.notImplementedException();
  }

  public get dayOfWeek(): number {
    return this._date.getDay();
  }

  public addYear(value: number): dateTime {
    return this.addMonths(value * 12);
  }

  public addMonths(value: number): dateTime {
    // 该算法需要进一步优化
    let date = new dateTime(this._tickes);
    for (let i = 0; i < value; i++) {
      const days = dateTime.isLeapYear(date.year) ? dateTime._s_daysToMonth366 : dateTime._s_daysToMonth365;
      date = date.addDays(days[date.month] - days[date.month - 1]);
    }
    return date;
  }

  public addDays(value: number): dateTime {
    return this._add(value, this._millisPerDay);
  }

  public addHours(value: number): dateTime {
    return this._add(value, this._millisPerHour);
  }

  public addMinutes(value: number): dateTime {
    return this._add(value, this._millisPerMinute);
  }

  public addSeconds(value: number): dateTime {
    return this._add(value, this._millisPerSecond);
  }

  public addMilliseconds(value: number): dateTime {
    return this._add(value, 1);
  }

  public addTicks(value: number): dateTime {
    return this.addMilliseconds(value);
  }

  public addYears(value: number): dateTime {
    throw new exception.notImplementedException();
  }

  public static isLeapYear(year: number): boolean {
    if (year < 1970 || year > 9999) {
      throw new exception.argumentOutOfRangeException();
    }
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  }


  public isLeapYear(): boolean {
    return dateTime.isLeapYear(this.year);
  }

  private _add(value: number, scale: number): dateTime {
    const millis = parseInt(value.toString()) * scale;
    return new dateTime(this._tickes + millis);
  }


  /**
   * 当使用 >, <, >=, <= 等关系运算符时，js自动调用toString，并使用返回值进行运算
   */
  toString(format: string): string
  toString(): number
  toString(format?: string): any {
    if (typeof format === "string") {
      return this._date.f_toString(format);
    } else {
      return this._tickes;
    }

  }
}
