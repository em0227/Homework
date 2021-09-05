require 'byebug'

def find_1(arr) #O(n^2)
    longest = ''
    (0...arr.length).each do |idx1|
        (idx1+1...arr.length).each do |idx2|
            current = arr[idx1]
            if current.length < arr[idx2].length
                longest = arr[idx2]
            end
        end
    end
    longest
end

def find_2(arr) #time: O(n log n) space: O(3 log n + 1)
    new_arr = quick_sort(arr)
    new_arr.last
end

def quick_sort(arr)
    return arr if arr.size == 1 || arr.empty?
    #debugger
    middle = arr.shift
    right = arr.select {|ele| ele.length > middle.length}
    left = arr.select {|ele| ele.length <= middle.length}

    quick_sort(left) + [middle]+ quick_sort(right)
end

def find_3(arr)
    longest = ''
    arr.each do |ele|
        if ele.length > longest.length
            longest = ele
        end
    end
    longest
end


arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
#=> "fiiiissshhhhhh"

#p find_3(arr)


def slow_dance(dir, arr)
    arr.each_with_index {|ele, idx| return idx if ele == dir}
end

def fast_dance(dir, data)
    data.each {|k, v| return v if k == dir} #don't need to iterate, solution just uses data[k]
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
new_tiles_data_structure = {
    'up'=>0,
    'right-up'=>1,
    'right'=>2,
    'right-down'=>3
}

# p slow_dance("up", tiles_array)
# #> 0
# p slow_dance("right-down", tiles_array)
#> 3

p fast_dance("up", new_tiles_data_structure)
#> 0

p fast_dance("right-down", new_tiles_data_structure)
#> 3