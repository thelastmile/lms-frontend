# lms-frontend


###Installation
```
git clone git@github.com:thelastmile/lms-frontend.git
cd lms-frontend
```

###Setup Environment
Download Node.js from https://nodejs.org/
from ```lms-frontend/``` directory run:
```
sudo npm -g install bower gulp
npm install
gulp serve --usehtml
```
This will install the node modules and vendor assets along with allow the build for production.

###Local Development Server
Fire up your backend server => [https://github.com/thelastmile/lms-backend](https://github.com/thelastmile/lms-backend)

Fire up your frontend
```gulp serve --usehtml```

Open your browser to [http://127.0.0.1:3000](http://127.0.0.1:3000) after gulp spins up the server

###Getting the latest updates
```
cd <appdir>
git checkout master
git pull
npm install
gulp serve --usehtml
```