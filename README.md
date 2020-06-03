# learning-react-habitat-by-example

Learning [react-habitat](https://github.com/DeloitteDigitalAPAC/react-habitat) library by creating a simple app. react-habitat is an open-source library created by [Deloitte](https://www2.deloitte.com/). useful if you want to mount multiple components in a page. The main features that we are using in this repo is:

- Mounting multiple components in a single HTML page
- Experiments on sharing prop data between component through data attributes on html
- Adding custom css for styling


## Setup

This is a Javascript React project. Set up by using create-react-app and ejected all the configs for customisation.

```bash
# create project
npx create-react-app learning-react-habitat-by-example

# Install react-habitat
npm install --save react-habitat

# eject
npm run eject
```
## Get started

```bash
# Install dependencies
npm i

# start app
npm start

# build app
npm run build

# Run tests
npm test
```
# Notes

To access global variable through the window object, we first need to have the script tag to define it.

```html
<script>
  var formData = window.formData = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "mobile": "",
    "favouriteFramework": ""
  };
</script>

...

<div 
  data-component="FormComponent"
  data-prop-form-title="Personal Information"
  data-r-prop-form-data='formData'></div>
```

Then, we can access it through props.

We updating window object or using props.proxy to update the data does not re-render components. Neither of them doesn't trigger React component update.

```js
props.proxy.formData = {
  firstName,
  lastName,
  email,
  mobile,
  favouriteFramework,
};

global.window.formData = {
  firstName,
  lastName,
  email,
  mobile,
  favouriteFramework,
};
```

# REFERENCES

Helpful references that comes with create-react-app README

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify