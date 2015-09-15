function Customer(name) {
  this.name = name;
}

function Account(balance, customer) {
  this.balance = balance;
  this.customer = customer;
}

Account.prototype.withdraw = function(amount) {
  this.balance -= amount;
}

Account.prototype.deposit = function(amount) {
  this.balance += amount;
}

var newCustomer = new Customer('Vin Diesel')
var newAccount = new Account(0, newCustomer);

$(document).ready(function() {
  console.log('WE GOT HERE');
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var deposit = parseFloat($("input#initial-deposit").val());
    newAccount.balance = deposit + newAccount.balance;
    $("#balance").text(newAccount.balance);
    $(".result").show();
    $("#hideafterenter").hide();
    $("#existing").show();
  });

  $("form#deposit").submit(function(event) {
    updateAccount('deposit');
  });

  $("form#withdraw").submit(function(event) {
    updateAccount('withdraw');
  });

});

function updateAccount(action) {
  event.preventDefault();
  var value = parseFloat($("input#" + action).val());
  newAccount[action](value);
  $("#balance").text(newAccount.balance);
  $(".result").show();
  $("input#" + action).val("");
}
