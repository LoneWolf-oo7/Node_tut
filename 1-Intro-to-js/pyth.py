# # initializing string
# test_str = "Apeksha"
# #Dpeasha
 
# # printing original string
# print("The original string is : " + str(test_str))
 
# # Using nested replace()
# # Replace multiple characters at once
# res = test_str.replace('A', '%temp%').replace('k', 'a').replace('%temp%', 'D')
 
# # printing result
# print("The string after replacement of positions : " + res)

# Python program for the above approach
 
# Function to replace all the occurrences
# of the substring S1 to S2 in string S
def modifyString(s, s1, s2):
    ans = ""
    i = 0
    position = 0
    # k=0
    while i < len(s):
        k = 0
        if s[i] == s1[k] and i + len(s1) <= len(s):
            j = i
            while j < i + len(s1) and s[j] == s1[k]:
                k += 1
                j += 1
            if j == i + len(s1):
                ans += s2
                i = j - 1
            else:
                ans += s[i]
        else:
            ans += s[i]
        i += 1
        # print(j)
    print(ans)
 
# Driver Code
S = "geeksforgeeks"
S1 = "eek"
S2 = "ok"
modifyString(S, S1, S2)