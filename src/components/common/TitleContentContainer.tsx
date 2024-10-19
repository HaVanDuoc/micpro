import React from "react";

interface Props {
  title: React.ReactNode;
  content: React.ReactNode;
}

const TitleContentContainer: React.FC<Props> = ({ title, content }) => {
  return (
    <div className="space-y-14 sm:space-y-20">
      <div className="space-y-8 text-center">{title}</div>
      {content}
    </div>
  );
};

export default TitleContentContainer;
