var Account = {
  balance: 0,

  // customer: function() {
  //   return "Hello there, " + this.name + ".";
  // },

  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },

  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};


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
