// 根类型
const data: {} = 213;
const data1: Object = false;

// 联合类型
let data3: string | number = "123";

// 交叉类型
type Obj1 = { username: string };
type Obj2 = { age: number };
let data4: Obj1 & Obj2 = { username: "coderwhy", age: 18 };

// 字面量数据类型
type increaseFlag = 0 | 1;
const isStartUp = (increase: increaseFlag) => {
  if (increase) {
    console.log("open");
  } else {
    console.log("close");
  }
};
isStartUp(1);
