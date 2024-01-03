// TS类的方法拦截器实践
class People {
  name: string;
  age: number;
  address: string;

  constructor(_name: string, _age: number, _address: string) {
    this.name = _name;
    this.age = _age;
    this.address = _address;
  }

  doEat(who: string, where: string) {
    console.log(`who: ${who}, where: ${where}`);
  }

  doStep() {}
}

class StringUtil {
  static trimSpace(str: string) {
    return str.replace(/\s+/g, "");
  }
}

const dateProp1 = Object.getOwnPropertyDescriptor(People.prototype, "doEat");

const targetMethod = dateProp1!.value;
dateProp1!.value = function (...args: any[]) {
  // 去除字符串中的空格
  args = args.map((item) =>
    typeof item === "string" ? StringUtil.trimSpace(item) : item
  );
  console.log("前置拦截...");
  targetMethod.apply(this, args);
  console.log("后置拦截", this);
};

Object.defineProperty(People.prototype, "doEat", dateProp1!);

let p = new People("peter", 25, "公主坟");
p.doEat("张 三", "王 家 路");

export {};
