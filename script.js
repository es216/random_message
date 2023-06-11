const math = require('mathjs');

const variable = math.floor(math.random() * 8);

const random_message = () => {
    const firstArr = ['London', 'Beijing', 'Goa', 'New York', 'Birmingham', 'Amsterdam', 'Athens', 'Istanbul', 'Edinburgh'];
    const secondArr = ['bananas', 'onions', 'rats', 'elephants', 'faeces', 'sausages', 'raw eggs', 'carrots', 'sweets'];
    const thirdArr = ['ass', 'skunks', 'old people', 'Guinness', 'flowers', 'smegma', 'fish', 'rats', 'tennis balls'];
    const firstWord = firstArr[Math.floor(math.random() * 9)];
    const secondWord = secondArr[Math.floor(math.random() * 9)];
    const thirdWord = thirdArr[Math.floor(math.random() * 9)];
    const output_message = "The weird thing about people from " + firstWord + " is that they eat so many " + secondWord + " that they always end up smelling of " + thirdWord + ".";
    return output_message;
}

    console.log(random_message());