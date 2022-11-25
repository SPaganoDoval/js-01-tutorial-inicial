function sing(){
    let letra = "";
    for(let i = 0; i < 11; i++){
        if(i === 4) str += 'whisper words of wisdom, ';
        else if (i === 10) str += 'there will be an answer, let it be';
        else letra += 'let it be, ';
    }
    return letra;
}



console.log(sing());