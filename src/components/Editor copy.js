import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
    const [editorHtml, setEditorHtml] = useState('');
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' },],
            ['link', 'image'],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            [{ script: 'sub' }, { script: 'super' }],
            ['code', 'code-block'],
            ['clean'],
        ],
    };
    const formats = [ 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'color', 'background', 'font', 'align', 'script', 'code', 'code-block',]
    function handleChange(html) {
        setEditorHtml(html)
    }

    return (
        <>
            <ReactQuill theme="snow" value={editorHtml} modules={modules} formats={formats} onChange={handleChange} />
        </>
    );
}

export default Editor;