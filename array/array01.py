"""
problem: Find 2 elements with given sum
"""
data = [0, -1, 2, -3, 1]

sum = int(input("Enter Sum: "))

for item in data:
    for i in range(len(data)):
        if data[i] == item:
            pass
        else:
            if item + i == sum:
                print("YES")
                print(item, i)
                break
            else:
                print("NO")