import React from "react";
import {Header} from "../components/homepage/Header";
import { Menu } from "../components/homepage/Menu";
import {Welcome} from "../components/homepage/Welcome";
import {About} from "../components/homepage/About";
import {ContactForm} from "../components/homepage/ContactForm";

export const HomeView = () => {
	return <>
		<Header/>
		<Menu/>
		<Welcome/>
		<About/>
		{/*/!*<LoginOrRegister/>*!/*/}
		<ContactForm/>
	</>
}