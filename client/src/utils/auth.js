import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isAdmin(){
    
    const decoded = decode(this.getToken());
    // console.log(decoded);
    if (decoded.data.isAdmin){
       return true
    }
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      // console.log(decoded);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
    if (this.isAdmin(idToken)){
      window.location.assign('/admin');
    }
    else{
      window.location.assign('/');
    }
    
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
