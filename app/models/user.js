export class User {

  email = '';
  isAuthenticated = false;

  loggedIn(email) {
    this.email = email;
    this.isAuthenticated = true;
  }

}
