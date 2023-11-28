class Movie {
 constructor(rating = "", ID = 0, title = "") {
    this.rating = rating;
    this.ID = ID;
    this.title = title;
 }

 getRating() {
    return this.rating;
 }

 setRating(aRating) {
    this.rating = aRating;
 }

 getID() {
    return this.ID;
 }

 setID(aID) {
    this.ID = aID;
 }

 getTitle() {
    return this.title;
 }

 setTitle(aTitle) {
    this.title = aTitle;
 }

 calcLateFees(days) {
    return 2.0 * days;
 }

 equals(obj) {
    if (obj === null) return false;
    else if (this.constructor !== obj.constructor) return false;
    else {
      const other = obj;

      return (
        this.rating === other.rating &&
        this.ID === other.ID &&
        this.title === other.title
      );
    }
 }

 toString() {
    return `
MPAA Rating: ${this.rating}
ID Number: ${this.ID}
Movie Title: ${this.title}`;
 }
}
