import * as fs from "fs";
// how to use
// http://localhost:3000/api/getblog?slug=how-to-learn-next-js
export default function handler(req, res) {
    fs.readFile(`blogdata/${req.query.slug}.json`,`utf-8`, (err, data) => {
        // if errorr, i.e file not found, 
        if (err) {
            res.status(500).json(`No such blog found: ${err}`);
        }
        // return file names
        console.log(req.query.slug)
		res.status(200).json(JSON.parse(data));
	});
}
