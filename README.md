# lms-frontend


###Installation
1. ```git clone git@github.com:thelastmile/lms-frontend.git```
2. ```cd lms-frontend```

###Setup Environment
1. Download Node.js from https://nodejs.org/
2. install gulp ```sudo npm -g install bower gulp```
make sure you are still in the root of the project ```lms-frontend/```
3. ```npm install```
4. ```gulp serve --usehtml```
This will install the node modules and vendor assets along with allow the build for production.

###Local Development Server
```./manage.py runserver``` <- requires backend  [https://github.com/thelastmile/lms-backend](https://github.com/thelastmile/lms-backend)

```gulp serve --usehtml```

Open your browser to [http://127.0.0.1:3000](http://127.0.0.1:3000) after gulp fires up the server 
