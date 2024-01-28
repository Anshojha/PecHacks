// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RentalContract {
    address public owner;
    address public tenant;
    
    uint256 public securityDeposit;
    uint256 public rentAmount;
    
    bool public rented;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }
    
    modifier onlyTenant() {
        require(msg.sender == tenant, "Only the tenant can call this function.");
        _;
    }
    
    modifier onlyAvailable() {
        require(!rented, "The property is already rented.");
        _;
    }
    
    modifier onlyOccupied() {
        require(rented, "The property is not rented.");
        _;
    }
    
    event PropertyRented(address tenant, uint256 securityDeposit, uint256 rentAmount);
    event PropertyVacated(address tenant, uint256 securityDeposit);
    event RentPaid(address tenant, uint256 rentAmount);
    
    constructor(uint256 _securityDeposit, uint256 _rentAmount) {
        owner = msg.sender;
        securityDeposit = _securityDeposit;
        rentAmount = _rentAmount;
        rented = false;
    }
    
    function rentProperty(address _tenant) external onlyOwner onlyAvailable {
        tenant = _tenant;
        rented = true;
        emit PropertyRented(tenant, securityDeposit, rentAmount);
    }
    
    function payRent() external payable onlyTenant onlyOccupied {
        require(msg.value == rentAmount, "The payment amount should be equal to the rent amount.");
        payable(owner).transfer(rentAmount);
        emit RentPaid(tenant, rentAmount);
    }
    
    function vacateProperty() external onlyTenant onlyOccupied {
        payable(tenant).transfer(securityDeposit);
        rented = false;
        emit PropertyVacated(tenant, securityDeposit);
    }

    
}
