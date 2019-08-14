# Feed Reader Testing

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included Jasmine and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Instructions

1. Clone or download [this repository](https://github.com/onlurking/fend-feed-reader-test).
2. Open `index.html` in your browser.
3. You will see all the tests passing.

## Roadmap

- [x] Familiarize yourself with the starter code
- [x] Explore the Jasmine spec file in `feedreader.js`
- [x] Edit the `allFeeds` variable in `app.js` to make the provided test fail
- [x] Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty
- [x] Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
- [x] Write a new test suite named `"The menu"`
- [x] Write a test that ensures the menu element is hidden by default
- [x] Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
- [x] Write a test suite named `"Initial Entries"`
- [x] Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
- [x] Write a test suite named `"New Feed Selection"`
- [x] Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes
