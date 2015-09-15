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
    var newAccount = Object.create(Account);

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
    newAccount.balance = newdeposit + newAccount.balance;
    $("#balance").text(newAccount.balance);
    $(".result").show();
  });

  $("form#withdraw").submit(function(event) {
    event.preventDefault();
    var withdraw = parseFloat($("input#withdraw").val());
    newAccount.balance = newAccount.balance - withdraw;
    $("#balance").text(newAccount.balance);
    $(".result").show();
  });

});
