// 数字枚举
enum Week {
  Monday = 1,
  Tuesday,
  Wensday,
  Thirsday,
  Friday,
  Sarturday,
  Sunday,
}

console.log(Week.Monday);
console.log(Week["Monday"]);

console.log(Week[3]);
console.log(Week[5]);

// 字符串枚举
enum WeekEnd {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wensday = "Wensday",
  Thrisday = "Thrisday",
  Friday = "Friday",
  Sarturday = "Sarturday",
  Sunday = "Sunday",
}

export {};
