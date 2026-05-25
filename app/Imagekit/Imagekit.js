import ImageKit from '@imagekit/nodejs';

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY, // This is the default and can be omitted
});
export const imagekitUpload = async (file) => {
  try {
    const base64File = file.buffer.toString("base64");
    const response = await client.files.upload({
      file: base64File,
      fileName: file.originalname,
    });

    return response;
  } catch (err) {
    console.log(" ImageKit Error:", err?.message);
  }
};