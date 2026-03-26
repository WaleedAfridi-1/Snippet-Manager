'use client'
import React, { useState } from "react";
import CodeEditor from '@/components/CodeEditor'

const UpdateSnippet = ({snippet}) => {

    const [title, setTitle] = useState(snippet?.title ||"")
    const [code, setCode] = useState(snippet?.code || "")
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-wider  ">
          Title
        </h1>
        <input
          value={title}
          type="text"
          placeholder="Title"
          name="title"
          className="ring rounded shadow py-3 px-6 font-mono"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <CodeEditor code={code} setCode={setCode}/>
    </div>
  );
};

export default UpdateSnippet;
