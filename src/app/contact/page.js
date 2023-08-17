"use client";
import React, { useState } from "react";

const Contact = () => {
	// state variables
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [desc, setDesc] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	// form submit functionality
	const handleSubmit = (e) => {
    e.preventDefault();
    // fetch api
    async function postJSON(data) {
		try {
			const data = {name, phone, desc, email, message}
			const response = await fetch(
				"http://localhost:3000/api/postcontact",
				{
					method: "POST", // or 'PUT'
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);
			const result = await response.json();
			alert(`thanks for contacting us`);
			setName(``)
			setPhone(``)
			setDesc(``)
			setEmail(``)
			setMessage(``)
		} catch (error) {
			console.error("Error:", error);
		}
	}

	const data = { username: "example" };
	postJSON(data);

	};
	// onChange fuction
	const handleChange = (e) => {		
		if (e.target.name === `name`) { // for name
			setName(e.target.value);
		} else if (e.target.name === `phone`) { // for phone
			setPhone(e.target.value);
		} else if (e.target.name === `desc`) { // for desc
			setDesc(e.target.value);
		} else if (e.target.name === `email`) { // for email
			setEmail(e.target.value);
		} else if (e.target.name === `message`) { // for message
			setMessage(e.target.value);
		}
	};
	return (
		<div className="bg-dark py-4">
			{/* contact us heading */}
			<h3 className="container text-center mt-4 pt-4 text-white">
				Contact Us Form
			</h3>
			{/* form div */}
			<div className="container mt-4 ">
				{/* form */}
				<form
					action=""
					onSubmit={handleSubmit}>
					{/* name */}
					<div className="mb-3">
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							placeholder="Name"
							value={name}
							onChange={handleChange}
							required
						/>
					</div>
					{/* phone */}
					<div className="mb-3">
						<input
							type="phone"
							className="form-control"
							id="phone"
							name="phone"
							placeholder="Phone"
							value={phone}
							onChange={handleChange}
							required
						/>
					</div>
					{/* desc */}
					<div className="mb-3">
						<input
							type="desc"
							className="form-control"
							id="desc"
							name="desc"
							placeholder="Desc"
							value={desc}
							onChange={handleChange}
							required
						/>
					</div>
					{/* email */}
					<div className="mb-3">
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Email"
							value={email}
							onChange={handleChange}
							required
						/>
					</div>
					{/* text area */}
					<div className="mb-3">
						<textarea
							className="form-control"
							id="message"
							name="message"
							rows={3}
							defaultValue={""}
							placeholder="Enter Your Message ... "
							value={message}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
