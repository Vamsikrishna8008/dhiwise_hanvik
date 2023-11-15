import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ProjectPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-akshar items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <Header className="bg-white-A700 flex flex-row items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[942px] sm:h-auto object-cover w-full"
                src="images/img_placeholder_942x1920.png"
                alt="placeholder"
              />
            </div>
          </div>
          <div className="flex flex-col font-spacegrotesk md:gap-10 gap-[85px] justify-start max-w-[1720px] mt-[184px] mx-auto md:px-5 w-full">
            <Text
              className="md:ml-[0] ml-[242px] md:text-5xl text-[64px] text-gray-50 text-right"
              size="txtSpaceGroteskMedium64Gray50"
            >
              Service Type
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[213px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col md:gap-10 gap-[215px] items-center justify-start sm:ml-[0] w-full">
                    <Line className="bg-gray-50 h-px w-full" />
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl"
                      size="txtSpaceGroteskMedium24Gray50"
                    >
                      3D Designing
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col md:gap-10 gap-[215px] items-center justify-start sm:ml-[0] w-full">
                    <Line className="bg-gray-50 h-px w-full" />
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl"
                      size="txtSpaceGroteskMedium24Gray50"
                    >
                      Lighting
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col md:gap-10 gap-[215px] items-center justify-start sm:ml-[0] w-full">
                    <Line className="bg-gray-50 h-px w-full" />
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl"
                      size="txtSpaceGroteskMedium24Gray50"
                    >
                      False Ceilings
                    </Text>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col md:gap-10 gap-[213px] items-center justify-start w-full">
                    <Line className="bg-gray-50 h-px w-full" />
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl"
                      size="txtSpaceGroteskMedium24Gray50"
                    >
                      Paints Works
                    </Text>
                    <Line className="bg-gray-50 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col md:gap-10 gap-[213px] items-center justify-start w-full">
                    <Line className="bg-gray-50 h-px w-full" />
                    <Text
                      className="text-2xl md:text-[22px] text-center text-gray-50 sm:text-xl"
                      size="txtSpaceGroteskMedium24Gray50"
                    >
                      Wardrobe
                    </Text>
                    <Line className="bg-gray-50 h-px w-full" />
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <Line className="bg-gray-50 h-[3px] w-full" />
                    <div className="h-[415px] md:h-[434px] mt-[19px] relative w-[99%] sm:w-full">
                      <Img
                        className="h-[415px] m-auto object-cover w-full"
                        src="images/img_placeholder_415x553.png"
                        alt="placeholder"
                      />
                      <Text
                        className="absolute h-max inset-[0] justify-center m-auto text-center text-gray-50 text-xl w-max"
                        size="txtSpaceGroteskMedium20"
                      >
                        Modular kitchen
                      </Text>
                    </div>
                    <Line className="bg-gray-50 h-[3px] mt-[23px] w-full" />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-spacegrotesk md:gap-10 gap-[100px] items-start justify-start md:ml-[0] ml-[100px] mt-[175px] md:px-5 w-[83%] md:w-full">
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
                        We&#39;ll start by scheduling an initial consultation to
                        discuss your needs and preferences. During this meeting,
                        we&#39;ll gather information about your project and
                        develop an understanding of your design style and
                        budget.
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
                        present it to you for feedback. We&#39;ll work with you
                        to refine the design until it meets your expectations.
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
                        Once the construction is complete, we&#39;ll schedule a
                        final walk-through to ensure that everything is in order
                        and meets your expectations. We&#39;ll address any
                        concerns or issues and make sure that you&#39;re
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
                        you to ensure that you&#39;re completely satisfied with
                        the project. We&#39;ll also provide you with any
                        necessary information and resources to help you maintain
                        and care for your new space.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-spacegrotesk md:gap-10 gap-[119px] items-center mt-[184px] w-full">
          <div className="flex flex-col md:gap-10 gap-[93px] items-end justify-start max-w-[1725px] mx-auto md:px-5 w-full">
            <Text
              className="md:text-5xl text-[64px] text-gray-50 text-right"
              size="txtSpaceGroteskMedium64Gray50"
            >
              Our Project
            </Text>
            <div className="flex flex-col font-inter items-center justify-start w-full">
              <List
                className="flex flex-col gap-[16.5px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-base text-yellow-800"
                        size="txtInterRegular16Yellow800"
                      >
                        01
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[543px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Lakefront Retreat
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[287px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        2013
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[248px] md:mt-0 mt-[37px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Architeecture Design
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex h-[67px] items-center justify-center md:ml-[0] ml-[193px] md:mt-0 mt-[11px] rotate-[8deg] w-[67px]"
                        shape="round"
                        color="yellow_800"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_upload_yellow_800.svg"
                          alt="upload"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-yellow-800 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="h-5 text-base text-yellow-800"
                        size="txtInterRegular16Yellow800"
                      >
                        02
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[540px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Modern Industrial Loft
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[247px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        2010
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[248px] md:mt-0 mt-[37px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Architecture Design
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex h-[67px] items-center justify-center md:ml-[0] ml-[204px] md:mt-0 mt-[11px] rotate-[8deg] w-[67px]"
                        shape="round"
                        color="yellow_800"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_upload_yellow_800.svg"
                          alt="upload"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-yellow-800 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-base text-yellow-800"
                        size="txtInterRegular16Yellow800"
                      >
                        03
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[539px] md:mt-0 mt-9 text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Sustainable Office Building
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[206px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        2017
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[249px] md:mt-0 mt-[37px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Architecture Design
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex h-[67px] items-center justify-center md:ml-[0] ml-[204px] md:mt-0 mt-[11px] rotate-[8deg] w-[67px]"
                        shape="round"
                        color="yellow_800"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_upload_yellow_800.svg"
                          alt="upload"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-yellow-800 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-base text-yellow-800"
                        size="txtInterRegular16Yellow800"
                      >
                        04
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[539px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Industrial Chic Restaurant
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[216px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        2020
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[245px] md:mt-0 mt-[37px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Interior Design
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex h-[67px] items-center justify-center md:ml-[0] ml-[247px] md:mt-0 mt-[11px] rotate-[8deg] w-[67px]"
                        shape="round"
                        color="yellow_800"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_upload_yellow_800.svg"
                          alt="upload"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-yellow-800 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start my-0 w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Line className="bg-yellow-800 h-px w-full" />
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="h-5 text-base text-yellow-800"
                        size="txtInterRegular16Yellow800"
                      >
                        05
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[540px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Mediterranean Villa
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[270px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        2021
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[249px] md:mt-0 mt-[37px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Architecture Design
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex h-[67px] items-center justify-center md:ml-[0] ml-[204px] md:mt-0 mt-[11px] rotate-[8deg] w-[67px]"
                        shape="round"
                        color="yellow_800"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_upload_yellow_800.svg"
                          alt="upload"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start mt-[33px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-px relative w-full">
                    <Line className="bg-yellow-800 h-px m-auto w-full" />
                    <Line className="absolute bg-yellow-800 h-px inset-[0] justify-center m-auto w-full" />
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-5 w-full">
                    <Text
                      className="h-5 text-base text-gray-50"
                      size="txtInterRegular16Gray50"
                    >
                      06
                    </Text>
                    <div
                      className="common-pointer flex md:flex-col flex-row md:gap-5 items-start justify-start md:mt-0 mt-[5px]"
                      onClick={() => navigate("/projectdetailvone")}
                    >
                      <div className="flex flex-col items-center justify-start w-[22%] md:w-full">
                        <Img
                          className="h-[369px] md:h-auto object-cover w-full"
                          src="images/img_placeholder_369x350.png"
                          alt="placeholder_One"
                        />
                      </div>
                      <Text
                        className="md:ml-[0] ml-[95px] md:mt-0 mt-[31px] text-base text-gray-50"
                        size="txtInterSemiBold16Gray50"
                      >
                        Bright Buttercream Island
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[237px] md:mt-0 mt-[29px] text-gray-50 text-lg"
                        size="txtInterRegular18Gray50"
                      >
                        2022
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[246px] md:mt-0 mt-[29px] text-gray-50 text-lg"
                        size="txtInterRegular18Gray50"
                      >
                        Modular Kitchen
                      </Text>
                      <Button
                        className="flex h-[67px] items-center justify-center md:ml-[0] ml-[232px] md:mt-0 mt-1.5 rotate-[-172deg] w-[67px]"
                        shape="round"
                        color="gray_50"
                        size="lg"
                        variant="outline"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                  </div>
                  <Line className="bg-yellow-800 h-px mt-[27px] w-full" />
                </div>
              </div>
              <List
                className="flex flex-col gap-2.5 items-center mt-5 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="text-base text-yellow-800"
                        size="txtInterRegular16Yellow800"
                      >
                        07
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[541px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Ranch House Remodel
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[243px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        2020
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[245px] md:mt-0 mt-[37px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Architecture Design
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex h-[67px] items-center justify-center md:ml-[0] ml-[204px] md:mt-0 mt-[11px] rotate-[8deg] w-[67px]"
                        shape="round"
                        color="yellow_800"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_upload_yellow_800.svg"
                          alt="upload"
                        />
                      </Button>
                    </div>
                    <Line className="bg-yellow-800 h-px w-full" />
                  </div>
                </div>
                <Line className="self-center h-px bg-yellow-800 w-full" />
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="h-5 text-base text-yellow-800"
                        size="txtInterRegular16Yellow800"
                      >
                        08
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[540px] md:mt-0 mt-[37px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Coastal Cottage Renovation
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[197px] md:mt-0 mt-[35px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        2022
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[246px] md:mt-0 mt-[37px] text-lg text-yellow-800"
                        size="txtInterRegular18Yellow800"
                      >
                        Architecture Design
                      </Text>
                      <Button
                        className="border border-solid border-yellow-800 flex h-[67px] items-center justify-center md:ml-[0] ml-[204px] md:mt-0 mt-[11px] rotate-[8deg] w-[67px]"
                        shape="round"
                        color="yellow_800"
                        size="lg"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_upload_yellow_800.svg"
                          alt="upload"
                        />
                      </Button>
                    </div>
                    <Line className="bg-yellow-800 h-px w-full" />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Footer className="bg-gray-900 border border-gray-900 border-solid flex font-akshar items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
