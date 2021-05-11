
const { ethers, upgrades } = require("hardhat");

function tokens(n) {
    return ethers.utils.parseEther(n);
}

module.exports = async ({
    deployments,
    getNamedAccounts
}) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    await deploy("LQT", {
        from: deployer,
        gasLimit: 9500000,
        args: []
    });

    let token = await ethers.getContract("LQT");

    // console.log("BEP20 Address: ", token.address);
}
