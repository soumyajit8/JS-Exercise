var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];
  
    function sortByTitle(arr) {
  
    return arr.sort(function(a, b) {
  
    return a.title > b.title;
  
  });

}

console.log(sortByTitle(library));