## Ambyint Development Exercise

The exercise that I chose is [R2-D2 Adventure](./r2-d2-adventure)

#### Installation

`npm install`

`npm run start`

#### Tests

 `npm test`

#### Technology Used

* Nodejs javascript runtime
* Babel to compile code to es6
* Jasmine for writing unit tests

#### Usage

The goal is for R2-D2 to deliver the Death Star plans to Obi Wan Kenobi. Tatooine is a harsh 100x100 planet which can 
navigated with the following commands:
* **LAND** - Randomly place R2-D2 and Obi Wan Kenobi on the Planet
* **MOVE (x)** - Move R2-D2 x units forward in the current direction
* **LEFT, RIGHT** - Rotate 90 degrees in the respective direction
* **REPORT** - Report the current locations of R2-D2 and Obi Wan. Report the direction R2-D2 is facing. 

The galaxy is in your (R2-D2's?) hands.

##### Example

```$xslt
> LAND
R2-D2 is at 54,0 facing NORTH
Obi Wan Kenobi is at 47,85
> MOVE 85
> REPORT
R2-D2 is at 54,85 facing NORTH
Obi Wan Kenobi is at 47,85
> LEFT
> MOVE 7
Congratulations, you've saved the Rebellion!
```

#### Challenges

I didn't run into any major difficulties with this exercise. One of my biggest challenges however was setting up the
project with babel. It has been quite a while since I have done it, thus I had to do a bit of research
in order to get my program and tests to run with es6 code.
 
Another challenge I faced was implementing a clean way of updating the users position based on rotational input. I finally
settled on a map which takes the current position and a rotational movement (left or right). This in turn retrieves the new
direction of R2D2. It is essentially a lookup table with axis of the current direction and the transformation to apply.


