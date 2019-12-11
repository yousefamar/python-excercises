---
title: Animation
author: Yousef Amar
---

# Create an old-school DVD screensaver

## Part 1

Run the below code. Given that the `render` function is called every 10 milliseconds, how many frames per second are rendered? There are 1000 milliseconds in a second. What is the square's speed in pixels per second?

```python
from tkinter import *

c = Canvas(Tk(), width = 500, height = 500)
c.pack()

x = 0
y = 0
size = 50

def render():
    global x
    global y
    c.delete("all")

    c.create_rectangle(x, y, x + size, y + size, fill="black")
    x = x + 1
    y = y + 1

    c.after(10, render)

render()
mainloop()
```

## Part 2

Detect when the square reaches the bottom right corner. When it does, have it change direction such that it moves by (-1, -1) per frame, and also have it change colour to a colour of your choice. Refer to documentation for a list of valid colours.

## Extra

- Detect when the square reaches any edge of the canvas and have it flip its movement direction corresponding to that edge (top, bottom, left, right)
- Use the `choice()` function from the `random` library to select a random colour from a list of colours to switch to every time the square hits an edge
- Set the window size to have a different width and height and see if the square will ever hit a corner (if at all)
