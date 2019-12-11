---
title: Password checker
author: Yousef Amar
---
# Create a password checker

## Part 1

The two most consistently common passwords in the world are "password" and "123456". Write a program that asks the user for a password and, if it's one of those two, to tell the user that their password is insecure. Otherwise it should tell them that it's secure.

## Part 2

Extend your program to check if the given password is below 8 characters. If it is, the program should tell the user that their password is too short and therefore insecure.

## Extra

Python has built-in functions for checking if a string is all lowercase or all uppercase. These are `foo.islower()` and `foo.isupper()`, where `foo` is a string. For example:

```python
text = "BAR"
print(text.isupper())
# Outputs True
print(text.islower())
# Outputs False
```

Using these functions, extend your password checker to make sure that a given password has at least one uppercase and one lowercase character; if it does not, tell the user that the password is too insecure because it has no uppercase or lowercase characters respectively.
