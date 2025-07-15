import React from "react";
import "./Toolbar.css";

const Toolbar = ({editor})  => {
return(
    <div class="toolbar">
        <div className="toolbarItem">
            <button
                type="button"
                className={`toolbarBtn editor-h1 ${editor.isActive("heading", { level: 2 }) ? 'active' : ''}`}
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                disabled={!editor.can().chain().focus().toggleHeading({ level: 2 }).run()}
            />
            <button
                type="button"
                className={`toolbarBtn editor-h2 ${editor.isActive("heading", { level: 3 }) ? 'active' : ''}`}
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                disabled={!editor.can().chain().focus().toggleHeading({ level: 3 }).run()}
            />
            <button
                type="button"
                className={`toolbarBtn editor-h3 ${editor.isActive("heading", { level: 4 }) ? 'active' : ''}`}
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                disabled={!editor.can().chain().focus().toggleHeading({ level: 4 }).run()}
            />
        </div>
        <div className="toolbar-line" />
        <div className="toolbarItem">
            <button
                type="button"
                className={`toolbarBtn editor-bold ${editor.isActive("bold") ? 'active' : ''}`}
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
            />
            <button
                type="button"
                className={`toolbarBtn editor-italic ${editor.isActive("italic") ? 'active' : ''}`}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
            />
            <button
                type="button"
                className={`toolbarBtn editor-strike ${editor.isActive("strike") ? 'active' : ''}`}
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
            />
        </div>
    </div>
    )
    
}
export default Toolbar;