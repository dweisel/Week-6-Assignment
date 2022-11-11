var expect = chai.expect;

describe('create player one hand' , () => {
it ('should create a player one hand with 26 cards', () => {
    let x = Object.keys(playerOneHand).length;
    expect(x).to.equal(26);
});

});