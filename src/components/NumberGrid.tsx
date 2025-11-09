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
    <div className="grid grid-cols-10 gap-2">
      {Array.from({ length: 90 }).map((_, index) => {
        const num = index + 1;
        const isActive = board[index];

        return (
          <button
            key={num}
            onClick={() => handleClick(num)}
            className={
              "w-10 h-10 flex items-center justify-center rounded-md border text-sm " +
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
