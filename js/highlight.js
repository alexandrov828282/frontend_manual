let elems = document.getElementsByClassName('highlight');
let str = elem.innerHTML;

//массив разделителей
let separator = ['~','`','!','@','"','#','$',';','%','^',':','?','*','(',')','-','+','*','/','=','\\','|'];

//массив методов
let method = [];


// Method = ['concat'];

// for (const elem of elems) {
//     let str = elem.innerHTML;
//     console.log(str);
//     let currentWord = '';
//     resArr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != ' ' && 
//             str[i] != '(' && 
//             str[i] != ')' && 
//             str[i] != '[' && 
//             str[i] != ']' && 
//             str[i] != '{' && 
//             str[i] != '}' && 
//             str[i] != '.' &&
//             str[i] != ',' &&
//             str[i] != ';' &&
//             str[i] != '"' &&
//             str[i] != "'" &&
//             str[i] != '`' &&
//             str[i] != '+' &&
//             str[i] != '-' &&
//             str[i] != "*" &&
//             str[i] != '/'){
//                 currentWord += str[i];
//             }
//         else{
//             for (const elemMethod of Method) {
//                 if (elemMethod == currentWord){
//                     // resArr.push(currentWord);
//                     let newelem = document.createElement('span');
//                     newelem.className = "highlight";
//                     newelem.className = "hlMethod";
//                     newelem.innerHTML = elemMethod;
//                 }
//                 else{
//                     document.createElement(tag)
//                 }
                
                
//                 //здесь надо добавить символ разделитель на котором остановился цикл
//             }
//         }
//     }
// }









