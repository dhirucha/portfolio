'use client'
import About from "./components/About";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <About />
      <Services />
      <Work />
      <Contacts />
    </>
  );
}
