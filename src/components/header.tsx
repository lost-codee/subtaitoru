import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="container max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">S</span>
        </div>
        <span className="font-bold text-xl hidden md:inline-block">
          Subtaitoru
        </span>
      </div>
      <Nav />
    </header>
  );
};
