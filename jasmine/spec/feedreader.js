/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
		 		
		for (var i = 0; i < allFeeds.length; i++) {
            testUrl(allFeeds[i].url,i+1);
        }
		 
         function testUrl(input,feedNo){
             it('Feed ' + feedNo + ' has a URL defined and  the URL is not empty', function(){
               expect(input).toBeDefined();
               expect(input.length).not.toBe(0);
             });            
         }


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		 
		for (var i = 0; i < allFeeds.length; i++) {
            testName(allFeeds[i].name,i+1);
        }
		 
		  function testName(input,feedNo){
             it('Feed ' + feedNo + ' has a name defined and the name is not empty', function(){
               expect(input).toBeDefined();
               expect(input.length).not.toBe(0);
             });            
         }
    });


    /* TODO: Write a new test suite named "The menu" */	
	/* This is our first test suite - a test suite just contains
	* a related set of tests. This suite is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/
    


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
		 
		 describe('The menu', function() {
			
		 it('Menu element is hidden by default', function(){
            expect($('body').hasClass("menu-hidden")).toBe(true);
         });


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
		  
		   it('Menu visibility changes when menu icon is clicked', function(){
            //Click the menu Icon to trigger menu display
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toBe(false);

            //Click the menu Icon to trigger menu hide
            $(".menu-icon-link").click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
         });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
		beforeEach(function (done) {
            loadFeed(0, done);
        });
        it('Feeds loaded and completed and .feed has at least 01 .entry', function(){
            expect($('.feed .entry').length).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
	    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
		 
		 //variable declaration old feed
		var oldFeed;
        beforeEach(function (done) {
            loadFeed(1,function(){
                oldFeed = $('.feed').html();
                done();
            });
        });
        it('Content change by loadFeed when new feed is loaded', function(done){
            loadFeed(2,function(){
				//compare old variable  with the current variable
                expect($('.feed').html()).not.toEqual(oldFeed);
                done();
            });
        });
    });
});

