"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs'); //needed for screenshot function
var protractor_1 = require("protractor");
var CalcHomePage = (function () {
    function CalcHomePage() {
        this.firstNumber = protractor_1.element(protractor_1.by.model('first'));
        this.secondNumber = protractor_1.element(protractor_1.by.model('second'));
        this.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
        this.latestResult = protractor_1.element(protractor_1.by.binding('latest'));
        this.history = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
    }
    CalcHomePage.prototype.getURL = function (urlText) {
        protractor_1.browser.get(urlText);
    };
    CalcHomePage.prototype.setFirstNumber = function (firstNum) {
        this.firstNumber.sendKeys(firstNum);
    };
    CalcHomePage.prototype.setSecondNumber = function (secondNum) {
        this.secondNumber.sendKeys(secondNum);
    };
    CalcHomePage.prototype.add = function (x, y) {
        this.firstNumber.sendKeys(x);
        this.secondNumber.sendKeys(y);
        this.goButton.click();
    };
    CalcHomePage.prototype.getCalcResult = function () {
        return this.latestResult.getText();
    };
    CalcHomePage.prototype.getResultHistoryCount = function () {
        return this.history.count();
    };
    CalcHomePage.prototype.getApplicationTitle = function () {
        return protractor_1.browser.getTitle();
    };
    // abstract writing screen shot to a file
    CalcHomePage.prototype.writeScreenShot = function (filename) {
        protractor_1.browser.takeScreenshot().then(function (png) {
            var stream = fs.createWriteStream(filename);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    };
    return CalcHomePage;
}());
exports.CalcHomePage = CalcHomePage;
