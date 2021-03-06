$(function() {
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('should be defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('should have a url', function() {
      for (let feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(typeof feed.url).toBe('string');
        expect(feed.url).not.toBe('');
      };
    });

    /* Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('should have a name', function() {
      for (let feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(typeof feed.name).toBe('string');
        expect(feed.name).not.toBe('');
      };
    });
  });

  /* Write a new test suite named "The menu" */
  describe('The menu', function() {
    /* Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('should be hidden by default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('should be visible when is clicked', function() {
      let menuIcon = $('.menu-icon-link');

      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menuIcon.click();

      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  /* Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    /* Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */
    beforeEach(function(done) {
      loadFeed(0, done());
    });

    it('should have a feed', function() {
      expect($('.feed .entry').length).not.toBe(0);
    });
  });

  /* Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    /* Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
    let oldFeed, newFeed;

    beforeEach((done) => {
      loadFeed(0, () => {
        oldFeed = $('.feed').html();

        loadFeed(1, () => {
          newFeed = $('.feed').html();
          done();
        });
      });
    });

    it('should have different content', (done) => {
      expect(oldFeed).not.toEqual(newFeed);
      done();
    });
  });
}());
