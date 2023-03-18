let js = 'Wonderful';
//if (js === 'Wonderful') alert('JS is wonderful');

let x = 40 + 23 + 35;
console.log(x);

/*------------------------------------>Data Types<------------------------------------*/

/*
    Primitive Data Types
1. Number; Floating numbers -> 23
2. String; Sequence of Characters -> 'Some Texts',"Some Texts"
3. Boolean; Logical value types -> true, false
4. Undefined; Değişkeni tanımlanmış ancak değer ataması yapılmamış data tipi anlamına gelir
5. Null; boş değeri ifade eder
6. Symbol(ES2015); Unique ve değiştirilemez değer alan data tipidir. İlk olarak ES2015 de tanıtılmıştır. Şuan kullanılabilir değildir.
7. BigInt(ES2020); Number data tipi ile ifade edilemeyecek tutulamayacak değer tipleri için kullanılır. İlk olarak ES2015 de tanıtılmıştır.


JS' de değişken oluştururken, ilgili değişkenin tipini belirtmiyoruz. Otomatik kendisi algılıyor. Aynı değişkene daha sonra farklı data tiplerinden atama yapabiliriz.
*/

let variableType = true;

console.log(typeof variableType);

variableType = 'Some Text';

console.log(typeof variableType);

//undefined type

let year;
console.log(year);
console.log(typeof year);
year = 1987;
console.log(year);
console.log(typeof year);
year = null;
console.log(year);
console.log(typeof year);


/*------------------------------------>Variable Types<------------------------------------*/

/*
    let, const, var
1. let; kod boyunca değişik değerler alabilecek(değeri değiştirilebilecek) değişkenler için kullanılır. Blok odaklıdır.
2. const; sabit değer alabilen değişkenleri tanımlamak için kullanırız. İlk değer atamadan sonra farklı bir atama yapılamaz.
3. var; kullanımı let ile benzerdir ancak farklı olarak, method odaklıdır.
 */


let dynamicValue = 36;
dynamicValue = 'Cihan Aslan';

const constantValue = 'Kocaeli';
constantValue = 'İzmir'; //mümkün değildir.
console.log('---------');
var varDegisken = 'Pilot';
console.log(typeof varDegisken);
varDegisken = 13;
console.log(typeof varDegisken);

/*------------------------------------>Basic Operators<------------------------------------*/

// Math operators

/*
'+' -> toplama operatörü. String ifadelerde concatination için de kullanılır.
'-' -> çıkarma operatörü
'/' -> bölme operatörü
'*' -> çarpma operatörü
'**' -> power(üs) operatörü. '2**3' -> 2*2*2
*/

// Assignment operators

/*
'+=' -> soldaki değişken ile sağ taraftaki değeri toplar ve soldaki değişkene atar. x += 19 -> x = x+19
'-=' -> soldaki değişkenden sağ taraftaki değeri çıkarır ve soldaki değişkene atar. x -= 19 -> x = x-19
'*=' -> soldaki değişken ile sağ taraftaki değeri çarpar ve soldaki değişkene atar. x *= 19 -> x = x*19
'/=' -> soldaki değişkeni sağ taraftaki değere böler ve soldaki değişkene atar. x /= 19 -> x = x/19
'x++' -> add 1 after
'++x' -> add 1 before
*/


// Comparison operators

/*
'>' '<' '>=' '<='
*/


/*------------------------------------>Operator Precedence<------------------------------------*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
