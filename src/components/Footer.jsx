import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className=" mt-16 w-85 border-t py-2 border-neutral-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
      </div>
      <p className="mt-6 mb-6 text-white text-center uppercase">&#169; 2024 <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text uppercase">ZREX</span> Initiatives Ind. <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
      All Rights Reserved.
        </span></p>
    </footer>
  );
};

export default Footer;
