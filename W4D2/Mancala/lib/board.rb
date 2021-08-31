require 'set'
require 'player.rb'

class Board
  attr_accessor :cups, :player1, :player2

  def initialize(name1, name2)
    @player1 = name1
    @player2 = name2
    @cups = Array.new(14) {[]}
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    cups.map!.with_index do |cup, i|
      if i == 6 || i == 13
        cup
      else
        cup += [:stone] * 4
      end
    end
  end

  def valid_move?(start_pos)
    # case start_pos
    # when !(0..13)
    #   raise 'Invalid starting cup'
    # when nil
    #   raise 'Starting cup is empty'
    # end
    if 0 < start_pos || start_pos > 13
      raise 'Invalid starting cup'
    elsif cups[start_pos].empty? #??
      raise 'Starting cup is empty'
    end
    
  end

  def make_move(start_pos, current_player_name)
    side = nil
    if current_player_name == player1
      side = 1
    else
      side = 2
    end

    onhand = cups[start_pos].length

    @cups[start_pos] = []

    i = start_pos + 1
    while onhand > 0 
      onhand.times do 
        if side == 1 && i == 13
          i = 0
          next
        elsif side == 2 && i == 6
          i += 1
          next
        elsif i == 14
          i = 0
        end

        cups[i] << :stone
        onhand -= 1
        i += 1
        
      end
    end 

    ending_pos = i - 1

    render
    next_turn(ending_pos)
    
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif cups[ending_cup_idx].size == 1
      #render
      :switch
    else #elsif cups[ending_cup_idx].size > 1
      ending_cup_idx
    end

  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    (0...6).all? {|i| cups[i].empty? } || (7...13).all? {|i| cups[i].empty?}

  end

  def winner
    if cups[6].size == cups[13].size
      return :draw
    elsif cups[6].size > cups[13].size
      return player1
    else
      return player2
    end
  end
end
