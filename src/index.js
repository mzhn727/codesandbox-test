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

// const name = "mizuho";
// const age = "31";

// //私の名前はMIZUHOです。年齢は31歳です。と表示したいとき

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です!年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name : "mizuho",
//   age : 31,
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}才です`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}才です`;
// console.log(message2);

// const myProfile = ["mizuho", 100];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// //分割代入　配列で受け取る
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

//“分割” は “破壊的” を意味しません
//これは、項目を変数にコピーすることによって “非構造化(destructurizes)” するため、
//“分割代入(destructuring assignment)” と呼ばれています。 配列自体は変更されません。

/**
 * デフォルト値
 */
//変数のあとにイコールで初期値を設定できる。
// const sayHello = (name = "guest") => console.log(`こんにちは！${name}さん`);
// sayHello("mizuho");

/**
 * スプレッド構文　...
 */
//配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1+num2);
// //sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); //137行目と同じ処理をしている

//配列の値をまとめるとき
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4); //値が書き変わっていない

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); // 10,20,30,40

//イコールで配列をコピーした場合、どういう問題があるか
// const arr8 = arr4;
// arr8[0] = 100;//arr8の1つ目の値を書き換えると
// console.log(arr8);
// console.log(arr4);//参照を引き継いでいるarr4の値も書き変わってしまう

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["中村", "田中", "山村"];
// for (let index = 0; index < nameArr.length; index++){
//     console.log(`${index +1}番目は${nameArr[index]}です`);
// }

/**
 * map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、
 * その結果からなる新しい配列を生成します。
 */

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);//新しい配列を生成する

// nameArr.map((name)=> console.log(name));//配列をループして処理

//mapの2つ目の引数には順番が入ってくる
// nameArr.map((name, index)=> console.log(`${index +1}番目は${name}です`));

// const numArr = [1, 2, 3, 4,5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 0; //return文で条件式を書いて一致した値だけ取り出す
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "中村"){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子 if else を一行で表現できる
 */
//ある条件　？　条件trueの時　：　条件がforseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formateedNum = typeof num === "number" ? num.toLocaleString() : "数値を設定してください";
// console.log(formateedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！' : '許容範囲内です';
// }
// console.log(checkSum(50,30));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("１か２はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("１か２はtrueになります");
// }

// ||は左側がfalseなら、右側を返す（JSではnullはfalseにあたる）
// 左側がtrueなら、左側を返す
const num = 100;
const fee = num || " 金額未設定です";
console.log(fee);

// && は左側がtrueなら、右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);

//ReactのJSXで使うよ↑
