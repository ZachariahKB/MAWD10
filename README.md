# MAWD10
module 10 bootcamp
 SVG Logo Maker
This Node.js command-line application allows users to generate a simple logo by selecting a color, shape, and providing text for the logo. The generated logo is saved as an SVG file.

Table of Contents
User Story
Acceptance Criteria
Getting Started
Usage
Demo Video
Example SVG
Repository Structure
Testing
Contributing
License
User Story
As a freelance web developer, I want to generate a simple logo for my projects so that I don't have to pay a graphic designer.

Acceptance Criteria
The application prompts the user to input text, text color, and select a shape (circle, triangle, or square) and its color.
After entering input for all prompts, an SVG file named logo.svg is created, and the output "Generated logo.svg" is printed in the command line.
The generated SVG file displays a 300x200 pixel image matching the user's criteria.
Getting Started
To use this application, clone the repository to your local machine. Navigate to the project directory and install dependencies using npm:

bash
Copy code
npm install
Usage
To run the application, use the following command:

bash
Copy code
node index.js
Follow the prompts to enter text, text color, shape, and shape color. Once all prompts are filled, the SVG file will be generated.

Demo Video
For a walkthrough of the application's functionality and tests passing, watch the demo video here.

Example SVG
An example SVG file generated by the application can be found in the examples directory.

Repository Structure
examples/: Contains example SVG files generated with the application.
lib/: Folder for classes or functions.
shapes.js: Defines Triangle, Circle, and Square classes.
shapes.test.js: Jest tests for shapes.
index.js: Entry point for running the application.
package.json: Node.js package configuration.
README.md: Description of the project, setup, and usage instructions.
Testing
Unit tests for the application can be run using Jest. To run the tests, execute the following command:

bash
Copy code
npm test
Contributing
Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or features you'd like to see.

License
This project is licensed under the MIT License.


