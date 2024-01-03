interface IProduct {
  name: string;
  price: number;
  account: number;
  buy(): void;
}

let p: IProduct = {
  name: "phone",
  price: 100,
  account: 10,
  buy() {
    console.log("buy");
  },
};

interface IList {
  add(): void;
  remove(): void;
}

class ArrayList implements IList {
  add(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
}

class LinkedList implements IList {
  add(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
}
