// 変数numの値に応じて出力結果を出し分けできる、if文による条件式を記述したコードを提出
//変数numが3の倍数の場合： “3の倍数です”
//変数numが5の倍数の場合： “5の倍数です”
//変数numが3と5の倍数の場合： “3と5の倍数です”
//それ以外の場合： 変数numの値を出力する

let num = Math.floor(Math.random() * 20) + 1; //1-19の適当な整数num

if(num % 3 == 0 && num % 5 == 0) {
  console.log(num); //ランダムな整数出力確認用
  console.log('3と5の倍数です');
}
else if (num % 3 == 0) {
  console.log(num); //ランダムな整数出力確認用
  console.log('3の倍数です');
}
else if(num % 5 == 0) {
  console.log(num); //ランダムな整数出力確認用
  console.log('5の倍数です');
}
else {
  console.log(num);
}
