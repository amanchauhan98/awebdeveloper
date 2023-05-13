import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'
const SignUp = () => {
    return(<>
    <div className="gradient w-auto">
       <SignUpForm/>
    </div> 
    </>)
}
const SignUpForm = () => {
	const [signupData, setSignUpData] = useState({
		fname : "",
		lname : "",
		email : "",
		password : "",
		cpassword : ""
	})
	const dataSignUp = (event) => {
		const {name, value} = event.target;
		setSignUpData({
			...signupData,
			[name] : value
		})
		if(signupData.password !== ""){
			document.getElementById("redmark").classList.add("hidden");
			document.getElementById("redmark").classList.remove("border-red-500")
			

		}

	}
	const {fname, lname, email, password, cpassword} = signupData
	const setupLogin = () => {
		localStorage.setItem('fname', fname)
		localStorage.setItem('lname', lname)
		localStorage.setItem('email', email)
		localStorage.setItem('password', password)
		localStorage.setItem('cpassword', cpassword)

		alert("Registration is done successfully!👍")
		
	}
	localStorage.getItem('fname')

    return(<>

		<div className="container mx-auto bg-transparent">
			<div className="flex justify-center px-6 pt-[2rem] bg-transparent">
				
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">
					
					<div
						className="w-full h-auto  bg-transparent shadow-2xl shadow-white hidden lg:block lg:w-5/12 bg-cover rounded-l-lg signup-img"
					
					></div>
					
					<div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center font-mono">Create an Account</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700 font-mono" for="firstName">
										First Name
									</label>
									<input
										onChange={dataSignUp}
										name="fname"
										value= {signupData.fname}
										className="w-full px-3 py-2 font-mono text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								<div className="md:ml-2">
									<label className="block mb-2 text-sm font-bold text-gray-700 font-mono" for="lastName">
										Last Name
									</label>
									<input
										name='lname'
										value= {signupData.lname}
										onChange={dataSignUp}
										className="w-full font-mono px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
							</div>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700 font-mono" for="email">
									Email
								</label>
								<input
									name='email'
									value={signupData.email}
									onChange={dataSignUp}
									className="w-full px-3 font-mono py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email"
								/>
							</div>
							<div className="mb-4 md:flex md:justify-between">
								<div className="mb-4 md:mr-2 md:mb-0">
									<label className="block mb-2 text-sm font-bold text-gray-700 font-mono" for="password">
										Password
									</label>
									<input
										name='password'
										value= {signupData.password}
										onChange={dataSignUp}
										className="w-full font-mono px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p id='redmark' className="text-xs font-mono italic text-red-500">Please choose a password.</p>
								</div>
								<div className="md:ml-2">
									<label className="block font-mono mb-2 text-sm font-bold text-gray-700" for="c_password">
										Confirm Password
									</label>
									<input
										name='cpassword'
										value={signupData.cpassword}
										onChange={dataSignUp}
										className="w-full font-mono px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="******************"
									/>
								</div>
							</div>
							<div className="mb-6 text-center">
								<button
									onClick={setupLogin}
									className="w-full button-color bg-[#111827] hover:bg-[#0d131f]  font-mono px-4 py-2 font-bold text-white rounded-full  focus:outline-none focus:shadow-outline"
									type="button"
								>
									Register Account
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center sm:bg-transparent md:bg-transparent">
								<NavLink
									className="inline-block font-mono hover:underline  text-sm text-[#111827] hover:text-[#0d131f]  align-baseline "
									to= {"/"}
								>
									Forgot Password?
								</NavLink>
							</div>
							<div className="text-center">
								<NavLink
									className="inline-block font-mono hover:underline  text-sm text-[#111827] hover:text-[#0d131f]  align-baseline "
									to ="/contact"
								>
									Already have an account? Login!
								</NavLink>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	
    </>)
}
export default SignUp;