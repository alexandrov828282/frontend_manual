let separatorSymbols = [
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
    " ",
    ".",
    '<',
    '>',
    '//'
];

let currentWord = "";
let newHtmlString = [];
// let coincide = false;

// let jsMethodElems = ["method1", "method2", "method3"];

let allHighlightElems = {
    'js':{
        'Method':[
            "concat"
        ],
        'Object':[
            'object1', 'object2','object3'
        ],
        'Property':[
            'property1', 'property2', 'property3'
        ]
    },

    'html':{
        'Tag':[
            '<br>','div','h1'
        ]
    }
}



let htmlTagElems = document.getElementsByClassName("highlight");

//встретился ли разделитель
separatorOn = (str) => {
    for (let separatorSymbol of separatorSymbols) {
        if (str == separatorSymbol) return true;
    }
    return false;
};

for (let htmlTagElem of htmlTagElems) {
    let htmlSymbols = htmlTagElem.innerHTML.split("");

    for (let htmlSymbol of htmlSymbols) {
        if (separatorOn(htmlSymbol)) {
            
            for (let elemTechnology in allHighlightElems) {
               
                for (let elemSection in allHighlightElems[elemTechnology]) {

                    for (let elem of allHighlightElems[elemTechnology][elemSection]) {
                        
                        if (currentWord == elem){
                            currentWord = `<span class="${elemTechnology}${elemSection}">${currentWord}</span>`;
                            w(currentWord);

                        }

                    }
                }
            }

            currentWord += htmlSymbol;
            newHtmlString.push(currentWord);
            currentWord = '';
        }
        else{
            currentWord += htmlSymbol;
        }
    }
    
    htmlTagElem.innerHTML = newHtmlString.join('');
    newHtmlString.length = 0;
    // w(htmlTagElem.innerHTML);
}



function w(str) {
    console.log(str);
}
