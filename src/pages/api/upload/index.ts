import { NextApiHandler, NextApiRequest } from "next";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

let url: string = "public/files/";

const readFile = (
  req: NextApiRequest,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/files");
    options.filename = (name, ext, path, form) => {
      url +=
        Date.now().toString() + "_" + path.name + "_" + path.originalFilename;
      return (
        Date.now().toString() + "_" + path.name + "_" + path.originalFilename
      );
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

const handler: NextApiHandler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/files"));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/files"));
  }
  await readFile(req, true);
  res.json({ done: "ok", url });
};

export default handler;
