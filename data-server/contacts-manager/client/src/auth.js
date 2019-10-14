function currentUser() {
    return localStorage.getItem("cm-user");
}

function login(username, password) {
    localStorage.setItem("cm-user", JSON.stringify({
        username: username,
        password: password
    }));
    return;
}

function logout() {
    localStorage.removeItem("cm-user")
}

module.exports = {
    currentUser: currentUser,
    login: login,
    logout: logout
}