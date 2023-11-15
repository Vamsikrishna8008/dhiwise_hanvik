import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-akshar items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 flex flex-row items-center justify-center md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-20 items-start justify-start p-[25px] sm:px-5 w-[19%]"
            style={{ backgroundImage: "url('images/img_frame3.svg')" }}
          >
            <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[41px] w-[61%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[29px] items-start justify-end p-[5px]"
                style={{ backgroundImage: "url('images/img_shape.svg')" }}
              >
                <Text
                  className="ml-0.5 md:ml-[0] text-[17.06px] text-gray-900"
                  size="txtAksharMedium1706"
                >
                  H
                </Text>
              </div>
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                size="txtAksharMedium24"
              >
                Hanvik Interiors
              </Text>
            </div>
          </div>
          <ul className="flex md:flex-col flex-row font-inter gap-6 md:hidden items-center justify-start ml-[475px] mr-[104px] my-[27px] w-auto common-row-list">
            <li>
              <a className="hover:font-semibold text-base text-gray-900 hover:text-yellow-800">
                <Text
                  className="common-pointer"
                  size="txtInterRegular16"
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800">
                <Text
                  className="common-pointer"
                  size="txtInterRegular18"
                  onClick={() => navigate("/about")}
                >
                  About
                </Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              >
                <Text size="txtInterRegular18">3D Designing</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              >
                <Text size="txtInterRegular18">Wardrobe</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              >
                <Text size="txtInterRegular18">False ceilings</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              >
                <Text size="txtInterRegular18">Painting Works</Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              >
                <Text size="txtInterRegular18">Lighting</Text>
              </a>
            </li>
            <li>
              <a className="hover:font-semibold text-base text-gray-900 hover:text-yellow-800">
                <Text
                  className="common-pointer"
                  size="txtInterRegular16"
                  onClick={() => navigate("/project")}
                >
                  Modular kitchen
                </Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-semibold text-base text-yellow-800"
              >
                <Text size="txtInterSemiBold16">Contact</Text>
              </a>
            </li>
          </ul>
        </header>
        <div className="flex flex-col font-spacegrotesk md:gap-10 gap-[81px] justify-start max-w-[1720px] mt-[182px] mx-auto md:px-5 w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-1.5 md:ml-[0] w-[43%] md:w-full">
            <Text
              className="md:text-5xl text-7xl text-gray-50"
              size="txtSpaceGroteskMedium72Gray50"
            >
              Contact Us
            </Text>
            <Img
              className="h-[103px]"
              src="images/img_vector.svg"
              alt="vector"
            />
          </div>
          <Img className="h-[698px]" src="images/img_image.svg" alt="image" />
        </div>
        <div className="flex flex-col font-inter items-center justify-start max-w-[1714px] mt-[72px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[18px] justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[120px] w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="leading-[26.00px] text-lg text-yellow-800 w-full"
                  size="txtInterRegular18Yellow800"
                >
                  <>
                    Have a question about our services or want to get started on
                    your design project? We&#39;re here to help! Fill out the
                    contact form below and one of our team members will get back
                    to you within 24 hours. Alternatively, you can reach out to
                    us via phone or email using the contact information provided
                    below. We can&#39;t wait to hear from you!
                  </>
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-spacegrotesk sm:gap-10 items-start justify-between md:mt-0 mt-[17px] w-[46%] md:w-full">
                <Text
                  className="md:text-5xl text-[64px] text-gray-50"
                  size="txtSpaceGroteskMedium64Gray50"
                >
                  Submit Form
                </Text>
                <Img
                  className="h-[103px]"
                  src="images/img_vector.svg"
                  alt="vector_One"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[864px] w-1/2 md:w-full">
              <div className="flex flex-col gap-14 items-start justify-start w-full">
                <Text
                  className="text-gray-50 text-lg"
                  size="txtInterRegular18Gray50"
                >
                  <span className="text-gray-50 font-inter text-left font-normal">
                    Your Name
                  </span>
                  <span className="text-red-A700 font-inter text-left font-normal">
                    *
                  </span>
                </Text>
                <Line className="bg-yellow-800 h-px w-full" />
              </div>
              <div className="flex flex-col gap-14 items-start justify-start mt-[61px] w-full">
                <Text
                  className="text-gray-50 text-lg"
                  size="txtInterRegular18Gray50"
                >
                  <span className="text-gray-50 font-inter text-left font-normal">
                    Email
                  </span>
                  <span className="text-red-A700 font-inter text-left font-normal">
                    *
                  </span>
                </Text>
                <Line className="bg-yellow-800 h-px w-full" />
              </div>
              <div className="flex flex-col gap-14 items-start justify-start mt-[61px] w-full">
                <Text
                  className="text-gray-50 text-lg"
                  size="txtInterRegular18Gray50"
                >
                  <span className="text-gray-50 font-inter text-left font-normal">
                    Phone Number
                  </span>
                  <span className="text-red-A700 font-inter text-left font-normal">
                    *
                  </span>
                </Text>
                <Line className="bg-yellow-800 h-px w-full" />
              </div>
              <div className="flex flex-col gap-[54px] items-start justify-start mt-[63px] w-full">
                <Text
                  className="text-gray-50 text-lg"
                  size="txtInterRegular18Gray50"
                >
                  <span className="text-gray-50 font-inter text-left font-normal">
                    Message
                  </span>
                  <span className="text-red-A700 font-inter text-left font-normal">
                    *
                  </span>
                </Text>
                <Line className="bg-yellow-800 h-px w-full" />
              </div>
              <Button
                className="border border-solid border-yellow-800 cursor-pointer flex items-center justify-center min-w-[170px] mt-[59px] rounded-[25px]"
                rightIcon={
                  <div className="ml-1 w-[17px] bg-gray-50 my-px">
                    <Img src="images/img_upload_gray_50.svg" alt="upload" />
                  </div>
                }
                color="yellow_800"
                size="md"
                variant="fill"
              >
                <div className="!text-gray-50 font-medium leading-[normal] text-base text-center tracking-[0.24px]">
                  Submit
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-spacegrotesk md:gap-10 items-center justify-between max-w-[1724px] mt-[200px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
            <Img
              className="h-[808px] md:h-auto object-cover w-full"
              src="images/img_placeholder_808x850.png"
              alt="placeholder"
            />
          </div>
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[109px] items-center justify-start w-[42%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <Text
                className="md:text-5xl text-[64px] text-gray-50"
                size="txtSpaceGroteskMedium64Gray50"
              >
                Contact Info
              </Text>
              <Img
                className="h-[103px]"
                src="images/img_vector.svg"
                alt="vector_Two"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-base text-gray-50"
                size="txtInterRegular16Gray50"
              >
                Email
              </Text>
              <Text
                className="mt-[19px] text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                size="txtSpaceGroteskMedium24Gray50"
              >
                Hello@Hanvikinteriors.com
              </Text>
              <Line className="bg-yellow-800_87 h-px md:ml-[0] ml-[3px] mt-3.5 w-full" />
              <Text
                className="mt-[11px] text-base text-gray-50"
                size="txtInterRegular16Gray50"
              >
                Phone
              </Text>
              <Text
                className="mt-[5px] md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                size="txtInterMedium32"
              >
                (123) 456-7890
              </Text>
              <Line className="bg-yellow-800_87 h-px md:ml-[0] ml-[3px] mt-5 w-full" />
              <Text
                className="mt-[11px] text-base text-gray-50"
                size="txtInterRegular16Gray50"
              >
                Address
              </Text>
              <Text
                className="mt-4 md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                size="txtInterMedium32"
              >
                123 Main Street, Suite 456, Anytown, USA
              </Text>
              <Line className="bg-yellow-800_87 h-px md:ml-[0] ml-[3px] mt-[9px] w-full" />
              <div className="flex flex-row gap-5 items-center justify-start mt-[43px] w-[26%] md:w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_facebook_yellow_800.svg"
                  alt="facebook"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_youtube.svg"
                  alt="youtube"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
                <Img
                  className="h-5 w-5"
                  src="images/img_twitter_yellow_800.svg"
                  alt="twitter"
                />
                <Img className="h-5 w-5" src="images/img_eye.svg" alt="eye" />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900 border border-gray-900 border-solid flex font-akshar items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
