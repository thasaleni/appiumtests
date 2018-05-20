
var wdio = require('webdriverio');
var expect = require('chai').expect;
var config = require('./helpers/desiredCapibilities.js').options;
var client = wdio.remote(config);



describe('Test Playing a song via genre', function () {

    before(function () {
        this.timeout(50000);
        return client.init();
    });
	

	after(function() {
			return client.end();
		});
		
		describe("Test click genres", function () {
        this.timeout(25000);
        it("test-click-genres", function(){
            return client.click('android=new UiSelector().text("Genres")');
        });
		it("test-click-rock-genre", function(){
			 this.timeout(25000);
            return client.click('android=new UiSelector().text("Rock")');
        });
        it("test-click-song-awakening", function(){
			 this.timeout(25000);
            return client.click('android=new UiSelector().text("Awakening")');
        });
		it("should-have-awakening-on-play-bar", function(){
			 this.timeout(25000);
			return client.element('android=new UiSelector().resourceId("com.example.android.uamp:id/fragment_playback_controls").childSelector(new UiSelector().resourceId("com.example.android.uamp:id/content")).childSelector(new UiSelector().resourceId("com.example.android.uamp:id/title"))').getText()
			.then(function(text){
                console.log("Text from the player bar: ",text);
                expect(text).to.equal('Awakening');
            });
		});
        
    });
});
	
	
 
