# lms-backend


###Installation
1. ```git clone``` with your credentials
2. ```cd lms-frontend```

###SetupEnvironment
1. Download Node.js from https://nodejs.org/
2. install gulp ```npm -g install bower gulp```
make sure you are still in the root of the project ```lms-frontend/```
3. ```npm install```
4. ```gulp serve --usehtml```
This will install the node modules and vendor assets along with allow the build for production.

###Local Development Server
```./manage.py runserver``` if you have the backend as well.
or ```gulp serve --usehtml```

Open your browser to ```http://127.0.0.1:8000/```