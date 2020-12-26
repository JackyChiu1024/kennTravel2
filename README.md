# React JS Landing Page Template


### <a href="https://react-landing-page-template.herokuapp.com">LIVE DEMO</a> 

## Description
This is a ReactJS based landing page template, fit for a startup company/service with a one page view. The design is inspired by a template from <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/">Free-CSS.com </a>
All 'visual' data can be easily modified by changing the data.json file.

## Make it Yours!
### 1. Preps
You will need to have <a href="https://nodejs.org/">Node JS</a> installed on your pc. 

### 2. Clone Files
After cloning the files, you will have to run ```yarn``` followed by ```yarn start``` in the CLI
### 3. Add your own data 
Change the data in the ```data.json``` file as well as add any images to ```public/img/```
You can also change styles by modifying the ```public/css``` files.


## Credits
##### Free CSS 
<a href="https://www.free-css.com/assets/files/free-css-templates/preview/page234/interact/">Free-CSS.com </a>

##### Issaaf kattan


## deploy to gitpage
### 1. npm init 
run> npm init react-app <app-name>

### 2. install gh-pages
run> npm install gh-pages --save-dev

### 3. modify package.json
add homepage, e.g,  
  "name": "kenntravel2",  //repository name
  "homepage": "http://www.kenntravel.rf.gd",  // or https://{account}.github.io/{repository name}
  "private": true,

add predeploy and deploy script

  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

  ### 4. deploy
  run> npm run build
  run> npm run deploy

  ## install package
  npm install react-scripts --save
  npm install -g yarn