import React from 'react';

const InputField = ({ label, name, type = 'text', register, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        {...register(name, { required: true })}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
