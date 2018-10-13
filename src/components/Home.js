import React from "react";

import withAuthorization from "./withAuthorization";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);

//# admin page role example
// const AdminPage = () =>
//   <AuthUserContext.Consumer>
//     {authUser =>
//       <div>
//         <h1>Admin</h1>
//         <p>Restricted area! Only users with the admin rule are authorized.</p>
//       </div>
//     }
//   </AuthUserContext.Consumer>

// const authCondition = (authUser) => !!authUser && authUser.role === 'ADMIN';

// export default withAuthorization(authCondition)(AdminPage);
