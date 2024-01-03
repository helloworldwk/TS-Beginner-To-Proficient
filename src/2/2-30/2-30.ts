class DateUtil {
  static dateUtil = new DateUtil();
  private constructor() {
    console.log("创建对象");
  }

  formatDate() {}
}

const dateUtil1 = DateUtil.dateUtil;
const dateUtil2 = DateUtil.dateUtil;
console.log(dateUtil1 === dateUtil2);

export {};
