import API from "../axios";

export const getLoginCallback = async (code, redirect_uri) => {
    const resp = await API.get(
        `/auth/login/oauth2/callback?code=${code}&redirect_uri=${redirect_uri}`
    );
    return resp;
};

// 토큰 검증
export const checkToken = async (token) => {
    const resp = await API.get(`/auth/verify?token=${token}`);
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
