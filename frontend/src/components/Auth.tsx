import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState({
        name: "",
        username: "",
        password: ""
    });

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div>
                    <div className="text-xl font-bold">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        Are you already a member?
                        <Link className="pl-2 underline" to={"/signin"}>Login</Link>
                    </div>
                </div>
                <LabelledInput label="Name" placeholder="Meetkumar Patel..." onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} />
                <LabelledInput label="Email" placeholder="meet@gmail.com" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} />
                <LabelledInput label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} />
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-3">{type === "signup" ? "Sign up" : "Sign in"}</button>
                {/* <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">{type === "signup" ? "Sign up" : "Sign in"}</button> */}
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm font-medium text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />

    </div>

}