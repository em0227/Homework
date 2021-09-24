
module Toyable
  extend ActiveSupport::Concern

  included do
    has_many :toys, as :toyable
  end

  def receive_toy(name)
    @toy = Toy.find_or_create_by(name: name)
    #@toy = Toy.new(name: name) unless @toy
    # self.toys << @toy  not sure if I can do this
    @toy.toyable_id = self.id  #not sure if I do it this way
    #solution: self.toys.find_or_create_by(name: name)
  end
end