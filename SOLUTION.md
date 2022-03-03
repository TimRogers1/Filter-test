SOLUTION
========

Estimation
----------
Estimated: n hours
24 hours

Spent: x hours
30 hours

Solution
--------
Comments on your solution

*Data Grid*
I began my process by running the data on a backend on localhost:3001/products by running json-server data/products.json —port 3002

The next step was to import a ready made data grid with pagination via material-ui. This saved a lot of time instead of builing one myself so i could focus on the functionality

By importing the data via useEfffect and axios as i was able to fill my data grid with all the information everytime the customer loads the page

*Filter*

 I created a state for the animal so when the user typed in the animal input field a onChange function would search through the data and make a match. When a match was found the function would pass props to another function which would show the data in the data grid.  



*Improvements*
I could of spend a lot more time on the styling and really made a very striking page.
