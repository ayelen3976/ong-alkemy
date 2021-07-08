import React from 'react';
import { Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './styles.css';

const FormActivityContent = props => {

    return (
        <Form.Group>
            <Form.Label className="form-activities__label">Contenido</Form.Label>
            <CKEditor
                editor={ClassicEditor}
                data={Object.keys(props.activity).length === 0 ? "" : props.activity.content}
                onReady={editor => { }}
                onChange={(event, editor) => {
                    var data = editor.getData();
                    props.getContent(data)
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </Form.Group>
    );
}

export default FormActivityContent;