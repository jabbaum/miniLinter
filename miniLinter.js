let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let storyWords = story.split(' ');

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//removing unnecessary Words and storing the betterWords
let betterWords = storyWords.filter(word => !unnecessaryWords.some(i => word===i));

//declaring an array to hold the count of overusedWords occurance and be programmatically corelated to the overusedWords array.
let overusedCounter = []
overusedWords.forEach(word => overusedCounter[overusedWords.indexOf(word)] = 0);

//iterating over story to count how many times the overused words were used. Storing the count in overusedCounter array.
storyWords.forEach(storyWord =>{
  overusedWords.forEach(overusedWord =>{
  if(overusedWord === storyWord) {
      overusedCounter[overusedWords.indexOf(overusedWord)] ++;
    }
  });
});

//count how many sentences are in the provided paragraph
let sentences = 0;
storyWords.forEach(word =>{
  let lastletter = word[word.length-1];
  if(lastletter === '.'||lastletter === '!'||lastletter ==='?') {
    sentences ++;
  }
});


// displaying the number of times each over used words was used.
let overusedDisplayer = [];
overusedWords.forEach(word => {
  overusedDisplayer.push(`The over used word ${word} was used ${overusedCounter[overusedWords.indexOf(word)]} times.`);
});
//function to display all needed info
let displayFunction = function(){
  return `The provided story has ${storyWords.length} words and ${sentences} sentences in it.\n\n${overusedDisplayer.join('\n')}\n\nThe provided story with the unnecessary words removed is:\n\n${betterWords.join(' ')}`
}
//call the displayFunction to print to screen
console.log(displayFunction());
