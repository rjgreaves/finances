export class User{

    email = "";
    isAuthenticated = false;

    constructor(){
    }

    loggedIn(email) {
        this.email = email;
        this.isAuthenticated = true;
    }

    loggedOut() {
        this.email = "",
        this.isAuthenticated = false;
    }
}
