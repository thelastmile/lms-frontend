# lms-frontend


###Installation
```
git clone git@github.com:thelastmile/lms-frontend.git
cd lms-frontend
```

###Setup Environment
Node is used to download and install packages used for the build process.

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

## Directory Structure

### Included in git repo
* `app/` <- compiled files live here don't touch for dev, copy these to prod
* `src/` <- all of your dev files
* `tests/` <- you know what those are
* `vendor/` <- some fixed vendor files for the Naut theme
* `index.html` <- DONT TOUCH ME!  you'll be sad when your changes are overwritten.  Instead modify `src/html/index.html`
* `src/html/index.html` <- the main file that loads up everything else
* `src/js/` <- this is where all of the magic happens.  make your AngularJS changes here.
* `src/less/` <- css with magic
* `src/less/styles.less` <- your less config/import file.

### *should* be excluded from commits but you will have locally is prod or dev deployments
* `bower_components/`
* `node_modules`

## Production
* `npm install`
* `gulp build --usehtml`
* `aws s3 sync . s3://tlm-lms-master --exclude="*" --include="vendor*" --include="src*" --include=index.html --acl public-read`
