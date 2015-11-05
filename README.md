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
```./manage.py runserver``` <- requires backend  [https://github.com/thelastmile/lms-backend](https://github.com/thelastmile/lms-backend)

```gulp serve --usehtml```

Open your browser to [http://127.0.0.1:3000](http://127.0.0.1:3000) after gulp fires up the server 

NOTE: you may need to disable CORS for local dev!  If you can't login this is typically why.
Disable CORS for the session -> http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome
