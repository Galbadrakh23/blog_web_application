const FooterTail = () => {
  return (
    <div className="mt-4 border-t border-gray-400 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 py-4">
        <img src="/image/Logo.svg" alt="logo" />
        <div>
          <p className="font-normal text-xl font-sans">
            Meta<strong>Blog</strong>
          </p>
          <p className="text-[#696A75] font-normal text-base font-sans">
            © All rights reserved.
          </p>
        </div>
      </div>
      <div>
        <ul className="hidden sm:flex flex-row gap-4 text-[#696A75] font-normal text-base font-sans">
          <li>Terms of Use</li>|<li>Privacy Policy</li>|<li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTail;
