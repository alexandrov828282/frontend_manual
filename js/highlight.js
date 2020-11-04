// let separatorSymbols = [
//     "&lt;",
//     "&gt;",
//     "//",
//     "\\",
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
//     "|",
//     " ",
//     ".",
//     "<",
//     ">"
// ];

// let currentWord = "";

// let a = 0;
// let newHtmlString = [];
// let htmlText = '';
// let numSymbol = 0;
// let currentWord = '';

// debugger;

let allHighlightElems = {
    js: {
        Method: ['concat'],
        Object: ['object1', 'object2', 'object3'],
        Property: ['property1', 'property2', 'property3'],
    },

    html: {
        Tag: ['<br>', '<div>', '<h1>', '</a>', '<a', 'href'],
    },
};

//=======================================
// w(allHighlightElems.html.Tag);
// w(allHighlightElems.html.Tag.length);
// w(allHighlightElems.html.Tag.constructor === Array);
// debugger;
//=======================================

let tmpStr = '';

allHighlightElems.html.Tag.forEach((elems, index) => {
    for (const elem of elems) {
        if (elem == '<') tmpStr += '&lt;';
        else if (elem == '>') tmpStr += '&gt;';
        else tmpStr += elem;
    }
    allHighlightElems.html.Tag[index] = tmpStr;
    tmpStr = '';
});

debugger;

llHighlightElems.html.Tag = newArr;

let htmlTagElems = document.getElementsByClassName('highlight');

for (let htmlTagElem of htmlTagElems) {
    a = 0;
    newHtmlString = [];
    htmlText = htmlTagElem.innerHTML;
    numSymbol = 0;
    currentWord = '';

    while (numSymbol < htmlText.length) {
        for (let elemTechnology in allHighlightElems) {
            for (let elemSection in allHighlightElems[elemTechnology]) {
                for (let elem of allHighlightElems[elemTechnology][elemSection]) {
                    //=========
                    w('elem = ', elem);

                    //===============
                    w('htmlText.substr(numSymbol, elem.length) = ', htmlText.substr(numSymbol, elem.length));
                    w('numSymbol = ', numSymbol);
                    w('elem.length = ', elem.length);
                    w('numSymbol + elem.length = ', numSymbol + elem.length);
                    a = 0;
                    if (numSymbol + elem.length > htmlText.length) {
                        //===============
                        w('сработало условие: numSymbol + elem.length > htmlText.length');
                        continue;
                    }

                    if (htmlText.substr(numSymbol, elem.length) == elem) {
                        //==============
                        w('совпадение');

                        //действия при совпадении
                        currentWord += `<span class="${elemTechnology}${elemSection}">${currentWord}</span>`;
                        numSymbol += elem.length;
                        //==============
                        w('currentWord = ', currentWord);
                        break;
                    }
                    currentWord += numSymbol;
                    w('currentWord = ', currentWord);
                }
            }
        }
        numSymbol++;
    }
    newHtmlString.push(currentWord);
    htmlTagElem.innerHTML = newHtmlString.join('');
    newHtmlString.length = 0;
}

// currentWord = "";

//    currentWord += htmlSymbol;

// let htmlTagElems = document.getElementsByClassName("highlight");
// let htmlText = '';

// for (let htmlTagElem of htmlTagElems) {

//     htmlText = htmlTagElem.innerHTML;
//     let numSymbol = 0;

//     let flag = false;
//     while(numSymbol < htmlText.length){
//         flag = false;
//         for (let separatorSymbol of separatorSymbols) {

//             w(`строка = ${htmlText},\n\nnumSymbol = ${numSymbol} = ${htmlText.substr(numSymbol, separatorSymbol.length)}  separatorSymbol = ${separatorSymbol}`);

//             if (numSymbol+separatorSymbol.length > htmlText.length){
//                 w(`сработало условие - длинна разделителя больше, чем остаток html строки
//                 numSymbol+separatorSymbol.length > htmlText.length :
//                 ${numSymbol}+${separatorSymbol.length} > ${htmlText.length}`);
//                 continue;
//             }

//             if(htmlText.substr(numSymbol, separatorSymbol.length) == separatorSymbol){
//                 w(`совпадение: ${separatorSymbol}`);
//                 numSymbol += separatorSymbol.length;
//                 w(`следующий символ: numSymbol = ${numSymbol} = ${htmlText.substr(numSymbol, 1)}`);
//                 flag = true;
//                 break;
//             }
//         }

//         //если отработала итерация в условии выше, то эту терацию делать не надо
//         if (!flag) {
//             numSymbol++;
//             w(`следующий символ: numSymbol = ${numSymbol} = ${htmlText.substr(numSymbol, 1)}`);
//         }

//     }

// }

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
