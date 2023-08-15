import * as fs from "fs";
// how to use
export default async function handler(req, res) {
	let data = await fs.promises.readdir("blogdata");
	let myfile;
	let allBlogs = []; // array to store all blogs from file system
	for (let index = 0; index < data.length; index++) {
		const item = data[index];
		
		myfile = await fs.promises.readFile(`blogdata/${item}`, `utf-8`); // got file names
		allBlogs.push(JSON.parse(myfile)); // store all blog
	}
		res.status(200).send(allBlogs)
}

	// fs.promises.readdir(`blogdata/`, (err, data) => {
	// 	let allBlogs = []; // array to store all blogs from file system
	// 	// if errorr, i.e file not found,
	// 	if (err) {
	// 		res.status(500).json(`No such blog found: ${err}`);
	// 	}
	// 	// return file names
	// 	data.forEach((item) => {
	// 		fs.readFile((`blogdata/${item}`), (e,d) => {
	// 			allBlogs.push(d)
	// 		})
	// 	})
	// 	res.status(200).json(allBlogs);
	// });
