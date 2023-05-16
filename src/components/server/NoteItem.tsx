import React from "react";

import NoteActionBtns from "../client/NoteActionBtns";
import { Todo } from "@/types/Todo";
interface Props extends Todo {}
const NoteItem = ({ title, description }: Props) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition duration-300 w-full sm:w-[46%] lg:w-[30%] xl:w-[22%]">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-gray-500 text-sm">Created on May 14, 2023</p>
        </div>

        {/* client component  */}
        <NoteActionBtns todoId={"3"} />
      </div>
    </>
  );
};

export default NoteItem;
