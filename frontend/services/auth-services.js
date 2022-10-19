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
    let user = await response.json();
    return user;
};
