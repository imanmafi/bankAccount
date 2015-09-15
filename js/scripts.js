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

$(document).ready(function() {
    var newCustomer = new Customer('Vin Diesel')
    var newAccount = new Account(0, newCustomer);

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var deposit = parseFloat($("input#deposit").val());
    newAccount.balance = deposit + newAccount.balance;
    $("#balance").text(newAccount.balance);
    $(".result").show();
    $("#hideafterenter").hide();
    $("#existing").show();
  });

  $("form#deposit").submit(function(event) {
    event.preventDefault();
    var newdeposit = parseFloat($("input#newdeposit").val());
    newAccount.deposit(newdeposit);
    $("#balance").text(newAccount.balance);
    $(".result").show();
    $("input#newdeposit").val("");
  });

  $("form#withdraw").submit(function(event) {
    event.preventDefault();
    var withdraw = parseFloat($("input#withdraw").val());
    newAccount.withdraw(withdraw);
    $("#balance").text(newAccount.balance);
    $(".result").show();
    $("input#withdraw").val("");
  });

});
