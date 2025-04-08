// task 1 
// ამოცანა დაწერეთ ფუნქცია 
// რომელსაც გადასცემ ორ რიცხვს (m,n) 
// და დააბრუნებს რომელიც მეტია იმ რიცხვს ,
//  თუ რიცხვები ტოლია დააბრუნებს 0 -ს

/* function whoisgreater (m,n){
    if (m>n){
        return m;
    }else if (n>m){
        return n;
    }else{
        return 0;
    }
}
console.log(whoisgreater(5,3)); */

//task 2 
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს),
//  დააბრუნეთ რიცხვების ჯამი


/*function sumNumbers (a,b){
    return a+b ;
}

console.log(sumNumbers(6,7)) */


// task 3 
// დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს 
// ( ფუნქციას არ აქვს პარამეტრი)

/*function fullname() {
 console.log("Nino Osadze");
}
fullname(); */

//task 4 

//  დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname 
// დააბრუნეთ სრული სახელი და დაბეჭდეთ 
// ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
  
/* function fullname(firstname,lastname){
    return firstname + " " + lastname;
}
console.log(fullname("nino","osadze")); */ 

// task 5 
//  Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n)
//  და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი
//  ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა,
//  დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას.
//  Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
  
// დაუშვათ n = 3. 3*(3-1)*3(3-2) ან 1 * 2(1+1) * 3(2+1) ანუ 1-ს ვამრავლებთ იქამდე
// სანამ ნ-ის მნიშვნელობას არ მიიღებს


/* function factorial(n) {
    let number = 1;
    for (let i = 1; i <= n; i++) {
      number *= i;
    }
    return number;
  }
  
  console.log(factorial(3)); */

// task 6 
// Შემდეგი დავალებებისთვის გამოიყენეთ 
// :ობიექტი student - რომელსაც აქვს შემდეგი
//  properties: firstName, lastName, age, scores
//  (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2)
//  და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს 
// ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 



const student = {
    firstName : "Nino",
    lastName : "osadze",
    age : 70,
    score: [4,7,5,3,2],
// ესეთი ფუნქცია უკვე დაწერილი მქონდა და პირდაპირ გადმოვაკოპირებ 
    fullname: function(){
    return student.firstName + " " +  student.lastName;

}

}
// დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

/* console.log(student.fullname()); */ 

//task 7 
// Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს 


// ეს იგივე პრინციპია რაც  factorial(n)
 /* function sumscores(){
    let number = 0;
    for (let i = 0;i<student.score.length;i++ ){
        number += student.score[i];
    }
    return number; 
  }
console.log(sumscores()); */ 

//task 8 
 // დაბეჭდეთ სტუდენტის სახელი და ასაკი
 console.log(student.firstName,student.age);