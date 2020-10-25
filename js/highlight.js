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

let htmlTagElems = document.getElementsByClassName("highlight");
let htmlText = '';

for (let htmlTagElem of htmlTagElems) {

    htmlText = htmlTagElem.innerHTML;
    let numSymbol = 0;
    while(numSymbol < htmlText.length){

        for (let separatorSymbol of separatorSymbols) {
            
            if (numSymbol+separatorSymbol.length > htmlText.length) continue;
            
            if(htmlText.substr(numSymbol, separatorSymbol.length) == separatorSymbol){
                w(separatorSymbol);
                numSymbol += separatorSymbol.length;
                break;
            }
        }
        
        numSymbol++;
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
