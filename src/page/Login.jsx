import React, { useEffect } from "react";
import { getLoginCallback } from "../api/userServics";

export default function Login() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        console.log("Code >> ", code);

        // 로그인 콜백 API 호출
        getLoginCallback(code).then((data) => {
            // 성공 시, LocalStorage에 토큰 저장 후
            // 노트 홈으로 이동
        });
    }, []);

    return <div></div>;
}
