The **_Chief Chronicler_** is always present for the grand Hobbit Festival in the Shire, but he hasn't been seen in months! The last anyone heard, he was travelling to sites of great historical significance across Middle-earth. A group of **Elvish Senior Chroniclers** has asked you to join them as they search the places they believe he might have visited.

Before you’ve even begun your journey, the group of Elvish Chroniclers encounters an issue: their map of locations is currently _empty_. After much debate, someone suggests starting the search in the Chief Chronicler’s study.

Upon entering the study, it’s clear the Chief Chronicler is nowhere to be found. However, the Chroniclers discover scattered notes containing lists of historically significant locations! These appear to be part of the Chief Chronicler’s planning before he disappeared. Perhaps these notes can help determine which locations to search?

Interestingly, the locations aren’t named but are identified by unique numbers called _location IDs_. To avoid missing anything, the Chroniclers divide into two groups, each creating their own list of location IDs based on the notes.

There's just one problem: when the two lists are compared _side by side_ (your text file), they don’t match. Maybe you can help reconcile the lists?

### For example:

```
List 1      List 2
  3           4
  4           3
  2           5
  1           3
  3           9
  3           3
```

Perhaps the differences are minor! To figure this out, pair up the numbers from both lists and calculate how far apart they are. Pair the _smallest number in the left list_ with the _smallest number in the right list_, then the _second-smallest number_ in each list, and so on.

For each pair, calculate the _distance_ between the two numbers and add up all these distances. For example, pairing `3` from the left list with `7` from the right list yields a distance of `4`; pairing `9` with `3` yields a distance of `6`.

Using the example lists above, the pairs and their distances are as follows:

-   The smallest number in the left list is `1`, paired with the smallest in the right list, `3`. The distance is `2`.
-   The second-smallest in the left list, `2`, pairs with the next `3` from the right list. The distance is `1`.
-   The third-smallest in both lists is `3`, resulting in a distance of `0`.
-   Next, `3` pairs with `4`, for a distance of `1`.
-   The next `3` pairs with `5`, for a distance of `2`.
-   Finally, the largest number in the left list, `4`, pairs with the largest in the right list, `9`, for a distance of `5`.

To calculate the _total distance_ between the lists, sum the distances for all pairs: `2 + 1 + 0 + 1 + 2 + 5`, which equals `*11*`.

Can you help the Chroniclers resolve their lists and find the Chief Chronicler before the festival ends?
