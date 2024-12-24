def sum_of_top_two(numbers):
    if len(numbers) < 2:
        raise ValueError("The list must contain at least two integers.")
    
    # Find the two largest integers
    first, second = float('-inf'), float('-inf')
    for number in numbers:
        if number > first:
            second = first
            first = number
        elif number > second:
            second = number
    
    # Calculate the sum
    return first + second

# Test cases
print(sum_of_top_two([1, 4, 2, 3, 5]))  # Output: 9
print(sum_of_top_two([10, 20, 30, 40, 50]))  # Output: 90
print(sum_of_top_two([-1, -2, -3, -4, -5]))  # Output: -3

# Unit Test
def test_sum_of_top_two():
    assert sum_of_top_two([1, 4, 2, 3, 5]) == 9
    assert sum_of_top_two([10, 20, 30, 40, 50]) == 90
    assert sum_of_top_two([-1, -2, -3, -4, -5]) == -3
    print("All tests passed.")

# Run unit test
test_sum_of_top_two()
