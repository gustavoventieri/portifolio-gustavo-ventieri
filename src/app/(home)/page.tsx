import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="max-w-400 mx-auto flex items-center   px-4 md:px-6">
      <div className="w-full ">
        <Hero />
      </div>
    </div>
  );
}
