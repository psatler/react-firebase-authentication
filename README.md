# Reactjs with Firebase Authentication

> A live demo of the project is found [here](https://react-firebase-authentication.herokuapp.com/).

This a simple Reactjs project showcasing use of firebase authentication. It has both public and private endpoints. Private endpoints are protected using session handling.

For users that signs in through email/password in the website, it is also possible to make password modifications (like reset or change password). For users that signs in using Facebook, this feature is disabled.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Some Endpoints

- `/`: it's the root route, also called the landing page.
- `/signin`: where the user is able to login either through Facebook or via email/password
- `/signup`: where the user can signup using email/password.
- `/account`: protected endpoint, available only for users registered using email/password. At this endpoint, they can modify/reset their password.
- `/home`: protected endpoint, reachable only for authenticated users.

## How to run

Do the following:

```
git clone https://github.com/psatler/react-firebase-authentication.git
cd react-firebase-authentication
npm start
```

A live demo of the project can be found [here](https://react-firebase-authentication.herokuapp.com/)

## How to Deploy

Make sure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed. Then, just follow [this](https://github.com/mars/create-react-app-buildpack#quick-start) instructions.

Remember to add your new domain to the Firebase Console: firebase console -> Authentication -> Sign-in Method Tab -> Authorized Domains Section (at the bottom of the page)

NOTE: for the Facebook Login button, you need to create an app at [Facebook Developers](https://developers.facebook.com/).

## Main Dependecies

- [React Router 4](https://reacttraining.com/react-router/core/guides/philosophy): Declarative Routing for React.js
- [React Context API](https://reactjs.org/docs/context.html): Context provides a way to pass data through the component tree without having to pass props down manually at every level
- [Firebase](https://firebase.google.com/): Build apps fast, without managing infrastructure
- [React Social Login Buttons](https://www.npmjs.com/package/react-social-login-buttons): A simple package to display social login buttons using React.
- [Reactstrap](https://reactstrap.github.io/): Easy to use React Bootstrap 4 components.
- [Bootstrap](https://getbootstrap.com/): Free and open-source front-end framework for designing websites.

## License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT) © Pablo Satler 2018
