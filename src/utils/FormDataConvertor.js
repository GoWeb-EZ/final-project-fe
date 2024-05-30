/**
 * A function to convert base64 string to blob
 * @param {string} base64Img
 * @returns
 */
export function base64StringToBlob(base64Img) {
    const base64String = base64Img.split(",")[1]; // 'data:image/jpeg;base64,' 부분 제거
    const byteString = atob(base64String);
    const mimeString = base64Img.split(",")[0].split(":")[1].split(";")[0]; // 이미지의 MIME 타입 추출

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([ab], { type: mimeString });
    return blob;
}

/**
 * A function to convert object to blob
 * @param {Object} object
 * @returns
 */
export function objectToBlob(object) {
    const blob = new Blob([JSON.stringify(object)], {
        type: "application/json",
    });
    return blob;
}

/**
 * A funtion to create form data for note API
 * @param {Object} note
 * @param {string[]} imgList
 * @param {string[]} textList
 * @returns
 */
export function createNoteFormData(note, imgList, textList) {
    const requestBody = new FormData();

    const blobNote = objectToBlob(note);
    requestBody.append("CreateNoteRequestDTO", blobNote);

    imgList.forEach((item, index) => {
        const blobImg = base64StringToBlob(item, textList[index]);
        requestBody.append("images", blobImg);
    });

    return requestBody;
}
