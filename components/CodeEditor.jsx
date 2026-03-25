"use client";
import { Editor } from "@monaco-editor/react";
import React from "react";

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl lg:text-3xl font-bold tracking-wider  ">Code</h1>
      <pre>
        <Editor
          height="400px"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            fontSize: 16,
            minimap: { enabled: false },
            wordWrap: "on",
          }}
        />
      </pre>
      <input type="hidden" name="code" value={code} />
    </div>
  );
};

export default CodeEditor;
