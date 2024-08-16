import React from "react";

const ContactContent = () => {
  return (
    <section className="mx-auto w-[1216px] px-4 py-8 border flex">
      <h2 className="text-2xl font-bold mb-6 font-work-sans leading-7"></h2>
      <div className="mx-auto border rounded-lg">
        <div className="mx-auto flex flex-col gap-4 px-[72.5px]">
          <div className="mx-auto flex flex-col gap-4 w-[624px] pt-4">
            <h1 className="text-3xl font-semibold w-48 h-10 pl-6">
              {" "}
              Contact Us
            </h1>{" "}
            <p className="font-thin px-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, laboriosam! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quae, atque!
            </p>
          </div>

          <div
            id="address"
            className="flex flex-row gap-[50px] px-[65.5px] pb-[39px]"
          >
            <div className="flex flex-col gap-4 py-4 px-2 border rounded-lg">
              <h2 className="font-bold pl-4">Address</h2>
              <p
                className="
              w-[260px] h-[52px] font-thin
              px-4 pb-4
              "
              >
                1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
              </p>
            </div>
            <div className="flex flex-col gap-4 py-4 px-2 border rounded-lg">
              {" "}
              <h2 className="font-bold pl-4">Contact</h2>
              <p className="w-[260px] h-[52px] font-thin px-4 pb-4">
                313-332-8662 <br />
                info@email.com
              </p>
            </div>
          </div>
        </div>
        <div
          id="info"
          className="mx-auto w-[643px] h-[440px] border rounded-xl bg-[#F6F6F7] relative"
        >
          <div className="flex flex-col gap-4 mt-[29px] ml-[35px] overflow-hidden">
            <p>Leave a message</p>
            <form action="" className="w-[478px] h-[335px] flex flex-col gap-4">
              <div className="flex flex-row gap-4">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                  className="h-6 rounded-md border border-gray-200"
                />
                <input
                  type="text"
                  name=""
                  placeholder="Your Email"
                  id=""
                  className="h-6 rounded-md border border-gray-200"
                />
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name=""
                  placeholder="Subject"
                  id=""
                  className="h-6 rounded-md border border-gray-200"
                />{" "}
                <textarea
                  type="text"
                  name=""
                  id=""
                  placeholder="Write a message"
                  className="h-40 rounded-md border border-gray-200 overflow-hidden"
                />
              </div>
              <button className="bg-[#4B6BFB] w-[130px] border rounded-md text-[#ffffff] py-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
