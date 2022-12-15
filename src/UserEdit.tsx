import * as React from 'react';
import { Edit, SimpleForm, } from 'react-admin';
import { AttachmentMultiImageInput } from './AttachmentMultiImageInput';

export const UserEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <AttachmentMultiImageInput label="Avatars" maxFileCount={10} source="avatars1" />
            </SimpleForm>
        </Edit>
    );
};
