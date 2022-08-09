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

function render() {
  // The render method should first empty the contents of the reviews ul and then append each review to it.
  const container = document.querySelector("#reviews");
  container.innerHTML = "";
  reviews.map(reviewTemplate).forEach(rev => container.innerHTML += rev);
}

function submitHandler(event) {
  // A function to handle clicking submit on the form. You'll want to prevent the default form behavior, grab the data from the form, add a new review object to the reviews global variable, and rerender the page.
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const rating = document.querySelector("#rating").value;
  const text = document.querySelector("#body").value;
  const review = {title, rating, text};
  reviews.push(review);
  render();
}

function reviewTemplate(review) {
  // Given a review object this function should return the appropriately formatted html for the review as a string.
  const {title, rating, text} = review;
  return `<li>
        <h2>${title}</h2>
        <h3>${rating}/5 Stars</h3>
        <p>${text}</p>
      </li>`;
}

function main() {
  // Set up the submit handler event listener and call render for the first time.
  const form = document.querySelector("form");
  form.addEventListener("submit", submitHandler);
  render();
}

addEventListener("load", main);