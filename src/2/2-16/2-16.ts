// 索引访问类型
const APP = ["TaoBao", "Tmall", "Alipay"] as const;
type AppType = (typeof APP)[number];

function getPhoto(app: string) {
  console.log("app", app);
}

const symid = Symbol("productno");
interface Product {
  [symid]: number;
  name: string;
  price: number;
  account: number;
  buy(): string;
}

type A = Product["name"];
type B = Product["account" | "buy" | "name"];
type S = Product[typeof symid];

type PKeys = keyof Product; // "name" | "price" | "account" | "buy" | typeof symid
let pKeys: PKeys = "account";

// type AllKeys<T> = T extends any ? T : never;
// type PKeys2 = AllKeys<keyof Product>;
