
$(document).ready(function () {
    if (isHomePage()) {
        setTimeout(transitionToATM, 3000);
    }
});

var transitionToATM = function() {
    $('.atm-title--text').removeClass('atm-title--text__load');
    setTimeout(function() {
        window.location = 'Home/ChooseAmount';
    }, 2000);
}

var isHomePage = function() {
    var url = window.location.pathname;
    if (url === '/') {
        $('.atm-title--text').addClass('atm-title--text__load');
        return true;
    } else {
        return false;
    }
}

var showErrorModal = function () {
    $('#error-modal').modal('show');
};

var hideErrorModal = function() {
    $('#error-modal').modal('hide');
};
