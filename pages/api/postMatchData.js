import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  // update the local JSON file with new match
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "data", "matches.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(res.body);
    fs.writeFIleSync(filePath, JSON.stringify(data));
  }
}
