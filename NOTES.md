# Notes

## Description



To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

**Input**

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

**Output**

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example

```
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
```

## Domain 
- input: 
    - list of pairs (ints): 
        - ex: `[[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]`
    - pairs `["person's age", "person's handicap"]`
- output: list of string stating whether the member's category is `senior` or `open`
- **RULES**:
    - To be a senior:
        - 55 years or older
        - handicap greater than 7


---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG 

---

TODO:

# Pomodoro 1 🍅:
- initial setup
    - change function name in src/test folders ✅
    - update README ✅
    - update NOTES with kata description ✅
    - domain description ✅
    - update package.json ✅
