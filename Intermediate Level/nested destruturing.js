// Nested destructuring

const songs=[
    {title:"song1",artist:"artist1",duration:3.5},
    {title:"song2",artist:"artist2",duration:2.5},
    {title:"song3",artist:"artist3",duration:4.5},
    {title:"song4",artist:"artist4",duration:1.5},
    {title:"song5",artist:"artist5",duration:2.5},
];

const [,,,{artist}]=songs;
console.log(artist)
