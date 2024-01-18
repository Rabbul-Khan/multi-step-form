import React from 'react';

const Step = ({ stepNumber, stepTitle }) => {
  return (
    <div className="flex gap-5 text-white text-xs  uppercase">
      <div className="w-8 h-8 rounded-[50%] flex justify-center items-center border-white border font-medium">
        {stepNumber}
      </div>
      <div>
        <div className="font-normal text-light-gray text-[10px] tracking-wide">
          step {stepNumber}
        </div>
        <div className=" font-medium text-white tracking-wider">
          {stepTitle}
        </div>
      </div>
    </div>
  );
};

export default Step;
