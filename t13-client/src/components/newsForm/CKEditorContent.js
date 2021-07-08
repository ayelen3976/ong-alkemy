import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function CKEditorContent({ newsData, setNewsData, isPost }) {
  const handleCKEditor = (editor) => {
    const data = editor.getData();
    if (newsData.content !== undefined) {
      setNewsData({ ...newsData, content: data });
    } else if (isPost) {
      setNewsData({ ...newsData, content: data });
    }
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={newsData.content}
      onReady={(editor) => handleCKEditor(editor)}
      onChange={(e, editor) => handleCKEditor(editor)}
    />
  );
}

export default CKEditorContent;
