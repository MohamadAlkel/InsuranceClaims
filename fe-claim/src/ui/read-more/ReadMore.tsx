import React, { useState } from "react";
import styled from "styled-components";

export const TextWrapper = styled.p`
  .read-or-hide {
    color: var(--blue);
    cursor: pointer;
  }
`;

const ReadMore = ({ text, length }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (text.length < length) {
    return text;
  }
  return (
    <TextWrapper>
      {isReadMore ? text.slice(0, length) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </TextWrapper>
  );
};

export default ReadMore;
