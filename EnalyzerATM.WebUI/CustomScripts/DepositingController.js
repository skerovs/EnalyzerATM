(function () {
    var moneyObjects = ['500', '200', '100', '50', '20', '10', '5', '2', '1'];

    var attachMoney = function (moneyObject, moneyType) {
        if (moneyType >= 100)
            $('#note-col').append(moneyObject);

        if (moneyType < 100) {
            var numberOfCurrencyInCol = document.getElementById("coin-col").childElementCount;
            if (numberOfCurrencyInCol < 3)
                $('#coin-col').append(moneyObject);
            else
                $('#coin-col1').append(moneyObject);
        }
    };

    var createMoneyObject = function (moneyType, numberOfCurrency) {
        var moneySymbol = '';

        if (moneyType < 100) {
            moneySymbol = '<div class="money-box--symbol-container">' +
                '<div class="money-box--symbol-circle"></div></div>';
        } else {
            moneySymbol = '<div class="money-box--symbol-container money-box--symbol-container__note">' +
                '<div class="money-box--symbol-note"></div></div>';
        }

        var moneyObject = '<div class="money-box">' +
            moneySymbol +
            '<div class="text money-box--text">' +
            moneyType + ' x ' +
            numberOfCurrency +
            ' </div></div>';

        attachMoney(moneyObject, moneyType);
    };

    var emitMoney = function (moneyObjects) {
        var deposit = sessionStorage.deposit;
        var depositValue = parseInt(deposit);
        var reminder = depositValue;

        moneyObjects.forEach(function (moneyType) {
            var moneyTypeValue = parseInt(moneyType);
            var numberOfCurrency = Math.floor(reminder / moneyTypeValue);
            reminder = reminder % moneyTypeValue;

            if(numberOfCurrency !== 0)
                createMoneyObject(moneyTypeValue, numberOfCurrency);
        });

    };

    var makeNewDeposit = function () {
        var newURL = window.location.toString();
        window.location = newURL.replace('Depositing', 'ChooseAmount');
    };

    var initBackButton = function () {
        $('#back').click(makeNewDeposit);
    };

    var isDepositingPage = function() {
        var url = window.location.pathname;
        if (url === '/Home/Depositing') {
            $('#amount').text('£' + sessionStorage.deposit);
            initBackButton();
            emitMoney(moneyObjects);
        }
    }

    isDepositingPage();
})();