

export const createNote = async (noteData, token) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(noteData),
    });
    let data = await response.json();
    console.log(data);
    return data;
};

export const getNoteAuthor = async (authorId, token) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${authorId}/`);
    let authorData = response.json();
    return authorData;
};

export const getUserNotes = async (token) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-notes`, {
        method: "GET",
        headers: {
            "Content-Type": "application-json",
            Authorization: `Token ${token}`,
        },
    });
    return response.json();

};

export const deleteNote = async (noteId, token) => {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notes/${noteId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application-json",
            Authorization: `Token ${token}`,
        },
    });
    return response.json();
}