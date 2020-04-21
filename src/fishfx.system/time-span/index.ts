import { dateTime } from '..';

/**
 * timeSpan表示持续时间。
 */
export default class timeSpan {
  /**
   * @param biggerTime 较大的时间
   * @param smallerTime 较小的时间
   */
  constructor(biggerTime: dateTime, smallerTime: dateTime) {
    this._biggerTime = biggerTime;
    this._smallerTime = smallerTime;
    this._ticks = this._biggerTime.tickes - this._smallerTime.tickes;
  }

  private _biggerTime: dateTime;
  private _smallerTime: dateTime;
  private _ticks: number;

  /**
   * js中，ticks实质上就是毫秒数。
   */
  public get ticks(): number {
    return this._ticks;
  }

  /**
   * 持续总天数
   */
  public get days(): number {
    return Math.round(this._ticks / 1000 / 60 / 60 / 24);
  }

  /**
   * 持续的小时数，注意：不是总的小时数。
   */
  public get hours(): number {
    return Math.round((this._ticks / 1000 / 60 / 60) % 24);
  }

  /**
   * 持续的分钟，注意：不是总的分钟数。
   */
  public get minutes(): number {
    return Math.round((this._ticks / 1000 / 60) % 60);
  }

  /**
   * 持续的秒，注意：不是总的秒数。
   */
  public get seconds(): number {
    return Math.round((this._ticks / 1000) % 60);
  }

  /**
   * 持续的毫秒数，注意：不是总的毫秒时数。
   */
  public get milliseconds(): number {
    return Math.round(this._ticks % 1000);
  }


  /**
   * 持续的总天数
   */
  public get totalDays(): number {
    return Math.round(this._ticks / 1000 / 60 / 60 / 24);
  }

  /**
   * 持续的总小时数
   */
  public get totalHours(): number {
    return Math.round(this._ticks / 1000 / 60 / 60);
  }

  /**
   * 持续的总分钟数
   */
  public get totalMinutes(): number {
    return Math.round(this._ticks / 1000 / 60);
  }

  /**
   * 持续的总秒数
   */
  public get totalSeconds(): number {
    return Math.round(this._ticks / 1000);
  }

  /**
   * 持续的总毫秒数
   */
  public get totalMilliseconds(): number {
    if (this._ticks > Number.MAX_VALUE)
      return Number.MAX_VALUE;

    if (this._ticks < Number.MIN_VALUE)
      return Number.MIN_VALUE;

    return this._ticks;
  }

}