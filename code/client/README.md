#Global Prequisites
Install the below packages
`npm install -g express`
`npm install -g express-generator`
`npm install -g yo`
`npm install -g grunt-cli bower generator-karma generator-angular`
`npm install -g nodemon`
`npm install -g mongoose`
`npm install -g bcrypt`
`npm install -g cli-color`
`npm install -g moment`
`npm install -g underscore`
`npm install -g cors`

# client

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.16.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.


## For production and Testing in Server

For building and sending minified version to server :- `grunt build`


#Server
Install the below packages: 
`npm install mongoose --save`
`npm install bcrypt --save`
`npm install cli-color --save`
`npm install moment --save`
`npm install underscore --save`
`npm install cors --save`


#Database
Install MongoDB and 
Run the below command from outside the code directory where code and data folders are present.
`mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend`


#Miscellaneous:
Package.json: For windows
change the scripts object, start key's value to 
"start": "SET NODE_ENV=production&& node ./bin/www"

Package.json: For Mac/Linux
change the scripts object, start key's value to 
"start": "NODE_ENV=production node ./bin/www"