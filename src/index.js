/**
 *  const,let などの宣言
 */

// var val1 = "var";
// console.log(val1);

// // var変数は上書き可能
// val1 = "uwagaki";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "lethensu";
// console.log(val2);

// // let変数は上書き可能
// val2 = "lethensu uwagaki";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "letsaisenngen";

// const val3 = "const hensu";
// console.log(val3);

//const 上書き不可能
// val3 = "uwagaki";

// const val3 = "const saisengen";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "test",
//   age: 31
// };
// val4.name = "aaaa";
// val4.address = "oita";
// console.log(val4);

// constで宣言した配列の中身は変えられる。追加もできる
// constで定義した配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

const name = "mizuho";
const age = "31";

//私の名前はMIZUHOです。年齢は31歳です。と表示したいとき

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です!年齢は${age}です`;
console.log(message2);
