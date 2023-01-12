import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'data');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/matches.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}


// import fs from 'fs'
// import path from 'path'

// const newMatch = {
//     id: something,
// }

// const filePath = path.join(process.cwd(), 'data', 'matches.json')
// const fileData = fs.readFileSync(filePath);
// const data = JSON.parse(fileData);
// data.push(newMatch)
// fs.writeFileSync(filePath, JSON.stringify(data));

// fetch('/api/feedback', {
//     method: 'POST',
//     body: JSON.stringify(reqBody),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })