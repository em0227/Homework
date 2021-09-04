require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name: "Emily")}#, :titleize => "Chef Emily the Great Baker")} this can works  #1. try to put the method here but won't work 2. didn't put the name method, put the name in the double's first '' originally but still works like that
  let(:test) { Dessert.new('brownie', 50, chef)} #put 'Emily' as chef at first, changed then it work for serve method.

  describe "#initialize" do
    
    it "sets a type" do
      expect(test.type).to eq('brownie')
    end

    it "sets a quantity" do
      expect(test.quantity).to eq(50)
    end

    it "starts ingredients as an empty array" do
      expect(test.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new('cake', 'ten', 'Em')}.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      test.add_ingredient('chocolate')
      expect(test.ingredients).to eq(['chocolate']) #can also use to include
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      original_ingre = ['chocolate', 'milk', 'flour']
      test.add_ingredient('chocolate')
      test.add_ingredient('milk')
      test.add_ingredient('flour')
      #original_ingre = test.ingredients #doesn't work due to psr
      expect(test.mix!).to_not eq(original_ingre) 
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      test.eat(20)
      expect(test.quantity).to eq(30)
    end

    it "raises an error if the amount is greater than the quantity" do 
      #test.eat(60)
      expect {test.eat(60)}.to raise_exception #or can do to raise_error("not enough left!")   
    end

  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
     allow(chef).to receive(:titleize).and_return("Chef Emily the Great Baker") #no matter here or in double, can't use #{name}
      expect(test.serve).to eq("Chef Emily the Great Baker has made 50 brownies!")
    end

  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      # allow(chef).to receive(:bake(test)).and_return {
      #   test.mix!
      #   test.heat!}
      allow(chef).to receive(:bake).with(test)
      test.make_more
      #expect(test.mix!)
      #expect(test.temp).to eq(400)
    end
  end
end
