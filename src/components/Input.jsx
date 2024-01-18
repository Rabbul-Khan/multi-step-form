import React from 'react';

const Input = ({ label, placeholder }) => {
  return (
    <div className="">
      <label htmlFor="" className="block pb-2 text-sm">
        {label}
      </label>
      <input
        type="text"
        required
        placeholder={placeholder}
        className="w-full p-2 text-sm font-medium tracking-wide rounded-sm outline outline-2 outline-offset-2 outline-light-gray focus:outline-cool-gray"
      />
    </div>
  );
};

export default Input;
