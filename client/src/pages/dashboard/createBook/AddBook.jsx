import React, { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import { useForm } from 'react-hook-form';
import { useAddBookMutation } from '../../../redux/books/bookApi';
import Swal from 'sweetalert2';

const AddBook = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageFile, setImageFile] = useState(null);
  const [addBook, { isLoading }] = useAddBookMutation();
  const [imageFileName, setImageFileName] = useState('');

  const onSubmit = async (data) => {
    const newBookData = {
      ...data,
      coverImage: imageFileName
    };

    try {
      await addBook(newBookData).unwrap();
      Swal.fire({
        title: "Book Added!",
        text: "Your book was uploaded successfully.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK"
      });
      reset();
      setImageFileName('');
      setImageFile(null);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "Failed to add book. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Close"
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileName(file.name);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Add New Book</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField label="Title" name="title" placeholder="Enter book title" register={register} />
        <InputField label="Description" name="description" placeholder="Enter book description" type="textarea" register={register} />
        
        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Choose A Category' },
            { value: 'business', label: 'Business' },
            { value: 'technology', label: 'Technology' },
            { value: 'fiction', label: 'Fiction' },
            { value: 'horror', label: 'Horror' },
            { value: 'adventure', label: 'Adventure' },
          ]}
          register={register}
        />

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            {...register('trending')}
            className="rounded text-blue-600 focus:ring focus:ring-blue-500"
          />
          <label className="text-sm font-semibold text-gray-700">Trending</label>
        </div>

        <InputField label="Old Price" name="oldPrice" type="number" placeholder="Enter old price" register={register} />
        <InputField label="New Price" name="newPrice" type="number" placeholder="Enter new price" register={register} />

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          {imageFileName && <p className="text-sm text-gray-500 mt-1">Selected: {imageFileName}</p>}
        </div>

        <button type="submit" className="w-full py-2 text-white bg-green-500 hover:bg-green-600 font-bold rounded-lg transition duration-200">
          {isLoading ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
