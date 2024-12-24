def most_frequent_string_lengths(strings):
    # Calculate string lengths
    lengths = [len(s) for s in strings]
    
    # Count frequencies
    frequency = {}
    for length in lengths:
        if length in frequency:
            frequency[length] += 1
        else:
            frequency[length] = 1
    
    # Identify most frequent length and filter strings
    max_freq = max(frequency.values())
    most_frequent_lengths = [length for length, freq in frequency.items() if freq == max_freq]
    result = [s for s in strings if len(s) in most_frequent_lengths]
    
    return result

# Test cases
print(most_frequent_string_lengths(['a', 'ab', 'abc', 'cd', 'def', 'gh']))  # Output: ['ab', 'cd', 'gh']
print(most_frequent_string_lengths(['hello', 'world', 'hi', 'python']))     # Output: ['hello', 'world', 'python']
print(most_frequent_string_lengths(['a', 'b', 'c', 'd']))                   # Output: ['a', 'b', 'c', 'd']

# Unit Test
def test_most_frequent_string_lengths():
    assert most_frequent_string_lengths(['a', 'ab', 'abc', 'cd', 'def', 'gh']) == ['ab', 'cd', 'gh']
    assert most_frequent_string_lengths(['hello', 'world', 'hi', 'python']) == ['hello', 'world']
    assert most_frequent_string_lengths(['a', 'b', 'c', 'd']) == ['a', 'b', 'c', 'd']
    print("All tests passed.")

# Run unit test
test_most_frequent_string_lengths()
