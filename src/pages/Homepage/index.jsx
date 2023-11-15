import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-spacegrotesk sm:gap-10 md:gap-10 gap-40 items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[1045px] md:px-5 relative w-full">
              <Img
                className="h-[1045px] m-auto object-cover w-full"
                src="images/img_placeholder.png"
                alt="placeholder"
              />
              <div className="absolute bottom-[14%] flex flex-col items-center justify-start right-[5%] w-[81%]">
                <div className="flex flex-col items-end justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <Text
                      className="leading-[130.00px] md:text-5xl text-7xl text-yellow-800"
                      size="txtSpaceGroteskMedium72"
                    >
                      Transforming Spaces into Works of Art
                    </Text>
                    <div className="flex flex-col gap-[17px] items-start justify-start md:mt-0 mt-[23px]">
                      <Img
                        className="h-5 w-5"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_play.svg"
                        alt="play"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_twitter.svg"
                        alt="twitter"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[462px] items-start justify-end mt-20 w-[65%] md:w-full">
                    <Img
                      className="h-[52px] sm:mt-0 mt-0.5"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                    <Text
                      className="leading-[50.00px] text-gray-50 text-right text-xl w-[51%] sm:w-full"
                      size="txtSpaceGroteskMedium20"
                    >
                      Welcome to Archies, a full-service architecture and
                      interior design firm. We specialize in creating beautiful,
                      functional spaces that reflect your unique style and
                      personality. Let us help you transform your space into a
                      work of art.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-end mt-10 pr-[3px] py-[3px] w-[13%] md:w-full">
                    <Text
                      className="mt-[3px] text-2xl md:text-[22px] sm:text-xl text-yellow-800"
                      size="txtSpaceGroteskMedium24"
                    >
                      Start a Project
                    </Text>
                    <Img
                      className="h-4 w-[17px]"
                      src="images/img_upload.svg"
                      alt="upload"
                    />
                  </div>
                </div>
              </div>
              <header className="absolute bg-white-A700 flex flex-row font-akshar inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
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
                <ul className="flex md:flex-col flex-row font-inter gap-6 md:hidden items-center justify-start ml-[453px] mr-[104px] my-[27px] w-auto common-row-list">
                  <li>
                    <a
                      href="javascript:"
                      className="hover:font-semibold text-base text-yellow-800"
                    >
                      <Text size="txtInterSemiBold16">Home</Text>
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
                    <a className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800">
                      <Text
                        className="common-pointer"
                        size="txtInterRegular18"
                        onClick={() => navigate("/project")}
                      >
                        3D Designing
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800">
                      <Text
                        className="common-pointer"
                        size="txtInterRegular18"
                        onClick={() => navigate("/project")}
                      >
                        Wardrobe
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800">
                      <Text
                        className="common-pointer"
                        size="txtInterRegular18"
                        onClick={() => navigate("/project")}
                      >
                        False ceilings
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800">
                      <Text
                        className="common-pointer"
                        size="txtInterRegular18"
                        onClick={() => navigate("/project")}
                      >
                        Painting Works
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800">
                      <Text
                        className="common-pointer"
                        size="txtInterRegular18"
                        onClick={() => navigate("/project")}
                      >
                        Lighting
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800">
                      <Text
                        className="common-pointer"
                        size="txtInterRegular18"
                        onClick={() => navigate("/project")}
                      >
                        Modular kitchen
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800">
                      <Text
                        className="common-pointer"
                        size="txtInterRegular18"
                        onClick={() => navigate("/contact")}
                      >
                        Contact
                      </Text>
                    </a>
                  </li>
                </ul>
              </header>
            </div>
          </div>
        </div>
        <div className="flex md:ml-[0] ml-[100px] md:px-5 relative w-[85%] md:w-full">
          <div className="flex flex-col items-center justify-start my-auto w-[52%]">
            <Img
              className="h-[760px] md:h-auto object-cover w-full"
              src="images/img_placeholder_760x832.png"
              alt="placeholder_One"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-[133px] justify-start ml-[-91px] my-auto w-[55%] z-[1]">
            <div className="h-60 mr-[43px] relative w-[96%] md:w-full">
              <Text
                className="leading-[120.00px] m-auto md:text-5xl text-[64px] text-yellow-800"
                size="txtSpaceGroteskMedium64"
              >
                <>
                  About
                  <br />
                  Hanvik Interiors
                </>
              </Text>
              <Text
                className="absolute left-[38%] md:text-5xl text-7xl text-gray-300 top-[11%]"
                size="txtSpaceGroteskMedium72Gray300"
              >
                /
              </Text>
            </div>
            <div className="flex flex-col gap-[37px] items-start justify-start md:ml-[0] ml-[368px]">
              <Text
                className="leading-[42.00px] text-2xl md:text-[22px] text-gray-50 sm:text-xl w-full"
                size="txtSpaceGroteskMedium24Gray50"
              >
                <span className="text-gray-50 font-akshar text-left font-normal">
                  Hanvik Interiors
                </span>
                <span className="text-gray-50 font-spacegrotesk text-left font-medium">
                  {" "}
                  is a team of experienced interior designers{" "}
                </span>
              </Text>
              <Text
                className="leading-[26.00px] md:ml-[0] ml-[5px] text-lg text-yellow-800 w-[63%] sm:w-full"
                size="txtInterRegular18Yellow800"
              >
                <>
                  Who are passionate about creating beautiful, functional
                  spaces. We believe that good design should be accessible to
                  everyone, and we work hard to make sure that our clients&#39;
                  visions become a reality.
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="bg-gray-900 flex flex-col items-end justify-start pb-10 pl-10 sm:pl-5 w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-start justify-start md:px-5 w-[97%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[18px]">
                  <Text
                    className="md:text-5xl text-[64px] text-gray-300"
                    size="txtSpaceGroteskMedium64Gray300"
                  >
                    Our Values
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-4/5 md:w-full">
                  <Img
                    className="h-[690px] md:h-auto object-cover w-full"
                    src="images/img_placeholder_690x1450.png"
                    alt="placeholder_Two"
                  />
                </div>
              </div>
              <div className="flex flex-col font-inter items-center justify-start w-[92%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="md:gap-10 gap-[520px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[74%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="circle"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        src="images/img_upload_gray_300.svg"
                        alt="upload_One"
                      />
                    </Button>
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="circle"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        src="images/img_upload_gray_300.svg"
                        alt="upload_Two"
                      />
                    </Button>
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="circle"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        src="images/img_upload_gray_300.svg"
                        alt="upload_Three"
                      />
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[25px] w-[91%] md:w-full">
                    <Text
                      className="leading-[42.00px] mb-[60px] md:text-3xl sm:text-[28px] text-[32px] text-gray-300 w-[15%] sm:w-full"
                      size="txtInterRegular32"
                    >
                      Design for Sustainability
                    </Text>
                    <Button
                      className="flex h-[60px] items-center justify-center md:ml-[0] ml-[66px] md:mt-0 mt-[84px] w-[60px]"
                      shape="circle"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        src="images/img_upload_gray_300.svg"
                        alt="upload_Four"
                      />
                    </Button>
                    <Text
                      className="leading-[42.00px] mb-[60px] md:ml-[0] ml-[230px] md:text-3xl sm:text-[28px] text-[32px] text-gray-300 w-[15%] sm:w-full"
                      size="txtInterRegular32"
                    >
                      Timeless Design
                    </Text>
                    <Button
                      className="flex h-[60px] items-center justify-center md:ml-[0] ml-[66px] md:mt-0 mt-[84px] w-[60px]"
                      shape="circle"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        src="images/img_upload_gray_300.svg"
                        alt="upload_Five"
                      />
                    </Button>
                    <Text
                      className="leading-[42.00px] mb-[60px] md:ml-[0] ml-[230px] md:text-3xl sm:text-[28px] text-[32px] text-gray-300 w-[15%] sm:w-full"
                      size="txtInterRegular32"
                    >
                      Timeless Design
                    </Text>
                    <Button
                      className="flex h-[60px] items-center justify-center md:ml-[0] ml-[57px] md:mt-0 mt-[84px] w-[60px]"
                      shape="circle"
                      color="gray_300"
                      size="md"
                      variant="outline"
                    >
                      <Img
                        src="images/img_upload_gray_300.svg"
                        alt="upload_Six"
                      />
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[290px] mt-5 w-[83%] md:w-full">
                    <Text
                      className="leading-[42.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-300 w-[17%] sm:w-full"
                      size="txtInterRegular32"
                    >
                      Honesty and integrity
                    </Text>
                    <Text
                      className="leading-[42.00px] md:ml-[0] ml-[356px] md:text-3xl sm:text-[28px] text-[32px] text-gray-300 w-[17%] sm:w-full"
                      size="txtInterRegular32"
                    >
                      Attention to Detail
                    </Text>
                    <Text
                      className="leading-[42.00px] md:ml-[0] ml-[347px] md:text-3xl sm:text-[28px] text-[32px] text-gray-300 w-[17%] sm:w-full"
                      size="txtInterRegular32"
                    >
                      Quality Craftsmanship
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[404px] sm:h-[441px] md:h-[640px] justify-end mt-14 pt-[18px] md:px-5 relative w-full">
            <div className="h-[385px] md:h-[584px] mt-auto mx-auto w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[5%] my-auto w-[63%]">
                <div className="flex flex-col md:gap-10 gap-[131px] items-start justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between md:ml-[0] ml-[5px] w-[51%] md:w-full">
                    <div className="flex flex-col gap-[23px] items-start justify-start">
                      <Text
                        className="md:text-5xl text-[64px] text-gray-50"
                        size="txtSpaceGroteskMedium64Gray50"
                      >
                        8+
                      </Text>
                      <Text
                        className="text-gray-50 text-lg"
                        size="txtInterRegular18Gray50"
                      >
                        Years of Experience
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[21px] items-start justify-start">
                      <Text
                        className="md:text-5xl text-[64px] text-gray-50"
                        size="txtSpaceGroteskMedium64Gray50"
                      >
                        5
                      </Text>
                      <Text
                        className="text-gray-50 text-lg"
                        size="txtInterRegular18Gray50"
                      >
                        Awards
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                    <div className="flex flex-col gap-[23px] items-start justify-start">
                      <Text
                        className="md:text-5xl text-[64px] text-gray-50"
                        size="txtSpaceGroteskMedium64Gray50"
                      >
                        300+
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[5px] text-gray-50 text-lg"
                        size="txtInterRegular18Gray50"
                      >
                        Projects
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[390px] w-[124px] md:w-full">
                      <Text
                        className="md:text-5xl text-[64px] text-gray-50"
                        size="txtSpaceGroteskMedium64Gray50"
                      >
                        240
                      </Text>
                      <Text
                        className="text-gray-50 text-lg"
                        size="txtInterRegular18Gray50"
                      >
                        Clients Served
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[366px]">
                      <Text
                        className="md:text-5xl text-[64px] text-gray-50"
                        size="txtSpaceGroteskMedium64Gray50"
                      >
                        90%
                      </Text>
                      <Text
                        className="text-gray-50 text-lg"
                        size="txtInterRegular18Gray50"
                      >
                        Client Satisfaction
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-px inset-x-[0] mx-auto top-[48%]"
                src="images/img_line.svg"
                alt="line"
              />
            </div>
            <Img
              className="absolute h-[189px] inset-y-[0] my-auto right-[5%] w-[189px]"
              src="images/img_logo.svg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-[84px] justify-start max-w-[1733px] mt-[172px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[66px]">
              <Text
                className="text-center text-xl text-yellow-800"
                size="txtSpaceGroteskMedium20Yellow800"
              >
                Our Services
              </Text>
            </div>
            <div className="flex flex-col font-inter gap-[57px] items-center justify-start w-full">
              <div className="md:h-[523px] sm:h-[635px] h-[639px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[218px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[37px] items-center justify-start w-full">
                        <Line className="bg-yellow-800 h-px w-full" />
                        <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex flex-col gap-[18px] justify-start">
                            <Text
                              className="text-lg text-yellow-800"
                              size="txtInterRegular18Yellow800"
                            >
                              01
                            </Text>
                            <Text
                              className="ml-12 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-yellow-800_87"
                              size="txtSpaceGroteskMedium40"
                            >
                              3D Designing
                            </Text>
                          </div>
                          <Button
                            className="border border-solid border-yellow-800 flex h-[60px] items-center justify-center w-[60px]"
                            shape="circle"
                            color="yellow_800"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              src="images/img_upload.svg"
                              alt="upload_Seven"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-14 items-center w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Line className="bg-yellow-800 h-px w-full" />
                          <Text
                            className="mt-8 text-lg text-yellow-800"
                            size="txtInterRegular18Yellow800"
                          >
                            03
                          </Text>
                          <div className="flex flex-row font-spacegrotesk md:gap-10 items-end justify-between md:ml-[0] ml-[47px] w-[98%] md:w-full">
                            <Text
                              className="mt-[7px] sm:text-4xl md:text-[38px] text-[40px] text-yellow-800_87"
                              size="txtSpaceGroteskMedium40"
                            >
                              False Ceilings
                            </Text>
                            <Button
                              className="border border-solid border-yellow-800 flex h-[60px] items-center justify-center w-[60px]"
                              shape="circle"
                              color="yellow_800"
                              size="md"
                              variant="fill"
                            >
                              <Img src="images/img_upload.svg" alt="upload" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Line className="bg-yellow-800 h-px w-full" />
                          <Text
                            className="mt-7 text-lg text-yellow-800"
                            size="txtInterRegular18Yellow800"
                          >
                            04
                          </Text>
                          <div className="flex flex-row font-spacegrotesk md:gap-10 items-center justify-between ml-12 md:ml-[0] mt-[5px] w-[98%] md:w-full">
                            <Text
                              className="sm:text-4xl md:text-[38px] text-[40px] text-yellow-800_87"
                              size="txtSpaceGroteskMedium40"
                            >
                              Paints Works
                            </Text>
                            <Button
                              className="border border-solid border-yellow-800 flex h-[60px] items-center justify-center w-[60px]"
                              shape="circle"
                              color="yellow_800"
                              size="md"
                              variant="fill"
                            >
                              <Img src="images/img_upload.svg" alt="upload" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="absolute h-[523px] sm:h-[615px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute border border-solid border-yellow-800 flex flex-col h-[84px] items-center justify-start p-[30px] sm:px-5 right-[0] rotate-[140deg] rounded-[50%] top-[33%] w-[84px]">
                    <Img
                      className="h-[15px] my-[3px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                  <div className="absolute h-[523px] sm:h-[615px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute flex flex-col gap-6 inset-x-[0] items-start justify-start mx-auto top-[24%] w-full">
                      <Line className="bg-yellow-800 h-1 w-full" />
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        02
                      </Text>
                    </div>
                    <div className="absolute flex sm:flex-col flex-row font-spacegrotesk sm:gap-10 h-full inset-y-[0] items-start justify-between left-[3%] my-auto w-[53%]">
                      <Text
                        className="sm:mt-0 mt-[189px] sm:text-4xl md:text-[38px] text-[40px] text-gray-50"
                        size="txtSpaceGroteskMedium40Gray50"
                      >
                        Lighting
                      </Text>
                      <Img
                        className="h-[523px]"
                        src="images/img_image.svg"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-[57px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <Text
                      className="mt-7 text-lg text-yellow-800"
                      size="txtInterRegular18Yellow800"
                    >
                      05
                    </Text>
                    <div className="flex flex-row font-spacegrotesk md:gap-10 items-center justify-between ml-12 md:ml-[0] mt-[5px] w-[98%] md:w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-yellow-800_87"
                        size="txtSpaceGroteskMedium40"
                      >
                        Wardrobe
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex h-[60px] items-center justify-center w-[60px]"
                        shape="circle"
                        color="yellow_800"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_upload.svg" alt="upload" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <Text
                      className="mt-7 text-lg text-yellow-800"
                      size="txtInterRegular18Yellow800"
                    >
                      06
                    </Text>
                    <div className="flex sm:flex-col flex-row font-spacegrotesk md:gap-10 items-center justify-between ml-12 md:ml-[0] mt-[5px] w-[98%] md:w-full">
                      <Text
                        className="sm:text-4xl md:text-[38px] text-[40px] text-yellow-800_87"
                        size="txtSpaceGroteskMedium40"
                      >
                        Modular kitchen
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex h-[60px] items-center justify-center w-[60px]"
                        shape="circle"
                        color="yellow_800"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_upload.svg" alt="upload" />
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[73px] items-end justify-start max-w-[1740px] mt-[191px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-[64px] text-right text-yellow-800"
                size="txtSpaceGroteskMedium64"
              >
                What Our Clients Are Saying
              </Text>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[452px] items-start justify-end pr-1.5 py-1.5 w-full"
              style={{ backgroundImage: "url('images/img_group4.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-10 gap-[87px] items-start justify-start mt-[65px] w-[68%] md:w-full">
                <Img
                  className="h-[139px] w-[139px]"
                  src="images/img_image.svg"
                  alt="image_One"
                />
                <div className="flex flex-col items-start justify-start md:mt-0 mt-3.5">
                  <Text
                    className="text-xl text-yellow-800"
                    size="txtSpaceGroteskMedium20Yellow800"
                  >
                    I hired Archies to design and build my dream home, and I
                    could not be happier with the result.
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[99px] text-xl text-yellow-800 w-full"
                    size="txtInterRegular20"
                  >
                    From the initial consultation to the final walk-through, the
                    Archies team was professional, attentive, and a pleasure to
                    work with. They took the time to listen to my needs and
                    preferences, and they brought their expertise to the table
                    to create a home that is not only beautiful but also
                    functional and sustainable. I was especially impressed by
                    their attention to detail and their ability to incorporate
                    unique design elements that truly make my home one of a
                    kind. I highly recommend Archies for anyone who is looking
                    for a top-notch architecture and design firm
                  </Text>
                  <Text
                    className="mt-[30px] text-xl text-yellow-800"
                    size="txtInterMedium20"
                  >
                    Dereck Lawson
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-akshar items-center justify-start max-w-[1741px] mt-[166px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[78px] justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="md:text-5xl text-[110px] text-yellow-800"
                    size="txtAksharMedium110"
                  >
                    FAQ
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:mt-0 mt-4 w-[67%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Line className="bg-yellow-800 h-1 w-[99%]" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[46px] w-full">
                      <Text
                        className="md:mt-0 mt-[29px] text-gray-50 text-lg"
                        size="txtInterRegular18Gray50"
                      >
                        01
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[52px] md:mt-0 mt-[34px] text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                        size="txtSpaceGroteskMedium24Gray50"
                      >
                        What is the design process like?
                      </Text>
                      <div className="border border-gray-50 border-solid flex flex-col h-[84px] items-center justify-start md:ml-[0] ml-[625px] p-[30px] sm:px-5 rotate-[140deg] rounded-[50%] w-[84px]">
                        <Img
                          className="h-[15px] my-[3px]"
                          src="images/img_arrowleft_gray_50.svg"
                          alt="arrowleft_One"
                        />
                      </div>
                    </div>
                    <Text
                      className="leading-[26.00px] md:ml-[0] ml-[71px] mt-[9px] text-gray-50 text-lg w-[74%] sm:w-full"
                      size="txtInterRegular18Gray50"
                    >
                      Our design process typically starts with an initial
                      consultation to discuss your needs and preferences. From
                      there, we develop a design concept and present it to you
                      for feedback. Once the design is finalized, we move on to
                      the construction phase. Throughout the process, we keep
                      you informed and involved to ensure that the end result is
                      exactly what you envisioned.
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-[35px] md:ml-[0] ml-[588px] w-[66%]"
                orientation="vertical"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="h-[22px] md:mt-0 mt-[13px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        02
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[47px] md:mt-0 mt-[18px] text-2xl md:text-[22px] sm:text-xl text-yellow-800"
                        size="txtSpaceGroteskMedium24"
                      >
                        What is your approach to sustainability in design?
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex items-center justify-center md:ml-[0] ml-[425px] w-[59px]"
                        shape="circle"
                        color="yellow_800"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_upload.svg" alt="upload" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="h-[22px] md:mt-0 mt-[13px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        03
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[47px] md:mt-0 mt-[18px] text-2xl md:text-[22px] sm:text-xl text-yellow-800"
                        size="txtSpaceGroteskMedium24"
                      >
                        What types of projects do you work on?
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex items-center justify-center md:ml-[0] ml-[542px] w-[59px]"
                        shape="circle"
                        color="yellow_800"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_upload.svg" alt="upload" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[34px] items-center justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="h-[22px] md:mt-0 mt-[13px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        04
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[47px] md:mt-0 mt-[18px] text-2xl md:text-[22px] sm:text-xl text-yellow-800"
                        size="txtSpaceGroteskMedium24"
                      >
                        What is the timeline for a typical project?
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex items-center justify-center md:ml-[0] ml-[527px] w-[59px]"
                        shape="circle"
                        color="yellow_800"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_upload.svg" alt="upload" />
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Footer className="bg-gray-900 border border-gray-900 border-solid flex font-akshar items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
