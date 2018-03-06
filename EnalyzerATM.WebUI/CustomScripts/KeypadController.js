(function () {
    var numberOfButtons = 10;
    var buttonIDs = [];
    var depositAmount = '';

    for (i = 0; i <= numberOfButtons; i++) {
        buttonIDs.push('key' + i);
    }

    var attachEvent = function (buttonIDs) {
        buttonIDs.forEach(function (buttonID) {
            var keyValue = buttonID.replace("key", "");
            $('#' + buttonID).click({ param: keyValue }, pressKey);
        });

        $('#submit').click(submitDepositAmount);
    };

    var updateDisplay = function (depositAmount) {
        $('#amount').text(depositAmount);
    };

    var pressKey = function (event) {
        var keyValue = event.data.param;
        var amount = $('#amount').text();
        var length = amount.length - 1;

        if (keyValue !== "10") {
            amount += keyValue;
        } else {
             amount = amount.slice(0, length);
        }

        if (length <= 10) {
            updateDisplay(amount);
        } else {
            showErrorModal();
        }
    };

    var submitDepositAmount = function() {
        var amount = $('#amount').text();
        sessionStorage.deposit = amount;

        var newURL = '/Home/Depositing';
        window.location = newURL;
    };

    attachEvent(buttonIDs);
})();