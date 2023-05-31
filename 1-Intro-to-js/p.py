# Python3 code to demonstrate working of
# Multiple indices Replace in String
# Using loop + join()
 

test_str = 'My name is Kunal'

print("The original string is : " + test_str)
test_list1 = [2]
test_list = [5]
repl_char = '#'
repl_char1 = '*'
temp = list(test_str)
for idx in test_list1:
    temp[idx] = repl_char1
res = ''.join(temp)
temp = list(res)

for idx in test_list:
    temp[idx] = repl_char
res = ''.join(temp)
print("The String after performing replace : " + str(res))