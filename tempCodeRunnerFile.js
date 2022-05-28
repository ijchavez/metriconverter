function separateNumFromString(anInput){
    let splitted;
    
    let splittedNum = anInput.match(/\d+/g);
    let spltText = anInput.match(/[a-zA-Z]+/g);

    splitted = [splittedNum, spltText];

    return splitted;
    
}