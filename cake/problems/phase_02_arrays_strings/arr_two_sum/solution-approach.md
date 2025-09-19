## **1️⃣ Brute Force Approach**

**Idea:**

- Check **all pairs** of elements to see if their sum equals the target.

**Steps:**

1. Loop through the array from index `i = 0` to `n-1`.
2. For each `i`, loop through the array from index `j = i+1` to `n-1`.
3. Check if `arr[i] + arr[j] == target`.
4. If yes, return the pair (or indices).

**Time Complexity:** O(n²)
**Space Complexity:** O(1)

**Pros:** Simple and easy to implement.
**Cons:** Slow for large arrays.

---

## **2️⃣ Using a Hash Set / Hash Map (Optimized Approach)**

**Idea:**

- Use a **set** to keep track of numbers we’ve seen so far.
- For each number `num`, check if `target - num` exists in the set.

**Steps:**

1. Initialize an empty set `seen = {}`.
2. Loop through each element `num` in `arr`.
3. Compute `needed = target - num`.
4. If `needed` exists in `seen`, we found the pair.
5. Otherwise, add `num` to `seen` and continue.

**Time Complexity:** O(n)
**Space Complexity:** O(n)

**Pros:** Very fast, single pass.
**Cons:** Uses extra space.

---

## **3️⃣ Two Pointers Approach (Array must be sorted)**

**Idea:**

- Sort the array first.
- Use two pointers `left` and `right` to find the sum.

**Steps:**

1. Sort the array.
2. Initialize `left = 0`, `right = n-1`.
3. While `left < right`:

   - Compute `current_sum = arr[left] + arr[right]`.
   - If `current_sum == target`, return the pair.
   - If `current_sum < target`, move `left++`.
   - If `current_sum > target`, move `right--`.

**Time Complexity:** O(n log n) (sorting) + O(n)
**Space Complexity:** O(1)

**Pros:** No extra space needed.
**Cons:** Array must be sorted (changes original order).

---

✅ **Summary:**

- Brute force → simple, slow.
- Hash Set → fastest for unsorted arrays.
- Two Pointers → efficient if you can sort the array.
