

export const getUserInfo = async (userId) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`)
    let userInfo = await response.json();
    console.log(userInfo)
    return userInfo;
}
