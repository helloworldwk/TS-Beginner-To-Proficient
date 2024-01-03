function info(username: string, age: number): number {
  return 3;
}

const getInfo = (username: string, age: number) => {
  return 3;
};

type TypeInfo = (name: string, age: number) => number;
const getInfo2: TypeInfo = (username, age) => {
  return 3;
};

// 函数结构
type TypeStudent = { username: string; age: number; phone: string };
const student: TypeStudent = {
  username: "wangwu",
  age: 18,
  phone: "1000000",
};

const getNameAge = ({ username, age }: TypeStudent) => {
  console.log("username:" + username, " age:" + age);
};
getNameAge(student);

const getNamePhone = ({ username, phone }: TypeStudent) => {
  console.log("username:" + username, " phone:" + phone);
};
getNamePhone(student);
