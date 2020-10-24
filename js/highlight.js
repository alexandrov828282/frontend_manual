//массив разделителей
// let indexNoMarkerBegin = 0;
// let separator = [
//     "~",
//     "`",
//     "!",
//     "@",
//     '"',
//     "#",
//     "$",
//     ";",
//     "%",
//     "^",
//     ":",
//     "?",
//     "*",
//     "(",
//     ")",
//     "-",
//     "+",
//     "*",
//     "/",
//     "=",
//     "\\",
//     "|",
// ];

// //массив методов
// let method = [".concat(", ".forEach(", ".find("];

// // забираем все элементы с классом highlight
// let elems = document.getElementsByClassName("highlight");


// for (const elem of elems) {  //берем один элемент из пачки тегов с классом highlight

//     tempstr = elem.innerHTML; //содержимое тега

//     indexNoMarkerBegin = 0;

//     for (let elemMethod of method) {

//         let indexMarkerBegin = tempstr.indexOf(elemMethod);

//         if (indexMarkerBegin != 0) {


        
//         }
//     }
// }



// for (const elem of elems) {
//     let resStr = '';
//     //берем один элемент из пачки тегов с классом highlight
//     tempstr = elem.innerHTML; //берем содержимое тега
//     for (let i = 0; i < tempstr.length; i++) {//перебераем содержимое посимвольно
//         for (let j = 0; j < separator.length; j++) {//перебор разделителей
//             if (tempstr[i] == separator[j]) {

//             }
//             else{
//                 resStr += tempstr[i];
//                 j = separator.length;
//             }
//         }
//         elems[i] = separator[j];
//     }
// }



// let method = '.concat('

// let elems = document.getElementsByClassName("highlight");

// let elem = elems[0];

// let elemText = elem.innerHTML;

// indexMarkBegin = elemText.indexOf(method, indexOrdinaryBegin);

// indexOrdinaryEnd = indexMarkBegin;

// finalStr += elemText.substring(indexOrdinaryBegin, indexOrdinaryEnd);

// selectStr = elemText.substr(indexMarkBegin, method.length);

// finalStr += ' <span class="method">'+selectStr+'</span>'

// indexOrdinaryBegin = indexMarkEnd;

// indexMarkBegin = elemText.indexOf(method, indexOrdinaryBegin);

// console.log(finalStr);

// let indexMarkBegin = 0;
// let indexMarkEnd = 0;
// let indexOrdinaryBegin = 0;
// let indexOrdinaryEnd = 0;
// let finalStr = '';
// let selectStr = '';


// jsMethodElems = ['.method1(','.method2(','.method3('];


// //подучим коллекцию тегов с классом highlight
// let htmlTagElems = document.getElementsByClassName("highlight");

// //берем каждый тег из коллекции
// for (const htmlTagElem of htmlTagElems) {
    
//     //берем каждый метод из списка методов
//     for (const jsMethodElem of jsMethodElems) {
        
//         //находим этот иетод в html тексте, определяем индекс начала
//         indexMarkBegin = htmlTagElem.indexOf(jsMethodElem, indexOrdinaryBegin);

//         //если нашлось совпадение
//         if (indexMarkBegin != -1){

//             //переписываем текст, который идёт до искомого, без изменений
//             finalStr += elemText.substring(indexOrdinaryBegin, indexOrdinaryEnd);

//         }

        

//         //

//     }


// }


let separator = [
    "~",
    "`",
    "!",
    "@",
    '"',
    "#",
    "$",
    ";",
    "%",
    "^",
    ":",
    "?",
    "*",
    "(",
    ")",
    "-",
    "+",
    "*",
    "/",
    "=",
    "\\",
    "|",
];

let jsMethodElems = ['.method1(','.method2(','.method3('];

let indexMarkBegin = 0;
let indexMarkEnd = 0;
let indexOrdinaryBegin = 0;
let indexOrdinaryEnd = 0;
let finalStr = '';
let selectStr = '';

let htmlTagElems = document.getElementsByClassName("highlight");

for (let htmlTagElem of htmlTagElems) {
    temptext = htmlTagElem.innerHTML;
    let htmlSymbols = temptext.split('');
    for (let htmlSymbol of htmlSymbols) {
        for (let separatorSymbol of separatorSymbols) {
            if (htmlSymbol != separatorSymbol){
                
            }
        }
    }
}



