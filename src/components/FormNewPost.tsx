import React from "react";

const inputClass =
  "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300";

const FormNewPost = () => {
  return (
    <form className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          name="title"
          placeholder="Enter the Title"
          className={inputClass}
        />
      </div>
      <div className="mb-4">
        <textarea
          minLength={5}
          name="content"
          placeholder="Enter the content"
          className={inputClass}
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600  py-2 px-4 font-bold focus:ring focus:border-blue-300 disabled:bg-gray-400 rounded-md focus:outline-none text-white">submit</button>
    </form>
  );
};

export default FormNewPost;
