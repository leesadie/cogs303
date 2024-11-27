import Image from "next/image";
import Hero from "./components/Hero";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <Hero currentUser={currentUser}/>
  );
}
