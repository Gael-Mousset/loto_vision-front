import React from "react";

interface NumberGridProps {
  board: Boolean[];
  onClickNumber?: (num: number) => void;
}

const NumberGrid: React.FC<NumberGridProps> = ({ board, onClickNumber }) => {
  const handleClick = (num: number) => {
    if (!onClickNumber) return;
    onClickNumber(num);
  };
  return (
    <div
      className=" grid 
        grid-cols-5 sm:grid-cols-9 md:grid-cols-10 
        gap-2 
        w-full max-w-md sm:max-w-2xl mx-auto"
    >
      {Array.from({ length: 90 }).map((_, index) => {
        const num = index + 1;
        const isActive = board[index];

        return (
          <button
            key={num}
            onClick={() => handleClick(num)}
            className={
              "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-md border text-lg sm:text-xl transition-colors duration-200 " +
              (isActive ? "bg-green-500 text-white" : "bg-white text-gray-800")
            }
          >
            {num}
          </button>
        );
      })}
    </div>
  );
};

export default NumberGrid;
