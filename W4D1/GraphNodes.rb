
class GraphNode

    attr_accessor :value, :neighbors

    def initialize(value)
        @value = value
        @neighbors = []
    end



end

def bfs(starting_node, target_value)
        
    queue = []

    visted = []

    queue << starting_node if !visted.include?(starting_node)

    # while !queue.empty?  =>> forgot FIFO
    #     queue.each do |node|
    #         return node if node.value == target_value
    #         visted << node
    #         if node.neighbors
    #             queue << node.neighbors if !visted.include?(node.neighbors) =>> 
    #         end
    #         queue.shift
    #     end
    # end

    while !queue.empty? #could use until
        first = queue[0]
         
        if first.value == target_value
            return first 
        elsif first.neighbors
            first.neighbors.each do |neighbor|
                queue << neighbor if !visted.include?(neighbor)
            end
            visted << first
            queue.shift
        end
    end

    nil   
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

#p a
p bfs(a, "b")
p bfs(a, "f")