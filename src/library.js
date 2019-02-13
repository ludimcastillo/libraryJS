class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  set isCheckedOut(booleanValue) {
    // uses private property to set it
    this._isCheckedOut = booleanValue;
  }
  
  get ratings() {
    return this._ratings;
  }
  
  getAverageRating() {
    return this._ratings.reduce((accumulator, rating) => accumulator + rating) / this._ratings.length;
  }
  
  toggleCheckoutStatus() {
    //uses setter
    this.isCheckedOut ? this.isCheckedout = false : this.isCheckedOut = true;
  }
  
  addRating(newRating) {
    if(newRating < 1 || newRating > 5) {
      console.log('Ratings must be between 1 and 5');
    }
    else {
      this._ratings.push(newRating);
    }
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }
}
// test Book class
// const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
// console.log(historyOfEverything.isCheckedOut);
// historyOfEverything.toggleCheckoutStatus();
// console.log(historyOfEverything.isCheckedOut);
// historyOfEverything.addRating(4);
// historyOfEverything.addRating(5);
// historyOfEverything.addRating(5);
// console.log(historyOfEverything.getAverageRating());

class Movie extends Media {
  constructor(title, director, movieCast, runTime) {
    super(title);
    this._director = director;
    this._movieCast = movieCast;
    this._runTime = runTime;
  }
  
  get director() {
    return this._director;
  }
  
  get movieCast() {
    return this._movieCast;
  }
  
  get runTime() {
    return this._runTime;
  }
}

// test Movie class 
// const speed = new Movie('Jon de Bont', 'Speed', 116);
// console.log(speed.isCheckedOut);
// speed.toggleCheckoutStatus();
// console.log(speed.isCheckedOut);
// speed.addRating(1);
// speed.addRating(1);
// speed.addRating(5);
// console.log(speed.getAverageRating());
  
class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  
  get artist() {
    return this._artist;
  }
  
  get songs() {
    return this._songs;
  }
  
  shuffle() {
    const newIndeces = [];
    const randomlySortedSongs = [];
    this.songs.forEach(song => {
      while(randomlySortedSongs.length != this.songs.length) {
        let randomIndex = Math.floor(Math.random() * this.songs.length);
        if(!randomlySortedSongs.includes(this.songs[randomIndex])) {
          randomlySortedSongs.push(this.songs[randomIndex]);
        }
      }
    });    
    return randomlySortedSongs;
  }
}

// test CD class
// const soFarGone = new CD('So Far Gone', 'Drake', ['Lust for Life', 'Houstatlantavegas', 'Successful', "Let's Call It Off", 'November 18th', 'Ignant Shit', 'A Night Off', "Say What's Real", 'Little Bit', 'Best I Ever Had', 'Unstoppable', 'Uptown', 'Sooner Than Later', "Bria's Interlude", 'The Calm', 'Outro', 'Brand New', 'Congratulations']);
// console.log(soFarGone.shuffle());

/**
* Class that holds all of the Media items in our library.
*/
class Catalog {
  constructor(items){
    this._items = items;
  }
  
  get items() {
    return this._items;
  }
}



