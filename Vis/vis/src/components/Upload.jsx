import React from "react";

function Upload() {
  return (
    <div className="text-white border w-full flex flex-col items-center justify-center gap-2 p-4 border-dashed rounded cursor-pointer">
      <label htmlFor="fileETS" className="cursor-pointer">
        Upload ETS File
      </label>
      <input
        type="file"
        name="fileETS"
        id="fileETS"
        className="w-full border p-1 border-slate-50 border-opacity-50 file:hidden flex justify-center items-center m-auto cursor-pointer"
      />
    </div>
  );
}

export default Upload;
