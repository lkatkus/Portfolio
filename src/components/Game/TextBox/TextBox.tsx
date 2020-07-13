import React from 'react';

interface TextBoxProps {
  event: any;
}

const TextBox: React.FC<TextBoxProps> = ({ event }) => {
  return <div>{JSON.stringify(event)}</div>;
};

export default TextBox;
