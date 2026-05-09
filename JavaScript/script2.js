// import chalk from "chalk";

// console.log(chalk.yellow("Hello World"));

// import readlineSync from "readline-sync";

// readlineSync.question("名前を入力してください");

//push
const numbers = [1,2,3,4,5,6,];
console.log(numbers); //1,2,3,4,5,6,
numbers.push(8); //配列に新しい要素を追加する 8
console.log(numbers); //1,2,3,4,5,6,8,
//forEach
numbers.forEach((number)=>{ //アロー関数　
    [console.log(number)] //配列の中の要素を１つずつ取り出して同じ処理をする
}); //計7回引数に代入され、関数の処理を実行している 
//find
const foundNumber = numbers.find((number)=>{
    return number > 1; //条件に合う最初の要素を返す為、１より大きい２を取り出す
});
console.log(foundNumber); //2
//filter
const filteredNumbers = numbers.filter((number)=>{ //コールバック関数　条件に合う要素が全て取り出し新しい配列の中に入る　
    return number % 2 === 0; //2で割り切れる数字　
});
console.log(filteredNumbers); //2,4,6,8
//map
const doubledNumbers = numbers.map((number)=>{ //配列の全ての要素に対して同じ処理を行い新しい配列を作る
    return number * 2; //全ての数字が２倍された新しい配列を作成
});
console.log(doubledNumbers); //2,4,6,8,10,12,16

//コールバック関数
const print = ()=>{
    console.log("朝です");
};
const call =(callback)=>{ //２，printをcallbackに代入
    console.log("おはようございます。");
    callback(); //3,関数callbackを呼び出す（）を付ける
};
call(print); //1、引数にprintを渡し、関数callを呼び出す　（）を付けない
call(()=>{
    console.log("元気です"); //引数で関数を定義し関数callを呼び出す
});