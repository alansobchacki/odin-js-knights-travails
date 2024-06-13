Project: Knights Travails
=============

An algorithm that outputs the shortest path a Knight can take from one square to another in a Chess board.

Here's the [live project demo.](https://alansobchacki.github.io/odin-js-knights-travails)

About
-----

This project was completed as part of [The Odin Project](https://www.theodinproject.com/) [Javascript](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript) curriculum. It is the eleventh project required for completion of the JavaScript Course [11/12].

These were the project requirements:

- [x] build a function that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.


What I Learned
-----

The hardest project I've came across The Odin Project, so far. While I was familiar with Breadth First Search algorithms, learning about graphs, vertices, and edges was interesting. The concept themselves weren't hard, but translating them into code was tough.

Notes
-----

The function knightTravails() takes two parameters: the starting square, and the ending square. If you open the console, this function is called with the parameters of ([0, 0], [3, 3]), and correctly outputs the smallest path possible ([0,0] -> [2,1] -> [3,3]) and how many steps were required (2). 

My main goal was to build a working algorithm. Allowing users to tweak the parameters through DOM manipulation wasn't a goal, but I'll implement this later. It just feels a waste to design an algorithm like this and not allow people to test this function with different parameters. 

Alas, I have more shiny toys in mind to build.
