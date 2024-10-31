import React, { useEffect } from 'react';
import InputField from '../createBook/InputField';
import SelectField from '../createBook/SelectField';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchBookByIdQuery, useUpdateBookMutation } from '../../../redux/books/bookApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: bookData, isLoading, isError, refetch } = useFetchBookByIdQuery(id);
  const { register, handleSubmit, setValue } = useForm();

  // Prefill the form with existing book data
  useEffect(() => {
    if (bookData) {
      setValue('title', bookData.title);
      setValue('description', bookData.description);
      setValue('category', bookData.category);
      setValue('trending', bookData.trending);
      setValue('oldPrice', bookData.oldPrice);
      setValue('newPrice', bookData.newPrice);
      setValue('coverImage', bookData.coverImage);
    }
  }, [bookData, setValue]);

  const onSubmit = async (data) => {
    const updatedBookData = {
      title: data.title,
      description: data.description,
      category: data.category,
      trending: data.trending,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || bookData.coverImage,
    };

    try {
      await axios.put(`${getBaseUrl()}/api/books/${id}`, updatedBookData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      Swal.fire({
        title: "Book Updated Successfully!",
        text: "Your book details have been updated.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Go to Dashboard",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/dashboard/manage-books");
        }
      });

      refetch();
    } catch (error) {
      console.log("Failed to update book:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update the book. Please try again.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Close",
      });
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div className="text-red-500 text-center mt-6">Error fetching book data</div>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Update Book</h2>
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

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register('trending')}
            className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
          />
          <label className="text-sm font-semibold text-gray-700">Trending</label>
        </div>

        <InputField label="Old Price" name="oldPrice" type="number" placeholder="Enter old price" register={register} />
        <InputField label="New Price" name="newPrice" type="number" placeholder="Enter new price" register={register} />
        <InputField label="Cover Image URL" name="coverImage" type="text" placeholder="Enter cover image URL" register={register} />

        <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-all duration-150">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
