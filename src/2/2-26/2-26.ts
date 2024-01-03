// 可变元祖解构 元祖标签(username_ 只是一个标签作用，无其他作用)
const [username, age, address, ...rest]: [
  username_: string,
  age_: number,
  address_: string,
  ...rest_: any[]
] = ["张三", 18, "浙江省杭州市", "13k", "977777777", 666];
console.log("rest", rest);
