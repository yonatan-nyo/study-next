import React from "react";

interface CardProps {
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, description }) => {
  //ini comment
  return (
    <div className="flex flex-col p-4 justify-center bg-blue-200 flex-grow-0 rounded-xl shadow-xl border-4 hover:bg-blue-300 hover:scale-105 ease-in duration-100 max-w-[49%]">
      <h2 className="text-2xl uppercase mb-10">{name}</h2>
      <p className="whitespace-pre-line">{description}</p>
    </div>
  );
};

export default Card;
