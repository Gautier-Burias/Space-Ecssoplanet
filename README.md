ATTENTION -  If the site has too few fps, you must disable the "filter: brightness(70%);" in the".backgroundI" /!\

When you arrive on the site, we must click on a button that displays text, then allowing you to understand what the interface will show.

# THIS PROJECT

For this project, I mainly used css animations to move my elements and make them interact with each other. I also used Javascript, mainly for addEventListener, allowing to add, remove such class to such elements.

## PLANET

Finally, we go down and we have our playground: the Ecssoplanet planet. By clicking on the "make the planet turn" button, we rotate the border radius of the circle, giving a spherical shape,
When we click on the "make the planet stop" button we remove the class that allowed the border radius to rotate.
We can also change the color of the planet to red, yellow and purple.

## MOON

The planet also has a moon, which we can rotate in orbit around the planet with the "make the moon move" button.
The "Destroy the moon" button is here to give a class to the moon that will activate an animation that will simulate an explosion, making the moon disappear.
Finally, the last button "I regret what i did" allows you to update the page and reset all the changes you have made.

## CONTROL PANEL

At the bottom, we see a "Control Panel" with two buttons, when the "Increase the level of radiation" is pressed, the bars increase, turn red and a panel "Error radiation level too high" appears and reappears all the time.
The second button, "Destroy the nasa connection with the planet" will trigger an animation that will make the ring below disappear.

Note that on the site, there are two white bars that narrow and enlarge, they are here to separate the elements.

## THE PROBLEMS ENCOUNTERED

I had some problems with animation conflicts, sometimes an animation, (the one that turns the rings of the planets for example), prevented some of them from launching and activating themselves.

The orbit of the moon was also a problem, I had trouble making the moon rotate in a linear way around the planet, indeed the keyframes made small stops to the moon all the time.

I also encountered a performance problem with the color change of the planet, I could not put a transition because its last ones were too much, especially on moving borders. 
The code of the smooth transition is this one (commented in the code) 
```bash
/* Transition but its freezing the site -------------------------------------------------
  border[i].classList.add('redplanetanim')
  border[i].style.border = '0.5px solid red'
  border[i].style.boxShadow = '0px 0px 3px #c0392b'
  */
```
I should have made sure that when you press a color change button, you have to check that the planet is stationary otherwise the color change does not start, but I had this idea too late and I don't have time anymore.

I would also have made a more advanced solar system with several moons turning different etc., but I no longer have time to set this up.

## Thank you for reading.
