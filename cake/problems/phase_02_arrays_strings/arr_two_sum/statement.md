# Problem statement: Find Two Elements with a Given Sum

**Problem Statement:**
Given an array of integers `arr` and an integer `target`, write a program to **find two distinct elements in the array whose sum is equal to `target`**.

Return the **indices** of the two elements or the **elements themselves**. If no such pair exists, indicate that no solution is found.

**Input:**

- An array of integers: `arr = [2, 7, 11, 15]`
- A target sum: `target = 9`

**Output:**

- A pair of numbers or their indices whose sum is equal to `target`.
- Example: `[2, 7]` or indices `[0, 1]`

**Constraints:**

- The array can contain positive or negative integers.
- Each input has **exactly one solution** (for simplicity in basic version).
- You may not use the same element twice.

**Example 1:**

```
Input: arr = [1, 4, 5, 3, 2], target = 7
Output: [4, 3]  # because 4 + 3 = 7
```

**Example 2:**

```
Input: arr = [1, 2, 3, 4], target = 8
Output: No solution found
```

**Follow-up / Optimization:**

- Can you solve it in **O(n)** time using extra space?
- Can you solve it in **O(n log n)** time without extra space?
