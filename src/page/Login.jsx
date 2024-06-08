import React, { useEffect } from "react";
import { getLoginCallback } from "../api/userService";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../atom/User";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        console.log("Code >> ", code);

        const redirect_uri = window.location.origin + "/login";
        console.log(redirect_uri);

        // 로그인 콜백 API 호출
        getLoginCallback(code, redirect_uri).then((data) => {
            // 성공 시, LocalStorage에 토큰 저장 후
            // 노트 홈으로 이동

            const token = data.token;
            setUser(token);
            window.localStorage.setItem("token", token);
            navigate("/my");
        });
    }, []);

    return <div></div>;
}
