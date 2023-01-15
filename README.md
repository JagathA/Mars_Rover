## This is an application to move rover(s) around a plateau on Mars which runs in the console.

It was developed using Typescript, OOD and TDD

To run the tests 

npm Install
npm test


## Run application


👉 run this command:

npm install


👉 You can Run the Application by entering

npm start


You should see a Menu and a prompt to enter your choice.

0 = Set Plateau Size

 Enter the maximum dimensions of the Plateau. The input should be in the form X<sp>Y Enter. X and Y should be integer numbers.

 Error Conditions: if X or Y are not numbers the console will display an error.

Option 2 - Set Rover Down - used to place a Rover on the Plateau.

Enter X<sp>Y<sp> Orientation - X Y are position of the rover on the Plateau. Orientation is the direction the Rover is facing. X and Y are numbers and must be within the plateau boundaries. Orientation is either "N" | "E" | "W" | "S" corresponding to the compass directions. 

Error conditions: 
If X or Y is outside the plateau the Rover will be placed at the default (staging) position i.e., 0 0 (bottom left of the plateau). 
If Orientation is not a valid value, then the console will display an error condition. Rover will not be placed on Mars. 
If the plateau is not defined the console will display an error condition. Rover will not ve placed on Mars.

Option 3 - Move Rover - used to move the Rover around the plateau.
Enter - command string to move the Rover. R = Turn Right, L = Turn Left, M = Move 1 space in the direction the rover is facing. eg. MRRMMMLMMLMM

Error conditions:
if move command contains invalid characters (any character other than L, R, M) then the console will display an error condition. Rover will not move.
If the Rover is commanded to move out of plateau boundaries the Rover position will be limited to the maximum limits of the plateau

## Design :
ThingsOnMars class - abstract class for anything on Mars. Provide position attributes.
Rover Class (child of ThingsOnMars class) - responsible for Rover position and movement
Plateau (Grid Class) - handles plateau functionality. Provides a check if any object/Rover is going out of the plateau.
Interface_controller - provides interface to the Rover application
Index.ts - provides console UI. 

Features: 
OO based design. Can easily add other objects and vehicles.
The UI is independent of the Rover implementation. Console module can be replaced by any other module to implement another form of UI. ie. File, graphical.

## Current Limitations
Limited to one Rover. Proposal - extend this to have the ability to have number of Rovers. each Rover to have a ID which the user can use to identify and control different rovers.

Only Rovers present on Mars. By extending the ThingsOnMars class can have other things on mars such as other vehicles, obstacles, Martians etc. 

## Other Future Proposals 
Add a graphical UI which will show Rovers moving on mars
Ability to place/control more than one Rover 
Collision detection
Adding cameras to Rover with graphics showing the camera coverage area
Autonomous Rovers that move on their own without user intervention





