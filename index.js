// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat){
    return cats.push(cat);
}

function destructivelyPrependCat(cat){
    return cats.unshift(cat);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(cat){
    return [...cats, cat];
}

function prependCat(cat){
    return [cat, ...cats];
}

function removeLastCat(){
    const newCats = cats.slice(0, -1);
    return newCats;
}

function removeFirstCat(){
    const newCats = cats.slice(1)
    return newCats;
}