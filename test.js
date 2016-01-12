function Book(title, publisher){
    this.title = title;
    this.publisher = publisher;
    console.log( this instanceof Book)
}

Book.prototype.sayTitle = function(){
    console.log(this.title); };

var book1 = new Book("High Performance JavaScript", "Yahoo! Press");
var book2 = new Book("JavaScript: The Good Parts", "Yahoo! Press");

console.log(book1 instanceof Book); //true
console.log(book1 instanceof Object); //true
book1.sayTitle();
console.log(book1.toString()); //"[object Object]"