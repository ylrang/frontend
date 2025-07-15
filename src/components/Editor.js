import { useState } from 'react';
import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { Markdown } from "tiptap-markdown";
import Toolbar from "../components/Toolbar";
import "./Editor.css";

function Editor() {
    const [text, setText] = useState("hello World!");
    const editor = useEditor({
        extensions: [
        StarterKit,
        Link.extend({ inclusive: false }).configure({
            openOnClick: false,
        }),
        Markdown,
        ],
        content: text,
        onUpdate({ editor }) {
        setText(editor.getHTML());
        }
    });
    useEffect(() => {
        if (text) {
        editor?.commands.setContent(text);
        }
    }, [text]);

    return (
        <div className="editor-area">
            <div className="editor">
                { editor && <Toolbar editor={editor} />}
                <EditorContent id="tiptap" editor={editor} onClick={()=>  editor?.commands.focus()} />
            </div>
        </div>
    );
}

export default Editor;