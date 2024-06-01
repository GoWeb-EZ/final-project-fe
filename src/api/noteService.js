import API from "../axios";

// 노트 저장하기 (POST)
export const saveNote = async (body) => {
    return API.post("/note", body, {
        headers: {
            "Content-Type": `multipart/form-data`,
        },
    });
};

// 노트 삭제하기 (DELETE)
export const deleteNote = async (userID, noteID) => {
    console.log(userID, noteID);
    await API.delete("/note/delete", {
        params: {
            userID: userID,
            noteID: noteID,
        },
    })
        .then((resp) => {
            console.log(resp);
            return resp;
        })
        .catch((e) => {
            console.log(e);
        });
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
