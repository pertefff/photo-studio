const authProvider = {
    // called when the user attempts to log in
    login: ({ login, password }) =>  {
        const request = new Request('http://localhost:5000/api/admin/authenticate', {
            method: 'POST',
            body: JSON.stringify({ login, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        console.log("request admin - ", request);
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('username', JSON.stringify({login}));
                console.log("entered!")
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("username");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem("username")
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

export default authProvider
