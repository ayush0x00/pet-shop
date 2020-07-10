var Adoptions = artifacts.require("./Adoptions.sol");

module.exports = function(deployer) {
  deployer.deploy(Adoptions);
};
