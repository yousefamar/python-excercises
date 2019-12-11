---
title: Playing cards
author: Yousef Amar
---

# Shuffle a deck of cards

![Playing cards](img/cards.png)

There are 52 cards in a deck of playing cards. The <i>ranks</i> go from ace to king and the <i>suits</i> are one of clubs, spades, hearts, and diamonds.

## Part 1

Create a playing card class that has properties to store rank and suit. The class should override the `__str__` function, such that printing a card prints its rank and suit. For example, `5 of hearts`.

## Part 2

Generate a list of card objects that contains all 52 cards in a deck. Write a function that prints every card in this list. Then write a second function that takes a list of cards and shuffles them manually. Your goal is to implement a perfect shuffling algorithm, which has a time complexity of O(N). (Hint: this is the same algorithm that `random.shuffle` uses which you can research).

## Extra

Make your card class `sort`-able, such that a list of cards representing a deck can be sorted the same way a list of numbers can. To do this, you only need to override the `__lt__(a, b)` method, as Python's sort only uses the less-than operator to compare elements. Assume that the order of playing card strength is like in the picture above. Check your implementation by sorting a shuffled deck.
