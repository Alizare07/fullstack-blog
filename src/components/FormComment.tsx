"use client"
import React, { ChangeEvent, useState } from "react";

const FormComment = () => {
    const [commment, setComment] = useState<string>("")

    const handleChangeComment = (e:ChangeEvent<HTMLInputElement>)=>{
        setComment(e.target.value)
    }
    const handleSubmit = () =>{
        console.log(commment)

    }
  return (
    <div>
      <div>
        <label
          className="block text-gray-700 font-bold text-sm mb-2 "
          htmlFor="comment"
        >
          Add Comment
        </label>
        <input
        value={commment}
        onChange={handleChangeComment}
          type="text"
          name="comment"
          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outLine-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className=" bg-blue-500 hover:bg-blue-600  py-2 px-4 font-bold focus:ring focus:border-blue-300 disabled:bg-gray-400 rounded-md focus:outline-none text-white mt-4"
          onClick={handleSubmit}
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default FormComment;

