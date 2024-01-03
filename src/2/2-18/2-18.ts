// null和undefined
let str: string | undefined = undefined;
console.log("str", str);

function fn(data?: string) {
  if (data) {
    data.toString();
  }
}
fn();

// any、unknown、undefined可以接受undefined
// any、unknown、null可以接受null
let data: unknown = null;

export {};
