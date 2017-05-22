

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
import {} from 'jasmine';

// local import of the exported calcPage class
import {CalcHomePage} from './calcPage';

let calcPage = new CalcHomePage();

describe('Add two numbers', function() {

  //beforeEach function will run before every 'it'
   beforeEach(function() {
    calcPage.getURL('http://juliemr.github.io/protractor-demo/');
  });

   it('should have a title', function() {
    expect<any>(calcPage.getApplicationTitle()).toEqual('Super Calculator');
  });

  it('should add two numbers', function() {
    calcPage.add(2,18);
    expect<any>(calcPage.latestResult.getText()).toEqual('20'); 
    calcPage.latestResult.getText().then(function(text) {
        console.log("One way to print Actual result: "+text);
          });

    var viewContainer= calcPage.latestResult.getText();
    //console.log("Another way to print Actual result: ");
    viewContainer.then(console.log);    
  });

   it('should have a history', function() {
     calcPage.add (3,4);
     calcPage.add (13,4);
     calcPage.add(2,9);
     expect<any>(calcPage.history.count()).toEqual(3);
     expect<any>(calcPage.history.last().getText()).toContain('3 + 4');
     //capture screenshot
    calcPage.writeScreenShot('snapshot.png');
  });


});

