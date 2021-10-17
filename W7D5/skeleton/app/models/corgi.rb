#require_relative 'application_record.rb'

class Corgi < ApplicationRecord
    
    include Toyable
end

# c = Corgi.new(name: 'socute')
# c.save
# c.receive_toy('string')
