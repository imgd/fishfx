import { dateTime } from '../src/fishfx.system'

const time1 = new dateTime("2020-4-18 16:40:06.520");

console.log("year", time1.year);
console.log("month", time1.month);
console.log("day", time1.day);
console.log("hour", time1.hour);
console.log("minute", time1.minute);
console.log("second", time1.second);
console.log("millisecond", time1.millisecond);

const addMillisTime = time1.addMilliseconds(1000);
console.log("addMillisTime", addMillisTime.toString("yyyy-MM-dd HH:mm:ss f"));

const addSecondTime = time1.addSeconds(61);
console.log("addSecondTime", addSecondTime.toString("yyyy-MM-dd HH:mm:ss f"));

const addMinutesTime = time1.addMinutes(1);
console.log("addMinutesTime", addMinutesTime.toString("yyyy-MM-dd HH:mm:ss f"));

const time2 = new dateTime("2019-12-5 12:12:12");
console.log("addMonths", time2.addMonths(2).toString("yyyy-MM-dd HH:mm:ss f"));

const time3 = new dateTime("2019-12-5 12:12:12");
console.log("addYear", time3.addYear(2).toString("yyyy-MM-dd HH:mm:ss f"));