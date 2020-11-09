"use strict";

//фрагменты для окраски
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

//подмена треугольных скобок в фрагментах выше
!(() => {
    let tmpStr = '';
    allHighlightElems.html.Tag.forEach((elems, index) => {
        for (const elem of elems) {
            if (elem == '<')
                tmpStr += '&lt;';
            else if (elem == '>')
                tmpStr += '&gt;';
            else
                tmpStr += elem;
        }
        allHighlightElems.html.Tag[index] = tmpStr;
        tmpStr = '';
    });
})();

//основной процесс
let htmlTagElems = document.getElementsByClassName('highlight');
console.log('htmlTagElems = ',htmlTagElems);

console.log('запуск цикла обработки htmlTagElems',);

for (let htmlTagElem of htmlTagElems) {
    console.log('htmlTagElem.innerHTML перед обработкой = ',htmlTagElem.innerHTML);
    htmlTagElem.innerHTML = funcTreatment(htmlTagElem.innerHTML);
    console.log('htmlTagElem.innerHTML после обработки = ',htmlTagElem.innerHTML);
}

function funcTreatment(treatmentString) {
    let index = 0, objData = {}, resString = '';
    console.log('запуск работы  funcTreatment, переданная строка = ',treatmentString);

    console.log('запуск цикла по перебору обрабатываемой строки посимвольно',);
    while(treatmentString.length < index){
        console.log('перед обработкой:');
        console.log('treatmentString.length = ',treatmentString.length);
        console.log('index = ',index);
        objData = coincidence(treatmentString.substring(index));
        index += objData.addIndex;
        resString += objData.addString;
        console.log('после обработки:');
        console.log('objData.addIndex = ',objData.addIndex);
        console.log('objData.addString = ',objData.addString);
    }

    return resString;
}

function coincidence(coincidenceString) {
    
    let newString = '', newIndex = 0;
    
    for (let elemTechnology in allHighlightElems){
        for (let elemSection in allHighlightElems[elemTechnology]){
            for (let elem of allHighlightElems[elemTechnology][elemSection]){
                //проверка - остаток строки, переданный сюда на обработку 
                //должен быть не меньше, чем образец для покраски
                if (coincidenceString.length < elem.length) continue;
                //проверка на совпадение
                if (coincidenceString.substring(0,elem.length-1) == elem){
                    return {
                        addString: `<span class="${elemTechnology}${elemSection}">${elem}</span>`,
                        addIndex: elem.length
                    }
                }

            }
        }
    }

    return {
        addString: coincidenceString.substring(0,1),
        addIndex: 1
    };
}










// for (let htmlTagElem of htmlTagElems) {
//     newHtmlString = [];
//     htmlTagElemText = htmlTagElem.innerHTML;
//     numSymbol = 0;
//     currentWord = '';

//     debugger;

//     while (numSymbol < htmlTagElemText.length) {
//         for (let elemTechnology in allHighlightElems) {
//             for (let elemSection in allHighlightElems[elemTechnology]) {
//                 for (let elem of allHighlightElems[elemTechnology][elemSection]) {
//                     if (numSymbol + elem.length > htmlTagElemText.length) {
//                         continue;
//                     }

//                     console.log(htmlTagElemText.substr(numSymbol, elem.length),', ',elem);

//                     if (htmlTagElemText.substr(numSymbol, elem.length) == elem) {
//                         //действия при совпадении
//                         currentWord += `<span class="${elemTechnology}${elemSection}">${elem}</span>`;
//                         numSymbol += elem.length;
//                         break;
//                     }
//                     // currentWord += numSymbol;

//                 }
//             }
//         }
//         currentWord += htmlTagElemText[numSymbol];
//         console.log(currentWord);
//         numSymbol++;
//     }
//     newHtmlString.push(currentWord);
//     htmlTagElem.innerHTML = newHtmlString.join('');
//     newHtmlString.length = 0;
// }

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
