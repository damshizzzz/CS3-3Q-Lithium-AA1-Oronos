<!DOCTYPE html>
<html>
let pi; 
let radius; 
let circumference;
let surfaceArea;
let volume;

pi = 3.14; 
radius = 6.378e6; 
circumference = 2 * pi * radius;
surfaceArea = 4 * pi * (radius**2);
volume = (4 / 3) * pi * (radius**3);
   
   document.getElementById("radius").innerHTML = radius;
   document.getElementById("circumference").innerHTML = circumference;
   document.getElementById("surfaceArea").innerHTML = surfaceArea;
   document.getElementById("volume").innerHTML = volume;
</html>
