import API from "../axios";

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

// 노트 저장하기 (POST)
export const saveNote = async (body) => {
    return API.post("/note", body, {
        headers: {
            "Content-Type": `multipart/form-data`,
        },
    });
};

// 노트 삭제하기 (DELETE)
export const deleteNote = async (noteId) => {
    const resp = await API.delete(`/note?noteId=${noteId}`);
    return resp;
};

// 태그 검색하기 (GET)
export const searchTag = async (userID, searchWord) => {
    const resp = await API.get("/tag/search", {
        params: { userID: userID, searchWord: searchWord },
    });

    console.log(resp);

    if (resp.data.isSuccess) {
        return resp.data.result;
    }
};
