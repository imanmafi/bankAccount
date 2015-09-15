describe('Account', function() {
  describe('deposit()', function() {
    it("adds the deposited amount to the account", function() {
      var testAccount = new Account(0, new Customer('fred'));
      testAccount.deposit(50.00);
      expect(testAccount.balance).to.equal(50.00);
    });
  });

  describe('withdraw()', function() {
    it("subtracts the requested amount from the account", function() {
      var testAccount = new Account(0, new Customer('fred'));
      testAccount.withdraw(49.00);
      expect(testAccount.balance).to.equal(-49.00);
    });
  });

  describe('customer', function() {
    it("adds a customer's name to the account", function() {
      var testCustomer = new Customer('bob');
      var testAccount = new Account(0, testCustomer);
      expect(testCustomer.name).to.equal('bob');
      expect(testAccount.customer).to.equal(testCustomer);
    });
  });
});
