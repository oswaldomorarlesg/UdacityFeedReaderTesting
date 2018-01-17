# Feed Reader Testing (Udacity)

**Auther:** Oswaldo Morales

**Date:** Jan 16, 2018

#

## Description

> This project is part of all required tests provided.

  - **RSS Feed testing**
  - **RSS Feed properties**
  - **Menu default state**
  - **Menu hiding/showing**

> Are all provided and are comprehensive enough to adequately test the functionality.

#

## Project Instruction:

> In this project, you will be learning about testing with Javascript. Testing is an important part of the development process and many organizations practice a standard known as "test-driven development" or TDD. This is when developers write tests first, before they ever start developing their application .

> Whether you work in an organization that writes tests extensively to inform product development or one that uses tests to encourage iteration, testing has become an essential skill in modern web development. 

- You can read the project requirements at the following url: (https://review.udacity.com/#!/rubrics/18/view)

## How to install

### To install the project follow these steps:
> Clone this git repository to your working directory (https://github.com/oswaldomorarlesg/UdacityFeedReaderTesting.git)

> You  use a modern, open source text editor that understands web design as:
- __Brackets__ (https://brackets.en.uptodown.com/windows)
- __Notepad++__ (https://notepad-plus-plus.org)

> or create a local webserver as: 
- __e.g. python -m SimpleHTTPServer__
- __XAMPP__

> Open the index.html file in your text editor and run the tests.

#

> ## Intentional test for code failure
- __Error Test__ (https://github.com/oswaldomorarlesg/UdacityFeedReaderTesting/blob/master/errortest.JPG)

> ## Correct Tests
- I added a new feed variable in ./js/app.js.

### I performed the following tests to meet the requirements of the project:
- Test to confirm that the allFeeds objects has been defined and that it is not empty.
- Test to confirm that  each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
- Test to confirm that  each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
- Test to confirm that ensures the menu element is hidden by default.
- Test to confirm that ensures the menu changes visibility when the menu icon is clicked.
- Test to  confirm that the loadFeed function is called and completes its work, and there is at least a single .entry element within the   feed container.
- Test to confirm that the content actually changes when a new feed is loaded by the loadFeed function.






