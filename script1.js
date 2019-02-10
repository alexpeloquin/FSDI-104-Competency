class ToRead {
  constructor(title, author) {
      this.title=title;
      this.author=author;
  }
}

class Book extends ToRead {
  constructor(title, author, genre){
      super(title, author);
      this.genre=genre;
  }
}

class Checkout {
  constructor() {
      this.literature = [];
  }
  addToList(book) {
      this.literature.unshift(book);
  }
  remProduct(product, amount) {
      this.literature.splice(product,amount);
      this.product=product;
      this.amount=amount;
      alert("You have removed one book");
  }
}

const ss = new ToRead("There Will Come Soft Rains", "Ray Bradbury");
const book1 = new Book("A Handmaid's Tale", "Margaret Atwood", "Dystopian");
const book2 = new Book("The Celestine Prophecy", "James Redfield", "Nonfiction");
const book3 = new Book("The Undoing Project", "Michael Lewis", "Sports/Nonfiction");
const list = new Checkout ();


list.addToList(ss);
list.addToList(book1);
list.addToList(book2);
list.addToList(book3);



alert("Here are the books on your list so far: ");

var lit = list.literature;
for (i=0; i<lit.length; i++) {
  alert(list.literature[i].title);
}

alert("Here are the authors on your list so far: ");

var lit = list.literature;
for (i=0; i<lit.length; i++) {
  alert(list.literature[i].author);
}

alert("You have " + lit.length + " books total listed.");

list.remProduct(2,1)

alert("You now only have " + lit.length + " books total listed.");

alert("These are the books remaining on your list: ")
var lit = list.literature;
for (i=0; i<lit.length; i++) {
  alert(list.literature[i].title);
}
