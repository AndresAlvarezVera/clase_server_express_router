import multer from "multer";
import path from "path"; // <-- Agrega esta línea
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({    
   destination: (req, file, cb)=>{ cb(null, path.join(__dirname, '../public/img')) },        
   filename: (req, file, cb)=>{ cb(null, file.originalname)},
});
export const uploader = multer({storage});