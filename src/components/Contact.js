import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
	const sendEmail = (e) => {
		e.preventDefault();
		console.log( e.target.querySelector(".fullName").value);
	};
	return (
		<div className="contact mt-40" id="contact">
			<SectionTitle title={"Contact"} />
			<form onSubmit={sendEmail} className="grid grid-cols-2 gap-20 mt-40">
				<div className="form-control">
					<input
						type="text"
						placeholder="first name"
                        name="fullName"
						required
						className="fullName bg-transparent outline-none border rounded-full w-full focus:border-cyan-400 py-10 px-28"
					/>
				</div>
				<div className="form-control">
					<input
						type="text"
						placeholder="first name"
                        name="lastName"
						required
						className=" bg-transparent outline-none border rounded-full w-full focus:border-cyan-400 py-10 px-28"
					/>
				</div>
				<div className="form-control">
					<textarea
						type="text"
						placeholder="write your message"
                        name="message"
						required
						rows="2"
						cols="2"
						className=" block bg-transparent outline-none border rounded-full w-full focus:border-cyan-400 py-10 px-28"
					/>
				</div>
				<div className="form-control">
					<input
						type="submit"
						value="send message"
						className=" text-start bg-transparent outline-none border rounded-full w-full  hover:bg-cyan-100 cursor-pointer hover:text-black py-10 px-28"
					/>
				</div>
			</form>
		</div>
	);
};

export default Contact;
