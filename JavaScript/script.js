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
//if文
const numbers = 12;//if文
if(numbers > 10){
    console.log("numbersは10より大きいです");
}
//else
const numberd = 7;//elseを使うとifと違い1つの条件式で様々なパターンが成立する
if(numberd > 10){//false
    console.log("numberdは10より大きいです");
}else{
    console.log("numberdは10以下です");
}
//else if
const numberw = 7;
if(numberw > 10){//false
    console.log("numberwは10より大きいです");
}else if(numberw > 5){//true
    console.log("numberwは5より大きいです");
}else{
    console.log("numberwは5以下です");
}
//&&
const numberq = 31;
if(numberq >= 10 && numberq < 100){//どちらもtrue
    console.log("numberqは2桁です");
}
//switch文
const color = "赤";
switch (color){
    case "赤":
        console.log("ストップ！");//定数colorの値が赤の時に実行される
        break;
    case "黄":
        console.log("要注意");//定数colorの値が黄の時に実行される
        break;
    default:
        console.log("colorの値が正しくありません");//どれとも異なった場合
        break;
}