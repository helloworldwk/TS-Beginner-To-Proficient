interface IFullName {
  firstName: string;
  lastName: string;
  age: number;
  singName?: string;
  [prop: string]: any;
}

const goddass: IFullName = {
  firstName: "邱",
  lastName: "淑贞",
  age: 18,
  singName: "赌王",
  dance: "芭蕾",
  [Symbol("aaa")]: 12,
  100: "asd",
  true: 10,
};
