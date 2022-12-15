import * as React from 'react';
import { ImageField } from 'react-admin';
import { ImageInput } from './StableInputs/ImageInput';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const maxFiles = (max: number) => (value: any) => {
    if (!value || !Object.prototype.hasOwnProperty.call(value, 'length')) {
        return undefined;
    }
    if (value.length > max) {
        return 'too many files';
    } else {
        return undefined;
    }
};

export interface AttachmentMultiImageInputProps {
    label: string;
    source: string;
    maxFileCount?: number;
}

export const AttachmentMultiImageInput = ({ label, source, maxFileCount }: AttachmentMultiImageInputProps) => {
    const customValidate = maxFileCount
        ? maxFiles(maxFileCount)
        : undefined;

    return (
        <ImageInput label={label} source={source} multiple validate={customValidate} accept=".png,.svg,.jpg,.jpeg">
            <ImageField title={label} />
        </ImageInput>
    );
};
