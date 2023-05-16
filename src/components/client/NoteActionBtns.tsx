"use client";
import React, { MouseEvent } from "react";

interface Props {
  todoId: string;
}
const NoteActionBtns = ({ todoId }: Props) => {
  const editNoteItemHandler = (e: MouseEvent) => {
    console.log("edit note item");
  };

  return (
    <>
      <input
        type="checkbox"
        checked={true}
        // onChange={(e) => console.log(e.target.checked)}
        name="isCompleted"
        id="isCompleted"
      />
      <button
        onClick={editNoteItemHandler}
        className="text-blue-500 font-semibold hover:text-blue-600 focus:outline-none"
      >
        Delete Note
      </button>
    </>
  );
};

export default NoteActionBtns;
