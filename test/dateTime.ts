import { dateTime } from '../src'

const time1 = new dateTime("2020-4-18 16:40:06");
const time2 = new dateTime("2020-4-18 16:40:05");
console.log(time1 > time2)