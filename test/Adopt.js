var Adoptions=artifacts.require("Adoptions");

contract("Adoptions",function(accounts){
  owner=accounts[0];
  buyer=accounts[1];

  it("should adopt a pet with valid id",async()=>{
    const adoption=await Adoptions.deployed();
    let petId=await adoption.adoptPet.call(3,{from:owner});
    //console.log(petId);
    assert.equal(petId,3,"Pet adopted");
  })

  it("should return adopter address",async()=>{
    const adoption=await Adoptions.deployed();
    await adoption.adoptPet(6,{from:buyer});
    let address=await adoption.getAdopter(6);
    assert.equal(address,buyer,"Address verified");
  })
});
