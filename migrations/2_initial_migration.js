const Migrations = artifacts.require("SampleToken");

module.exports = (deployer) => {
  deployer.deploy(sampleToken);
};
