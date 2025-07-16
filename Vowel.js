function VowelFunction (msg){ 
 let count = 0;
 const Vowels = "aeiouAEIOU";
    for (var i = 0; i < msg.length; i++) {
        if (msg[i] === 'a' || msg[i] === 'e' || msg[i] === 'i' || msg[i] === 'o' || msg[i] === 'u'|| msg[i] === 'A' || msg[i] === 'E' || msg[i] === 'I' || msg[i] === 'O' || msg[i] === 'U') {
            count ++;
        }
    }
 }
    return count;

let jeff = VowelFunction(Anzar);   {
    console.log(jeff);
}