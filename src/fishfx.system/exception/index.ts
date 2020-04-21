
export namespace exception {
  export class indexOutOfRangeException extends Error {
    constructor(message?: string) {
      super(`indexOutOfRangeException：${(message ?? "索引超出了数组界限。")}`);
    }
  }

  export class nullReferenceException extends Error {
    constructor(message?: string) {
      super(`nullReferenceException：${(message ?? "未将对象引用到实例。")}`);
    }
  }

  export class formatException extends Error {
    constructor(message?: string) {
      super(`formatException：${(message ?? "输入字符串的格式不正确。")}`);
    }
  }

  export class overflowException extends Error {
    constructor(message?: string) {
      super(`overflowException：${(message ?? "检查上下文中的算术、强制转换或转换操作导致溢出。")}`);
    }
  }

  export class argumentOutOfRangeException extends Error {
    constructor(message?: string) {
      super(`argumentOutOfRangeException：${(message ?? "指定的参数已超出有效值的范围。")}`);
    }
  }

  export class notImplementedException extends Error {
    constructor(message?: string) {
      super(`notImplementedException：${(message ?? "未实现该方法或操作。")}`);
    }
  }
}
