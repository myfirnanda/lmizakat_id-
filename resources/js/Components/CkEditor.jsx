// resources/js/Components/CkEditor.js
import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CkEditor = ({ value, onChange }) => {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
            }}
        />
    );
};

export default CkEditor;
