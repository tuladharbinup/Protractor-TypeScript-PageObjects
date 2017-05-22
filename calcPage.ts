
var fs = require('fs'); //needed for screenshot function
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

export class CalcHomePage {
     firstNumber  = element(by.model('first'));
     secondNumber = element(by.model('second'));
     goButton = element(by.id('gobutton'));
     latestResult = element(by.binding('latest'));
     history = element.all(by.repeater('result in memory'));

  getURL(urlText: string) {
    browser.get(urlText);
  }

  setFirstNumber(firstNum: number) {
    this.firstNumber.sendKeys(firstNum);
  }

  setSecondNumber(secondNum: number) {
    this.secondNumber.sendKeys(secondNum);
  }

   public add(x: number, y: number) {
        this.firstNumber.sendKeys(x);
        this.secondNumber.sendKeys(y);
        this.goButton.click();
  }

   getCalcResult(): any {
        return this.latestResult.getText();
    }

    getResultHistoryCount(): any {
        return this.history.count();
    }

     getApplicationTitle(): any {
        return browser.getTitle();        
    }

    // abstract writing screen shot to a file
    writeScreenShot(filename : string) {
        browser.takeScreenshot().then(function (png) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(png, 'base64'));
        stream.end();
        });
    }


}