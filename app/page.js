import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Work from "./components/work";
import Why from "./components/why";
import Numberbar from "./components/number-bar";
import Product from "./components/product";

export default function Home() {
  return (
<>
<Header></Header>
<Hero></Hero>
<Work></Work>
<Why></Why>
<Numberbar></Numberbar>
<Product></Product>


</>
  );
}
