import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import API from "../axios";
// import { auth } from "../fbase";

// 구글 로그인
// export const googleLogin = async () => {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider);
// };

// 로그인 (POST)
export const login = async (user) => {
    const resp = await API.post("/user/login", JSON.stringify(user));

    if (resp.data.isSuccess) {
        const user = {
            userName: resp.data.result.userName,
            userID: resp.data.result.userID,
        };

        return user;
    }
};

// 노트 조회하기 (GET)
export const getNotes = async (userID) => {
    const resp = await API.get("/mynote", {
        params: { userID: userID },
    });

    console.log(resp);

    if (resp.data.isSuccess) {
        return resp.data.result;
    }
};

// 노트 상세 조회하기 (GET)
export const getNote = async (userID, noteID) => {
    const resp = await API.get("/note/detail", {
        params: { userID: userID, noteID: noteID },
    });

    console.log(resp);

    if (resp.data.isSuccess) {
        return resp.data.result;
    }
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
