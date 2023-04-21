import { Footer } from "flowbite-react";
const BsFacebook = () => <i className="text-white fab fa-facebook-f"></i>;
const BsInstagram = () => <i className="text-white fab fa-instagram"></i>;
const BsTwitter = () => <i className="text-white fab fa-twitter"></i>;
const BsGithub = () => <i className="text-white fab fa-github"></i>;
export default function Foot() {
  return (
    <Footer bgDark={true}>
        <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="NSS JGEC™ -  NOT ME, BUT YOU" year={2023} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center w-fit m-auto md:m-0">
            <Footer.Icon href="#" rel="noreferrer" target="__blank" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/nss_jgec/" rel="noreferrer" target="__blank" icon={BsInstagram} />
            {/* <Footer.Icon href="#" rel="noreferrer" target="__blank" icon={BsTwitter} /> */}
            <Footer.Icon href="https://github.com/code-soham" rel="noreferrer" target="__blank" icon={BsGithub} />
        </div>
      </div>
    </Footer>
  );
}
