export const registerUser = async (userData) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    let data = await response.json();
    return data;
};

export const authenticateUser = async (credentials) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    let {token} = await response.json();
    if (token) {
        localStorage.setItem("token", token);
        return token;
    }
    return null;
}

export const getUserFromToken = async (token) => {
    if (!token) {
        return null;
    }
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-user/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
    });
    return response.json();
};
