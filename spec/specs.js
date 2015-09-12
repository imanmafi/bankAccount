describe('Account', function() {
  describe('deposit()', function() {
    it("adds the deposited amount to the account", function() {
      var testAccount = Object.create(Account);
      testAccount.deposit(50.00);
      expect(testAccount.balance).to.equal(50.00);
    });
  });

  describe('withdraw()', function() {
    it("subtracts the requested amount from the account", function() {
      var testAccount = Object.create(Account);
      testAccount.withdraw(49.00);
      expect(testAccount.balance).to.equal(-49.00);
    });
  });

  describe('customer()', function() {
    it("adds a customer's name to the account", function() {
      var testCustomer = Object.create(Account);
      testCustomer.customer();
      expect(testCustomer.customer).to.equal("Hello there, " + testCustomer.name + "!");
    });
  });
});
