import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function TestimonialsContent({
  testimonialsData,
  setTestimonialsData,
  isPost,
}) {
  const handleContent = (editor) => {
    const data = editor.getData();
    if (testimonialsData.content !== undefined) {
      setTestimonialsData({ ...testimonialsData, content: data });
    } else if (isPost) {
      setTestimonialsData({ ...testimonialsData, content: data });
    }
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={testimonialsData.content}
      onReady={(editor) => handleContent(editor)}
      onChange={(e, editor) => handleContent(editor)}
    />
  );
}

export default TestimonialsContent;
