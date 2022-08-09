# Dharma Buns Coffee Project
In this drill you'll get some extra practice with event listeners and dom manipulation. You'll need to implement various functions in the `index.js` file. You do NOT need to modify the html or css files (ok, if you want to make the styling suck less feel free).

I'll list the functions to implement in order. You don't have to organize the code this way to make a functional site but note how everything is broken down logically so each function is responsible for just one thing.

## Main
This is the function that calls everything else. At the bottom of `index.js` you'll find the following line:
```js
addEventListener("load", main);
```
This calls the main function when the page is fully loaded. This is a better approach then simply putting `main();` at the bottom of the page, it comes with a few assurances.

The main function's job is to set up the submit handler. You'll want to grab the form element from the html with `querySelector` and attach the `submitHandler` function to it. Implementing the submit handler is next.

Finally we'll want to call the `render` function. We'll implement that in a bit, don't worry about it for now.

## Submit Handler
When the user clicks the "submit" button on the form this function should be called. Setting that up is the responsibility of the `main` function detailed above. Note that this function expects an `event` parameter. By default when a form is submitted the browser refreshes the entire page. This is how all forms worked before js and a lot of sites still work this way. Either way we only need to use the event parameter once to prevent this default behavior like so:

```js
event.preventDefault();
```

Note that it's only submit events where this is needed. Go ahead and write a console log (something like `console.log("here");`) to test that when you click the submit button this function is being called.

Our submit handler has another job to do. It needs to actually grab the data the user has inputted in the form! The most straightforward way of doing that is to grab each input element in the form by its id and read the value. For example:

```js
const title = document.querySelector("#title").value;
```

Write console logs to make sure you can grab the title, rating, and text of the new review.

Each review is stored in the `reviews` array, a global variable. Each review object in that array has the following form:

```js
{
    title: "Boo!",
    rating: 1,
    text: "I hate puns and beat poetry."
}
```

Take the title, rating, and text you have extracted from the form and add them to an object. Object shorthand can make this very tidy! Then push that object to the `reviews` array. Once done you can log the `reviews` array to make sure your changes are being applied.

The last thing that our submit handler needs to do is call the `render` function. We'll implement that next.

## Render
Our render method is what actually displays the reviews on our page. Note that it is called by the main function so if you really want you can implement this before the submit handler.

In the `index.html` file you'll see I have a `ul` element with a single `li` element containing a dummy review. The first thing our render function should do is clear the contents of that `ul`.

Now we'll want to loop through the reviews. This is a pretty good use case for a `for of` loop but you do you. Go ahead and log the title of each review to make sure it's looping over the array and you can access elements.

Now we're going to need to take a quick detour to work on a template function. We'll be back in a moment.

## Review Template
The `reviewTemplate` function accepts a single review object and returns html formatted like the dummy review in our html:

```html
<li>
    <h2>I'm an example review!</h2>
    <h3>5/5 Stars</h3>
    <p>Wowza!</p>
</li>
```

The `h2` contains the title, the `h3` contains the rating, and the `p` contains the text of the review. All contained in an `li` element. You'll want to return a string that contains the corresponding html for the review. Template literals are your friend.

## Render Part 2 (2 Render 2 Furious)
Now that we have our `reviewTemplate` function working (hopefully) let's test it. For each review object in `reviews` pass it to `reviewTemplate` and add that string to the `ul`. Now when you load the page you should see the text of two reviews with the titles of "An Outstanding experience" and "Boo!" (Dharma Buns is a divisive coffee house).

Inshallah when you fill out the form and hit submit it adds another review to the page! If not, well, you got some debugging to do. Remember that to err is human, to debug is divine.