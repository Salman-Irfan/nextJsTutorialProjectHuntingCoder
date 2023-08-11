import * as fs from "fs";
// how to use
// http://localhost:3000/api/getblog?slug=how-to-learn-next-js
export default function handler(req, res) {
    fs.readdir(`blogdata/`, (err, data) => {
        // if errorr, i.e file not found, 
        if (err) {
            res.status(500).json(`No such blog found: ${err}`);
        }
		console.log(data);
		res.status(200).json(data);
	});
}
