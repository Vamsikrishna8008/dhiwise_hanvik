import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-akshar items-end justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[115px] items-center w-full">
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
            <ul className="flex md:flex-col flex-row font-inter gap-6 md:hidden items-center justify-start ml-[458px] mr-[104px] my-[27px] w-auto common-row-list">
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
                <a
                  href="javascript:"
                  className="hover:font-semibold text-base text-yellow-800"
                >
                  <Text size="txtInterSemiBold16">About</Text>
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
          <div className="font-spacegrotesk h-[1101px] max-w-[1720px] mx-auto md:px-5 relative w-full">
            <div className="flex flex-col items-center justify-start mb-[-111.3px] mx-auto w-[99%] z-[1]">
              <div className="flex flex-col gap-6 justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Text
                    className="mb-3.5 sm:mt-0 mt-[11px] md:text-5xl text-7xl text-gray-50"
                    size="txtSpaceGroteskMedium72Gray50"
                  >
                    Learn About Our{" "}
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[351px] sm:mt-0 mt-[25px] md:text-5xl text-7xl text-gray-300"
                    size="txtSpaceGroteskMedium72Gray300"
                  >
                    /
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[636px] text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                    size="txtSpaceGroteskMedium24Gray50"
                  >
                    Our Story
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[261px] md:text-5xl text-7xl text-gray-50"
                  size="txtSpaceGroteskMedium72Gray50"
                >
                  Vision and Values
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
              <Img
                className="h-[979px] md:h-auto object-cover w-full"
                src="images/img_placeholder_979x1720.png"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-spacegrotesk items-center justify-start mt-40 md:px-5 w-[95%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <Text
              className="sm:flex-1 leading-[120.00px] md:text-5xl text-[64px] text-gray-50 w-[32%] sm:w-full"
              size="txtSpaceGroteskMedium64Gray50"
            >
              Why Choose Archies?
            </Text>
            <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:mt-0 mt-[31px] w-[69%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-[55px] items-start justify-start w-[45%] md:w-full">
                    <Text
                      className="sm:mt-0 mt-[5px] text-base text-yellow-800"
                      size="txtInterRegular16Yellow800"
                    >
                      01
                    </Text>
                    <Text
                      className="md:text-5xl text-[64px] text-yellow-800_87"
                      size="txtAksharMedium64"
                    >
                      Innovative Designs
                    </Text>
                  </div>
                  <Line className="bg-gray-50 h-px w-full" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[37px] w-full">
                <div className="flex flex-col gap-[57px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[92%] md:w-full">
                    <div className="flex flex-col gap-8 items-center justify-start">
                      <div className="flex sm:flex-col flex-row gap-10 items-start justify-start w-full">
                        <Text
                          className="h-5 sm:mt-0 mt-[9px] text-base text-yellow-800"
                          size="txtInterRegular16Yellow800"
                        >
                          02
                        </Text>
                        <Text
                          className="sm:flex-1 leading-[74.00px] md:text-5xl text-[64px] text-gray-50 w-[91%] sm:w-full"
                          size="txtAksharMedium64Gray50"
                        >
                          Exceptional Customer Service
                        </Text>
                      </div>
                      <Text
                        className="leading-[26.00px] text-lg text-yellow-800 w-[82%] sm:w-full"
                        size="txtInterRegular18Yellow800"
                      >
                        Our team of experts is dedicated to providing
                        exceptional customer service. We work closely with you
                        throughout the design and construction process to ensure
                        that your project meets your expectations and is
                        completed on time and within budget.
                      </Text>
                    </div>
                    <Img
                      className="h-[360px] md:mt-0 mt-[19px]"
                      src="images/img_image.svg"
                      alt="image"
                    />
                  </div>
                  <Line className="bg-gray-50 h-px w-full" />
                </div>
              </div>
              <List
                className="flex flex-col gap-[35px] items-center mt-[35px] w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[39px] items-start justify-start w-[54%] md:w-full">
                      <Text
                        className="text-base text-yellow-800"
                        size="txtInterRegular16Yellow800"
                      >
                        03
                      </Text>
                      <Text
                        className="md:text-5xl text-[64px] text-yellow-800_87"
                        size="txtAksharMedium64"
                      >
                        Wide Range of Services
                      </Text>
                    </div>
                    <Line className="bg-gray-50 h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[39px] items-start justify-start w-[43%] md:w-full">
                      <Text
                        className="sm:mt-0 mt-1 text-base text-yellow-800"
                        size="txtInterRegular16Yellow800"
                      >
                        04
                      </Text>
                      <Text
                        className="md:text-5xl text-[64px] text-yellow-800_87"
                        size="txtAksharMedium64"
                      >
                        Experienced Team
                      </Text>
                    </div>
                    <Line className="bg-gray-50 h-px w-full" />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="md:h-[1080px] sm:h-[1125px] h-[988px] mt-[159px] md:px-5 relative w-[95%] md:w-full">
          <div className="absolute flex flex-col gap-[22px] h-max inset-y-[0] justify-start left-[0] my-auto w-[95%]">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start mr-[1045px] w-2/5 md:w-full">
              <List
                className="flex flex-col gap-[58px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex my-0 relative w-full">
                  <div className="flex flex-col gap-[51px] items-start justify-start my-auto">
                    <Text
                      className="md:text-5xl text-[64px] text-gray-50"
                      size="txtSpaceGroteskMedium64Gray50"
                    >
                      30+
                    </Text>
                    <Text
                      className="text-lg text-yellow-800"
                      size="txtInterRegular18Yellow800"
                    >
                      Years of Experience
                    </Text>
                  </div>
                  <Line className="bg-gray-50 h-px mb-[46px] ml-[-170px] mr-auto mt-auto w-full z-[1]" />
                </div>
                <div className="flex my-0 relative w-full">
                  <div className="flex flex-col gap-[49px] items-start justify-start my-auto">
                    <Text
                      className="md:text-5xl text-[64px] text-gray-50"
                      size="txtSpaceGroteskMedium64Gray50"
                    >
                      86
                    </Text>
                    <Text
                      className="text-lg text-yellow-800"
                      size="txtInterRegular18Yellow800"
                    >
                      Awards
                    </Text>
                  </div>
                  <Line className="bg-gray-50 h-px mb-[45px] ml-[-79px] mr-auto mt-auto w-full z-[1]" />
                </div>
              </List>
              <div className="flex relative w-full">
                <div className="flex flex-col gap-[47px] items-start justify-start my-auto">
                  <Text
                    className="md:text-5xl text-[64px] text-gray-50"
                    size="txtSpaceGroteskMedium64Gray50"
                  >
                    254,267+
                  </Text>
                  <Text
                    className="text-lg text-yellow-800"
                    size="txtInterRegular18Yellow800"
                  >
                    Projects
                  </Text>
                </div>
                <Line className="bg-gray-50 h-px mb-[46px] ml-[-287px] mr-auto mt-auto w-full z-[1]" />
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[61px] items-center justify-start md:ml-[0] ml-[1045px] w-2/5 md:w-full">
              <div className="flex relative w-full">
                <div className="flex flex-col gap-[45px] items-start justify-start my-auto">
                  <Text
                    className="md:text-5xl text-[64px] text-gray-50"
                    size="txtSpaceGroteskMedium64Gray50"
                  >
                    32,802
                  </Text>
                  <Text
                    className="text-lg text-yellow-800"
                    size="txtInterRegular18Yellow800"
                  >
                    Clients Served
                  </Text>
                </div>
                <Line className="bg-gray-50 h-px mb-11 ml-[-214px] mr-auto mt-auto w-full z-[1]" />
              </div>
              <div className="flex relative w-full">
                <div className="flex flex-col gap-[49px] items-start justify-start my-auto">
                  <Text
                    className="md:text-5xl text-[64px] text-gray-50"
                    size="txtSpaceGroteskMedium64Gray50"
                  >
                    90%
                  </Text>
                  <Text
                    className="text-lg text-yellow-800"
                    size="txtInterRegular18Yellow800"
                  >
                    Client Satisfaction
                  </Text>
                </div>
                <Line className="bg-gray-50 h-px mb-11 ml-[-155px] mr-auto mt-auto w-full z-[1]" />
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[526px] right-[0] top-[0]"
            src="images/img_image.svg"
            alt="image_One"
          />
        </div>
        <div className="flex flex-col font-spacegrotesk items-start mt-[180px] md:px-10 sm:px-5 px-[100px] w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-start justify-start w-[92%] md:w-full">
            <Text
              className="md:text-5xl text-[64px] text-gray-50 text-right"
              size="txtSpaceGroteskMedium64Gray50"
            >
              Our Process
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="gap-40 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row font-akshar gap-[46px] items-center justify-start w-[45%] md:w-full">
                        <Text
                          className="md:text-5xl text-[64px] text-gray-300"
                          size="txtAksharMedium64Gray300"
                        >
                          01
                        </Text>
                        <Img
                          className="h-[60px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="mt-[34px] md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                        size="txtInterSemiBold32"
                      >
                        Initial Consultation
                      </Text>
                      <Text
                        className="leading-[26.00px] mt-3 text-base text-yellow-800 w-full"
                        size="txtInterRegular16Yellow800"
                      >
                        <>
                          We&#39;ll start by scheduling an initial consultation
                          to discuss your needs and preferences. During this
                          meeting, we&#39;ll gather information about your
                          project and develop an understanding of your design
                          style and budget.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row font-akshar gap-[37px] items-center justify-start w-[45%] md:w-full">
                        <Text
                          className="md:text-5xl text-[64px] text-gray-300"
                          size="txtAksharMedium64Gray300"
                        >
                          02
                        </Text>
                        <Img
                          className="h-[60px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="mt-[38px] md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                        size="txtInterSemiBold32"
                      >
                        Design Concept
                      </Text>
                      <Text
                        className="leading-[26.00px] mt-[9px] text-base text-yellow-800 w-full"
                        size="txtInterRegular16Yellow800"
                      >
                        <>
                          Based on the information gathered during the initial
                          consultation, we&#39;ll develop a design concept and
                          present it to you for feedback. We&#39;ll work with
                          you to refine the design until it meets your
                          expectations.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row font-akshar gap-[38px] items-center justify-start w-[45%] md:w-full">
                        <Text
                          className="md:text-5xl text-[64px] text-gray-300"
                          size="txtAksharMedium64Gray300"
                        >
                          03
                        </Text>
                        <Img
                          className="h-[60px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="mt-[34px] md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                        size="txtInterSemiBold32"
                      >
                        Construction
                      </Text>
                      <Text
                        className="leading-[26.00px] mt-3 text-base text-yellow-800 w-full"
                        size="txtInterRegular16Yellow800"
                      >
                        <>
                          Once the design is finalized, we&#39;ll move on to the
                          construction phase. We&#39;ll manage the entire
                          construction process, from selecting contractors to
                          overseeing the work, to ensure that your project is
                          completed on time and within budget.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row font-akshar gap-9 items-center justify-start w-[45%] md:w-full">
                        <Text
                          className="md:text-5xl text-[64px] text-gray-300"
                          size="txtAksharMedium64Gray300"
                        >
                          04
                        </Text>
                        <Img
                          className="h-[60px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="mt-[38px] md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                        size="txtInterSemiBold32"
                      >
                        Final Walk-Through
                      </Text>
                      <Text
                        className="leading-[26.00px] mt-[9px] text-base text-yellow-800 w-full"
                        size="txtInterRegular16Yellow800"
                      >
                        <>
                          Once the construction is complete, we&#39;ll schedule
                          a final walk-through to ensure that everything is in
                          order and meets your expectations. We&#39;ll address
                          any concerns or issues and make sure that you&#39;re
                          satisfied with the final result.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row font-akshar gap-9 items-center justify-start w-[45%] md:w-full">
                        <Text
                          className="md:text-5xl text-[64px] text-gray-300"
                          size="txtAksharMedium64Gray300"
                        >
                          05
                        </Text>
                        <Img
                          className="h-[60px]"
                          src="images/img_arrowright.svg"
                          alt="arrowright"
                        />
                      </div>
                      <Text
                        className="mt-[38px] md:text-3xl sm:text-[28px] text-[32px] text-gray-50"
                        size="txtInterSemiBold32"
                      >
                        Follow-Up
                      </Text>
                      <Text
                        className="leading-[26.00px] mt-2 text-base text-yellow-800 w-full"
                        size="txtInterRegular16Yellow800"
                      >
                        <>
                          After the final walk-through, we&#39;ll follow up with
                          you to ensure that you&#39;re completely satisfied
                          with the project. We&#39;ll also provide you with any
                          necessary information and resources to help you
                          maintain and care for your new space.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-spacegrotesk md:gap-10 gap-[120px] items-center mt-[178px] w-full">
          <div className="h-[1285px] md:h-[2504px] sm:h-[3081px] max-w-[1720px] mx-auto md:px-5 relative w-full">
            <Text
              className="absolute right-[12%] md:text-5xl text-[64px] text-gray-50 top-[0]"
              size="txtSpaceGroteskMedium64Gray50"
            >
              Our Team
            </Text>
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-1/4 md:w-full">
                    <Img
                      className="h-[474px]"
                      src="images/img_image.svg"
                      alt="image_Two"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <Input
                        name="groupTwentyOne"
                        placeholder="William Stone"
                        className="font-medium font-spacegrotesk md:text-[22px] p-0 placeholder:text-gray-50 sm:pr-5 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="pr-[35px] w-full"
                        color="gray_50"
                        size="md"
                        variant="underline"
                      ></Input>
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Principal Architect
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start ml-5 md:ml-[0] w-1/4 md:w-full">
                    <Img
                      className="h-[474px]"
                      src="images/img_image.svg"
                      alt="image_Three"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Input
                        name="groupNineteen"
                        placeholder="Jane Pullman"
                        className="font-medium font-spacegrotesk md:text-[22px] p-0 placeholder:text-gray-50 sm:pr-5 sm:text-xl text-2xl text-left w-full"
                        wrapClassName="pr-[35px] w-full"
                        color="gray_50"
                        size="md"
                        variant="underline"
                      ></Input>
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Lead Interior Designer
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[83px] md:ml-[0] ml-[811px] md:mt-0 mt-[116px]"
                    src="images/img_arrowdown_gray_300.svg"
                    alt="arrowdown"
                  />
                </div>
                <List
                  className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
                    <Img
                      className="h-[474px]"
                      src="images/img_image.svg"
                      alt="image"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <div className="flex flex-col font-spacegrotesk gap-3 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                          size="txtSpaceGroteskMedium24Gray50"
                        >
                          Emily Ortega
                        </Text>
                        <Line className="bg-gray-50 h-px w-full" />
                      </div>
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Marketing Manager
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
                    <Img
                      className="h-[474px]"
                      src="images/img_image.svg"
                      alt="image"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <div className="flex flex-col font-spacegrotesk gap-3 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                          size="txtSpaceGroteskMedium24Gray50"
                        >
                          Rieta Taylor
                        </Text>
                        <Line className="bg-gray-50 h-px w-full" />
                      </div>
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Construction Manager
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[26px] items-center justify-start w-full">
                    <Img
                      className="h-[474px]"
                      src="images/img_image.svg"
                      alt="image"
                    />
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <div className="flex flex-col font-spacegrotesk gap-3.5 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                          size="txtSpaceGroteskMedium24Gray50"
                        >
                          David Combs
                        </Text>
                        <Line className="bg-gray-50 h-px w-full" />
                      </div>
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Project Manager
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
                    <Img
                      className="h-[474px]"
                      src="images/img_image.svg"
                      alt="image"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <div className="flex flex-col font-spacegrotesk gap-3 items-start justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
                          size="txtSpaceGroteskMedium24Gray50"
                        >
                          Hailey Johnson
                        </Text>
                        <Line className="bg-gray-50 h-px w-full" />
                      </div>
                      <Text
                        className="text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Design Consultant
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-900 border border-gray-900 border-solid flex font-akshar items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
