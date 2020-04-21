import dateTime from '../date-time';

declare global {

  interface Date {
    f_toString(format?: string): string

    f_toDateTime(): dateTime
  }
}

Date.prototype.f_toString = function (format?: string): string {
  if (format === undefined)
    return this.toString();

  let result = format;

  const timeReplaceKey: any = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "H+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3)
  };

  if (/(y+)/.test(result)) {
    result = result.replace(RegExp.$1, this.getFullYear().toString().substr(4 - RegExp.$1.length));
  }
  Object.keys(timeReplaceKey).forEach(k => {
    if (new RegExp(`(${k})`).test(result)) {
      let replaceStr = "";
      if (RegExp.$1.length === 1) {
        replaceStr = timeReplaceKey[k];
      } else {
        replaceStr = `00${timeReplaceKey[k]}`.substr(timeReplaceKey[k].toString().length);
      }
      result = result.replace(RegExp.$1, replaceStr);
    }
  });

  return result;
}

Date.prototype.f_toDateTime = function (): dateTime {
  return new dateTime(this.getTime());
}
