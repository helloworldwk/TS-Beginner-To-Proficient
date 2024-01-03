// TS类中getter、setter的使用和意义
class People {
  name: string;
  _age!: number;
  address: string;

  constructor(_name: string, _address: string) {
    this.name = _name;
    this.address = _address;
  }

  get age() {
    return this._age;
  }
  set age(val: number) {
    if (val > 10 && val < 128) {
      this._age = val;
    } else {
      throw Error("年龄不在合适的范围内");
    }
  }
  doEat() {}
  doStep() {}
}

const people = new People("张三", "浙江省杭州市");
people.age = 25;
console.log(people);
