// filter();

const songs=[
   {title:"song1",artist:"artist1",duration:2.5},
   {title:"song2",artist:"artist2",duration:2.75},
   {title:"song3",artist:"artist3",duration:3.25},
   {title:"song4",artist:"artist4",duration:2.5},
   {title:"song5",artist:"artist5",duration:2.5},
];

console.log(songs.filter(song=>song.duration>2.5));

// Example-1

const  ages=[32,33,16,40];
function checkAdults(age)
{
   return age>=18;
}
console.log(ages.filter(checkAdults))

// Example-2

const words=[
   "spray",
   "limit",
   "elite",
   "exuberant",
   "destruction",
   "present"
];

function checkLength(word)
{
   return word.length>6;
}

console.log(words.filter(checkLength))
