import API from "../axios";

export const getLoginCallback = async (code, redirect_uri) => {
    const resp = await API.get(
        `/auth/login/oauth2/callback?code=${code}&redirect_uri=${redirect_uri}`
    );
    return resp;
};

// 노트 조회하기 (GET)
export const getNotes = async (userID) => {
    const resp = await API.get("/note/preview");
    return resp;
};

// 노트 상세 조회하기 (GET)
export const getNote = async (noteId) => {
    const resp = await API.get(`/note/detail?noteId=${noteId}`);
    return resp;
};

// 연락 폼 보내기 (POST)
export const sendContact = async (name, email, message) => {
    const req = {
        name: name,
        email: email,
        message: message,
    };

    return await API.post("/contact", JSON.stringify(req));
};
