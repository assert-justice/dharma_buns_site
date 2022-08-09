/*
  Our store of reviews, an array of objects.
  Yeah it's a global, deal with it.
*/
const reviews = [
  {
    title: "An Outstanding experience",
    rating: 5,
    text: "A rare treat, fun for the whole family."
  },
  {
    title: "Boo!",
    rating: 1,
    text: "I hate puns and beat poetry."
  }
];

function main() {
  /*
    Set up the submit handler event listener and call render for the first time.
  */
}

function submitHandler(event) {
  /*
    A function to handle clicking submit on the form. 
    You'll want to:
    - prevent the default form behavior 
    - grab the data from the form
    - add a new review object to the reviews global variable
    - and rerender the page.
  */
}

function render() {
  /*
    The render method should first empty the contents of the reviews ul and then append each review to it.
    You'll want to call the reviewTemplate function below.
  */
}

function reviewTemplate(review) {
  /*
    Given a review object this function should return the appropriately formatted html for the review as a string.
  */
}

addEventListener("load", main);