// import rip from "./rip";//rip.jsで定義されたクラスが使用可能





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
//+1増やす
let num = 1;
console.log(num);

num += 1;//変数numに1を加える
console.log(num);

//while文　繰り返し処理
let numb = 1;//変数の定義
while(numb <= 10){//変数numbの値が10以下の時に処理を繰り返す　条件式
    console.log(numb);
    numb += 1;//変数の更新
}
//for文　繰り返し処理
for (let numbe = 1; numbe <= 10; numbe ++){//変数の定義;　条件式;　変数の更新
    console.log(numbe);
}
//応用
for(let nub = 1;nub <= 6;nub ++){
    if(nub %3 === 0){//3の倍数の時だけメッセージが表示される
        console.log("3の倍数です");
    }else{
        console.log(nub);
    }
}

//配列を定数に代入
const fruits = ["apple","banana","orange"];
console.log(fruits);//["apple","banana","orange"]
console.log(fruits[1]);//banana
fruits[1] = "grape";//要素の値の更新
console.log(fruits[1])//grape
for(let i = 0; i < 3; i ++){//iが0-2の間ループする
    console.log(fruits[i]);//変数iを用いて要素を取得
}
for(let i = 0; i< fruits.length; i ++){//lengthに置き換え可能　数字にすると時には大変
    console.log(fruits[i]);
}
console.log(fruits.length);//3

//オブジェクト
const items =[
    {name:"手裏剣",price:300},
    {name:"忍者刀",price:1200}
];
console.log(items[0]);//{name: '手裏剣', price: 300}
console.log(items[1].name);//忍者刀

//応用
const animals = [
    {name:"猫",age:5},
    {name:"犬",age:6},
    {name:"うさぎ",age:3},
    {name:"鳥"},
];
for (let i = 0; i < animals.length; i ++){
    console.log("-------");//-------
    const animal = animals[i];//animal = animals
    console.log(`この子は${animal.name}です`);//名前はanimal.nameです
    if(animal.age === undefined){//ageがない場合
        console.log("年齢は秘密です");
    } else { //ageがある場合
        console.log(`${animal.age}歳です`);//animal.age歳です
    }
}

//応用2
const cafe = {
    name: "yakiカフェ",
    businesshours: { //businesshours　プロパティがオブジェクトになる
        open: "10:00(AM)",
        close: "8:00(PM)",
    },
    menus:["コーヒー","紅茶","緑茶"]//オブジェクトの値に複数の配列も可能
};
console.log(`店名:${cafe.name}`);//店名:yakiカフェ
console.log(`営業時間:${cafe.businesshours.open}から${cafe.businesshours.close}`);//営業時間:10:00(AM)から8:00(PM)
console.log(`おすすめメニューはこちら`);
for (let i = 0; i < cafe.menus.length; i ++){
    console.log(cafe.menus[i]);//"コーヒー","紅茶","緑茶"
}

//関数
const introduce = function(){
    console.log("呼び出し");
};
introduce();//関数の呼び出し

//引数
const introduces = (name,age)=>{
    console.log(`私は${name}です`);//引数は関数の中で定数のように扱える
    console.log(`私は${age}歳です`);//
};
introduces("花子",14);//私は花子です 私は14歳です

//応用
const toMinutes = (hour,minutes)=>{
    return hour * 60 + minutes;//1時間を60分に直す
}
const result = toMinutes(1,45);//1時間45分を分に換算する
console.log(`${result}分`)//105分

//クラス
class Animal{
    constructor(name,age){//コンストラクタ
        this.name = name;
        this.age = age;
    }
    greet(){//メソッド
        console.log("こんにちは");
    }
    info(){
        this.greet();
        console.log(`名前は${this.name}です`);//コンストラクタで設定した値が使える
        console.log(`${this.age}歳です`);
    }
}
const animal = new Animal("レオ",3);//インスタンス
animal.info();

//継承　メソッド
class Animald {
    constructor(age){
        this.age = age;
    }
}

class Dogds extends Animald{ //AnimaldからDogdsに継承
    constructor(age,breed){ //オーバーライド
        super(age); //1行目にコンストラクタをオーバーライドする際必要
        this.breed = breed; //子クラス独自の処理実行
    }
    info(){
        console.log(`犬種は${this.breed}です`); //犬種はシベリアンハスキーです
        const humanAge = dogds.getHumanAge(); //メソッドの戻り値を代入
        console.log(`人間年齢で${humanAge}歳です`); //人間年齢で16歳です
    }
    getHumanAge(){
        return this.age * 8; //メソッドの定義 ×８
    }
}

const dogds = new Dogds(2,"シベリアンハスキー");
dogds.info();


// export default script;//scriptクラスを他のファイルでも使用できるようにする設定

const cat1 = new Cat("ライ",5);
const cat2 = new Cat("リク",9);

export{cat1,cat2};
