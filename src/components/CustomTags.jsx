import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageRemove from "../img/ic_remove.svg";
import ImageAdd from "../img/ic_add.svg";

export default function CustomTags(props) {
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const onEnter = (e) => {
    if (e.target.value.length !== 0 && e.key === "Enter") {
      saveItem();
    }
  };

  const saveItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const deleteItem = (index) => {
    const filteredTagList = tagList.filter((tagItem, idx) => idx !== index);
    setTagList(filteredTagList);
  };

  useEffect(() => {
    props.getTags(tagList);
  }, [tagList]);

  return (
    <Wrapper>
      <TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <TagItem key={index}>
              <Text>#{tagItem}</Text>
              <Delete src={ImageRemove} onClick={() => deleteItem(index)} />
            </TagItem>
          );
        })}
        {tagList.length < 5 && (
          <TagNew>
            <TagInput
              placeholder="tag"
              value={tagItem}
              onChange={(e) => {
                setTagItem(e.target.value);
              }}
              onKeyDown={onEnter}
            />
            <TagImage src={ImageAdd} />
          </TagNew>
        )}
      </TagBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - (160px));
  overflow-x: scroll;

  display: flex;
  flex-direction: row;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 20px;
  padding: 5px 0;
`;

const TagItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 100%;
  padding: 5px 0 5px 10px;

  background: #2b234a;
  border-radius: 50px;

  margin-right: 5px;
`;

const Text = styled.div`
  font-family: "NotoSans-Regular";
  font-size: 14px;
  color: #fff;
  line-height: 2;
  white-space: nowrap;
`;

const Delete = styled.img`
  width: 8px;
  height: 8px;
  padding: 5px;
  margin-right: 5px;
  margin-left: 2px;
`;

const TagNew = styled.div`
  position: relative;

  width: 80px;
  height: 30px;
  padding: 5px 10px;

  border: 2px solid #2b234a;
  border-radius: 50px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
`;

const TagInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;

  font-family: "NotoSans-Regular";
  font-size: 14px;
  color: #2b234a;
  text-align: center;

  margin-right: 5px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #cccccc;
  }
`;

const TagImage = styled.img`
  width: 12px;
  height: 12px;
  position: absolute;
  right: 0;
  margin-right: 5px;
`;
