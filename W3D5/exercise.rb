
class Stack
    def initialize
        @stack = []
    end

    def push(el)
        @stack << el
    end
    
    def pop
        @stack.pop
    end

    def peek
        @stack[-1]
    end
end

class Queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue.push(el)
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue[0]
    end
end

class Map
    def initialize
        @map = Hash.new {|h, k| h[k] = []}
    end

    def set(key, value)
        if !@map.has_key?(key)
            @map[key] = value
        else
            delete(key)
            @map[key] = value
        end
    end

    def delete(key)
        @map.delete(key)
    end

    def get(key)
        @map[key]
    end

    def show
        @map
    end

end

