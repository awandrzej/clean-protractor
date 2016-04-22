describe('angularjs homepage todo list', function () {

    it('login', function () {
        browser.driver.get('http://10.48.96.184:10039/wps/myportal/Home/DSV-DRIVER/UserAdmin');
        browser.manage().window().setSize(1600, 1000);
        browser.driver.findElement(by.id('userID')).sendKeys('wpsadmin');
        browser.driver.findElement(by.id('password')).sendKeys('password');
        browser.driver.findElement(by.id('login.button.login')).click();

        element(by.id('user-name-input')).sendKeys('justinas');
        element(by.id('user-password-input')).sendKeys('test');
        element(by.id('login-button')).click();

        element(by.id('add-user-popup-button')).click();

        element(by.name('firstname')).sendKeys('aaaaa');
        element(by.name('surname')).sendKeys('surname');
        element(by.name('username')).sendKeys('username');
        element(by.name('password')).sendKeys('password');
        element(by.name('mobilephone')).sendKeys('+4526291730');
        element(by.name('email')).sendKeys('protractor.test@email.com');
        element(by.name('groups')).element(by.xpath('ul/li/input')).sendKeys("Dan");
        listClick('group in $select.items');

        mySelectByItem('language', 'lang in allDefaultLanguage.values', 'Eng');

        myFunction('accesspdalanguage', 'accesspdalanguage in allAccessPdaLanguage.values');
        myFunction('accesspdacancelcausedir', 'accesspdacancelcausedir in allAccessPdaCancelCauseDir.values');
        myFunction('accesspdacancelcausedir', 'accesspdacancelcausedir in allAccessPdaCancelCauseDir.values');

        optionClick('item in allWarningAlerts.values');

        myFunction('mandatoryitem', 'mandatoryItem in allMandatoryItemScanning.values');
        myFunction('accesssupport', 'accesssupport in allAccessSupport.values');
    });

    function mySelectByItem(varName, varRepeter, varItemListValue) {
        element(by.name(varName)).click();
        var exit;
        element.all(by.repeater(varRepeter)).each(function (item){
            item.element(by.css('.md-text.ng-binding')).getText().then(function (text){
                    if (text.indexOf(varItemListValue)>-1){
                        item.element(by.css('.md-text.ng-binding')).click();
                        return true;
                        exit = 1;
                    };
            });
            if (exit == 1) {
            return true;
            }
        });
    }


    function myFunction(varName, varRepeter) {
        element(by.name(varName)).click();
        var items = element.all(by.repeater(varRepeter));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(items.get(0)), 5000, 'Element not clickable');
        expect(items.count()).toBeGreaterThan(0);
        items.get(0).click();
    }

    function listClick(varRepeter) {
        var items = element.all(by.repeater(varRepeter));
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(items.get(0)), 5000, 'Element not clickable');
        expect(items.count()).toBeGreaterThan(0);
        items.get(0).click();
    }

    function optionClick(varRepeter){
        element.all(by.repeater(varRepeter)).each(function (item){
        item.click();
        item.element(by.css('.ng-binding.ng-scope')).getText().then(function (text){
                console.log(text);
                });
        });
    }



});