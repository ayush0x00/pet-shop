pragma solidity >=0.5.0;

contract Adoptions{
  mapping(uint256=>address) adopters;
  event Adopted(uint256 petId,address adopter);
  
  function adoptPet(uint256 petId) public returns(uint256){
    require(petId>=0 && petId<=15);
    adopters[petId]=msg.sender;
    emit Adopted(petId,adopters[petId]);
    return petId;
  }

  function getAdopter(uint256 petId) public view returns(address){
    return adopters[petId];
  }
}
