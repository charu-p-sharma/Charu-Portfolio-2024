import React from "react";

const MyEducation = () => {
  return (
    <div
      className="bg-[#232325] py-10
  "
      id="education"
    >
      <h2 className="mb-8 text-center text-3xl text-white">
        My <span>Education</span>{" "}
      </h2>
      <div className="relative mx-auto mb-[20px] max-w-[300px] rounded-3xl bg-gray-700/20 p-4 text-white sm:max-w-[600px]">
        <p>XII Standard</p>
        <p className="text-gray-400">(2020-2021)</p>
        <p className="text-gray-400">Description</p>
      </div>
      <div className="relative mx-auto my-1 h-[50px] w-[2px] bg-slate-400"></div>

      <div className="relative mx-auto mb-[20px] max-w-[300px] rounded-3xl bg-gray-700/20 p-4 text-white sm:max-w-[600px]">
        <p>UG</p>
        <p className="text-gray-400">(2021-2024)</p>
        <p className="text-gray-400">BCA- Computer Science</p>
      </div>
      <div className="relative mx-auto my-1 h-[50px] w-[2px]"></div>
    </div>
  );
};

export default MyEducation;
