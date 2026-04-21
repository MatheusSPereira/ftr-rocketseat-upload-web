import axios from "axios";

interface UploadFileToStorageParams {
    file: File;
    onProgress: (sizeInBytes: number) => void;
}

interface UploadFileToStorageOpts {
    signal?: AbortSignal;
}

export async function uploadFileToStorage({ file, onProgress }: UploadFileToStorageParams, opts?: UploadFileToStorageOpts) {
    const data = new FormData();
    data.append('file', file);

    const response = await axios.post<{ url: string }>('http://localhost:3334/uploads', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        signal: opts?.signal,
        onUploadProgress: (progressEvent) => {
            if (onProgress) {
                onProgress(progressEvent.loaded);
            }
        }
    });

    return { url: response.data.url };
} 