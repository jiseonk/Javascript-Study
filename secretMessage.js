let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove the last element of the array
secretMessage.pop();
//Check the array
console.log(secretMessage.length);

// Add the words 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');

// Change the word 'easily' to the word 'right'
const index = secretMessage.indexOf('easily');
secretMessage[index] = 'right';

// Remove the first string of the array
secretMessage.shift();

// Add the string 'Programming' to the beginning of the array
secretMessage.unshift('Programming');

// Remove the strings 'get', 'right','the','first', 'time'
secretMessage.splice(6,5, 'know');
console.log(secretMessage);

// Print the secret message as a sentence
console.log(secretMessage.join(' '));
