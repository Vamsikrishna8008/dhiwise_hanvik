import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[102px] items-center justify-center mt-[47px] w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[100px] mr-[297px] w-4/5 md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <ul className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[15px] w-[31%] md:w-full common-column-list">
                <li>
                  <div className="flex sm:flex-col flex-row gap-[18px] items-start justify-start">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[68px] items-start justify-end p-2.5"
                      style={{
                        backgroundImage: "url('images/img_group1.svg')",
                      }}
                    >
                      <Text
                        className="ml-1.5 md:ml-[0] mt-[3px] sm:text-[35.63px] md:text-[37.63px] text-[39.63px] text-gray-300"
                        size="txtAksharMedium3963"
                      >
                        H
                      </Text>
                    </div>
                    <Text
                      className="sm:text-[41.74px] md:text-[47.74px] text-[55.74px] text-gray-300"
                      size="txtAksharMedium5574"
                    >
                      Hanvik Interiors
                    </Text>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-5 items-center justify-start mt-7">
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
                    <Img
                      className="h-5 w-5"
                      src="images/img_eye.svg"
                      alt="eye"
                    />
                  </div>
                </li>
                <li>
                  <div className="flex flex-row items-start justify-between mt-8">
                    <div className="flex flex-col gap-3.5 items-start justify-start">
                      <Text
                        className="text-base text-yellow-800"
                        size="txtAksharMedium16"
                      >
                        Quick Links
                      </Text>
                      <Text
                        className="leading-[30.00px] text-base text-gray-900_87"
                        size="txtInterRegular16Gray90087"
                      >
                        <span className="text-yellow-800 font-inter text-left font-normal">
                          <>
                            About Us
                            <br />
                          </>
                        </span>
                        <span className="text-yellow-800 font-inter text-left font-normal">
                          <>
                            3D Designing
                            <br />
                            Lighting
                            <br />
                            False Ceilings
                            <br />
                            Paints Works
                            <br />
                            Wardrobe
                            <br />
                            Modular kitchen
                            <br />
                          </>
                        </span>
                        <span className="text-yellow-800 font-inter text-left font-normal">
                          Contact Us
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15px] items-start justify-start">
                      <Text
                        className="text-base text-yellow-800"
                        size="txtAksharMedium16"
                      >
                        Conditions
                      </Text>
                      <Text
                        className="leading-[30.00px] text-base text-yellow-800_87"
                        size="txtInterRegular16Yellow80087"
                      >
                        <>
                          Privacy Policy
                          <br />
                          Terms and Conditions
                          <br />
                          Cookie Policy{" "}
                        </>
                      </Text>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[34%] md:w-full">
                <div className="flex flex-col gap-[49px] items-start justify-start w-full">
                  <Text
                    className="md:text-5xl sm:text-[42px] text-[56px] text-yellow-800"
                    size="txtSpaceGroteskMedium56"
                  >
                    Get in Touch
                  </Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Email
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] sm:text-xl text-yellow-800"
                        size="txtSpaceGroteskMedium24"
                      >
                        Hello@Hanvikinteriors.com
                      </Text>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start mt-[30px]">
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Phone
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] sm:text-xl text-yellow-800"
                        size="txtSpaceGroteskMedium24"
                      >
                        123-456-7890
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mt-8 w-full">
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Phone
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] sm:text-xl text-yellow-800"
                        size="txtSpaceGroteskMedium24"
                      >
                        123 Anywhere St., Any City, 12345 Any State
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 flex flex-col items-center justify-end p-[26px] sm:px-5 w-full">
            <Text
              className="mt-[5px] text-center text-gray-900 text-lg"
              size="txtInterRegular18"
            >
              © 2023 Hanvik Interiors. All rights reserved.
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
