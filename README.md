weatherapp
==========
by Edwin Leong

Summary
==========
This javascript application takes in a user specified city and returns the five day forecast as given by Yahoo Weather. If the city does not exist, Yahoo will return an error message.


Instructions
==========
Clone the repository and run Weather.html, which exists in the base directory, in either Chrome or Firefox.

Enter the name of the desired city in the box provided and press the 'Find Weather' button to display the five day weather forecast for the given city into the table below.


Known issues
==========
- Cities which share a name can not be distinguished between, work around may involve determining duplicate cities and utilizing their specific ids in the Yahoo query.
- Regions and Countries can also be specified, unintended
- controller.js has not been written for minification
