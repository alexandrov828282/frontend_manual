let separatorSymbols = [
    "&lt;",
    "&gt;",
    "//",
    "\\",
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
    "|",
    " ",
    ".",
    "<",
    ">"
];

let currentWord = "";
let newHtmlString = [];

let allHighlightElems = {
    js: {
        Method: ["concat"],
        Object: ["object1", "object2", "object3"],
        Property: ["property1", "property2", "property3"],
    },

    html: {
        Tag: ["br", "div", "h1"],
    },
};

//уйдем от разделителей, будем встречать ключевые слова в объекте allHighlightElems и красить их, 
//важно распологать элементы в объекте от самых больших по длинне к самым маленьким

let htmlTagElems = document.getElementsByClassName("highlight");
let htmlText = '';

for (let htmlTagElem of htmlTagElems) {

    htmlText = htmlTagElem.innerHTML;
    let numSymbol = 0;

    let flag = false;
    while(numSymbol < htmlText.length){
        flag = false;
        for (let separatorSymbol of separatorSymbols) {

            w(`строка = ${htmlText},\n\nnumSymbol = ${numSymbol} = ${htmlText.substr(numSymbol, separatorSymbol.length)}  separatorSymbol = ${separatorSymbol}`);
            
            if (numSymbol+separatorSymbol.length > htmlText.length){
                w(`сработало условие - длинна разделителя больше, чем остаток html строки 
                numSymbol+separatorSymbol.length > htmlText.length : 
                ${numSymbol}+${separatorSymbol.length} > ${htmlText.length}`);
                continue;
            } 

            if(htmlText.substr(numSymbol, separatorSymbol.length) == separatorSymbol){
                w(`совпадение: ${separatorSymbol}`);
                numSymbol += separatorSymbol.length;
                w(`следующий символ: numSymbol = ${numSymbol} = ${htmlText.substr(numSymbol, 1)}`);
                flag = true;
                break;
            }
        }
        
        //если отработала итерация в условии выше, то эту терацию делать не надо
        if (!flag) {
            numSymbol++;
            w(`следующий символ: numSymbol = ${numSymbol} = ${htmlText.substr(numSymbol, 1)}`);
        }

    }

}


//встретился ли разделитель
// separatorOn = (str) => {
//     for (let separatorSymbol of separatorSymbols) {
//         if (str == separatorSymbol) return true;
//     }
//     return false;
// };

// for (let htmlTagElem of htmlTagElems) {
//     let htmlSymbols = htmlTagElem.innerHTML.split("");
//     w(htmlSymbols);
//     for (let htmlSymbol of htmlSymbols) {
//         if (separatorOn(htmlSymbol)) {

//             for (let elemTechnology in allHighlightElems) {

//                 for (let elemSection in allHighlightElems[elemTechnology]) {

//                     for (let elem of allHighlightElems[elemTechnology][elemSection]) {

//                         if (currentWord == elem){
//                             currentWord = `<span class="${elemTechnology}${elemSection}">${currentWord}</span>`;
//                         }
//                     }
//                 }
//             }

//             currentWord += htmlSymbol;
//             newHtmlString.push(currentWord);
//             currentWord = '';
//         }
//         else{
//             currentWord += htmlSymbol;
//         }
//     }

//     htmlTagElem.innerHTML = newHtmlString.join('');
//     newHtmlString.length = 0;
// }

function w(str) {
    console.log(str);
}
