##### INTRO TO NODE & EXPRESS

🚩 Exporting from Node Script:-

* module.exports and exports

🚩 Importing into Node Script:-

* require()
  - if passed a path, it will run the script
  - if passed a string, it will look in node_modules/

🚩 Node Modules:-

* Similar to libraries in C or Python
* More than 350,000 modules in the NPM registry

💡 NPM:-

* Node Package Manager
* Automates installing, upgarding, removing modules
* Install package with `npm install [-g] <package_name>`
* Manage your own configuration file within `package.json`

💡 package.json :-

* Defines configuration for your application
* Some tags define metadata: name, author, version
* Define scripts in "scripts" object
* Track dependencies and devDependencies

🚩 NPM commands:-

* `npm install` installs all dependencies
* `npm install --save <package>` install package and adds to package.json
* `npm run <script_name>` runs <script_name> from the scripts object

💡 EXPRESS:-

* Minimalist web application framework
* Similar to Flask in Python
* Very powerful routing system

🤔 Express Routing:- 

* app.<method>(<path>, callback)
  - <method> is an all-lowercase HTTP request method (get, post, etc.)
  - <path> is the visited path in the URL
  -  callback is the function that takes 2-3 parameters
     > req - request object
     > res - response object
     > next - optional callback function


