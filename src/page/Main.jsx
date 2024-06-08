import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { getNotes, searchTag } from "../api/noteService";
import { userState } from "../atom/User";
import NewNote from "../components/NewNote";
import Note from "../components/Note";
import ImageSearch from "../img/ic_search.svg";
import ImageCancel from "../img/ic_cancelG.svg";

export default function Main() {
    const [noteList, setNoteList] = useState([]);
    const user = useRecoilValue(userState);

    // 검색 상태 (input <-> div)
    const [isSearching, setIsSearching] = useState();
    const [searchWord, setSearchWord] = useState("");
    const [empty, setEmpty] = useState(false);

    // 노트 전체 조회하기 API
    useEffect(() => {
        if (user === null) return;
        getNoteAPI();

        // eslint-disable-next-line
    }, []);

    // 노트 검색하기 API
    function search() {
        setEmpty(false);
        searchTag(searchWord).then((res) => {
            console.log(">> res", res);

            if (!res.success) {
                alert("문제가 발생했습니다. " + res.message);
                return;
            }

            const result = res.result;
            setNoteList(result);
            setEmpty(res.result.length <= 0);
            setIsSearching(searchWord);
        });
    }

    // 노트 조회하기 API
    function getNoteAPI() {
        setEmpty(false);
        getNotes(user.userID).then((res) => {
            if (!res.success) {
                setEmpty(true);
                alert("문제가 발생했습니다. " + res.message);
                return;
            }

            const result = res.result;
            setNoteList(result);
        });
    }

    // 노트 조회 초기화
    function reset() {
        setIsSearching(null);
        setSearchWord("");
        getNoteAPI();
    }

    return (
        <Wrapper>
            <SearchWrapper>
                {isSearching == null && (
                    <>
                        <Search
                            type="text"
                            placeholder="Search tags..."
                            value={searchWord}
                            onChange={(e) => setSearchWord(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) search();
                            }}
                        />
                        <SearchImage src={ImageSearch} onClick={search} />
                    </>
                )}

                {isSearching != null && (
                    <>
                        <SearchResult onClick={reset}>
                            {searchWord}
                        </SearchResult>
                        <SearchImage
                            src={ImageCancel}
                            style={{ width: "14px", marginRight: "15px" }}
                            onClick={reset}
                        />
                    </>
                )}
            </SearchWrapper>
            <MemoWrapper>
                {!isSearching && <NewNote />}
                {noteList.map((note, index) => {
                    return <Note key={index} note={note} />;
                })}
                {empty && <Text>There's no such tag 😅</Text>}
            </MemoWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 1200px;
    min-height: 400px;
    margin: 0 auto;
    margin-bottom: 100px;
    padding: 0 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`;

const SearchWrapper = styled.div`
    width: 100%;
    height: 40px;
    background-color: #f1f1f1;
    border-radius: 30px;
    border: none;

    margin-top: 40px;
    position: relative;
`;

const Search = styled.input`
    width: 100%;
    height: 100%;
    padding: 0 30px;
    background: none;
    border: none;

    font-family: "NotoSans-Regular";
    font-size: 18px;

    &:focus {
        outline: none;
    }
`;

const SearchResult = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 30px;
    background: none;
    border: none;

    font-family: "NotoSans-Regular";
    font-size: 18px;
    display: flex;
    align-items: center;
`;

const SearchImage = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
    margin-right: 10px;
    cursor: pointer;
`;

const MemoWrapper = styled.div`
    width: 100%;
    margin-top: 30px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Text = styled.div`
    width: 100%;
    font-family: "NotoSans-Regular";
    font-size: 18px;
    color: #2b234ab1;
    text-align: center;
    margin-top: 100px;
`;
