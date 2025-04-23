import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

export const cloudinaryUpload = async (files) => {
    const fileUrl = [];

  for (let file in files.avartar) {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "techupth/demo-file-uploading",
      type: "private",
    });

    fileUrl.push({
        url: result.secure_url,
        publicId: result.public_id,
    });
    await fs.unlink(file.path);
  }
    return fileUrl;
};
