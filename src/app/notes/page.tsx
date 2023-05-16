import AddNoteForm from "@/components/client/AddNoteForm";
import NoteItem from "@/components/server/NoteItem";
import React from "react";

const page = () => {
  return (
    <>
      <AddNoteForm />
      <section className="max-w-full flex gap-1 justify-start items-center flex-wrap">
        {Array.from({ length: 10 }).map((_, i) => (
          <NoteItem title="Tit" description="desc" key={i} />
        ))}
      </section>
    </>
  );
};

export default page;
