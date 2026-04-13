console.log("Hello world"); //「Hello World]が出力される
console.log(20+26);//「46」が出力される
console.log("20"+"26");//「2026」が出力される
let name = "john";
console.log(name);//johnが代入される
console.log("name");//name　“”を付けるとそのまま
name ="kate";//上書きする場合
console.log(name);//kateに代わる
let number = 2;
console.log(number);//2
number += 3;//numberに３を足すことも可能
console.log(number);//5
const named = "鈴木";
const age = "14";
console.log(named + "さんは" + age + "歳です");//鈴木さんは14歳です
console.log(`${named}さんは${age}歳です`);//鈴木さんは14歳です：テンプレートリテラル使った場合