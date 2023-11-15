import React from "react";

import { Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ProjectDetailvOnePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-akshar items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex flex-row items-center justify-center md:px-5 w-full" />
        <div className="font-inter h-[1108px] md:h-[923px] max-w-[1721px] mt-[120px] mx-auto md:px-5 relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[806px] items-end justify-end pt-[7px] px-[7px] right-[0] w-[71%]"
            style={{ backgroundImage: "url('images/img_image.svg')" }}
          >
            <div className="flex flex-col items-center justify-start mt-[607px] w-[32%] md:w-full">
              <div className="bg-yellow-800 flex flex-col items-end justify-start p-1.5 w-full">
                <div className="flex flex-col items-center justify-start my-10 w-[94%] md:w-full">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                      <Text
                        className="text-gray-900_99 text-lg"
                        size="txtInterRegular18Gray90099"
                      >
                        Total Area
                      </Text>
                      <div className="h-[22px] relative w-1/4">
                        <Text
                          className="m-auto text-gray-900_99 text-lg"
                          size="txtInterRegular18Gray90099"
                        >
                          276.50 m
                        </Text>
                        <Text
                          className="absolute right-[4%] text-[9px] text-gray-900_99 top-[9%]"
                          size="txtInterRegular9"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between w-[94%] md:w-full">
                      <Text
                        className="text-gray-900_99 text-lg"
                        size="txtInterRegular18Gray90099"
                      >
                        Living Space
                      </Text>
                      <div className="h-[22px] relative w-[21%]">
                        <Text
                          className="m-auto text-gray-900_99 text-lg"
                          size="txtInterRegular18Gray90099"
                        >
                          95.30m
                        </Text>
                        <Text
                          className="absolute right-[0] text-[9px] text-gray-900_99 top-[9%]"
                          size="txtInterRegular9"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[74px] items-center justify-start w-full">
                      <Text
                        className="text-gray-900_99 text-lg"
                        size="txtInterRegular18Gray90099"
                      >
                        Material
                      </Text>
                      <Text
                        className="text-gray-900_99 text-lg"
                        size="txtInterRegular18Gray90099"
                      >
                        Prefabricated Concrete
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-spacegrotesk items-center justify-start left-[0] top-[0]">
            <Text
              className="leading-[130.00px] md:text-5xl text-7xl text-gray-50 w-full"
              size="txtSpaceGroteskMedium72Gray50"
            >
              Bright Buttercream Island
            </Text>
          </div>
          <div className="absolute bottom-[0] flex flex-col items-start justify-start left-[0]">
            <Text
              className="leading-[26.00px] text-lg text-yellow-800 w-full"
              size="txtInterRegular18Yellow800"
            >
              A contemporary vacation home designed to blend seamlessly into its
              natural surroundings, featuring expansive views of the lake and
              surrounding mountains.
            </Text>
            <Text
              className="mt-12 text-gray-50 text-lg"
              size="txtInterRegular18Gray50"
            >
              Client
            </Text>
            <Text
              className="mt-[9px] text-2xl md:text-[22px] sm:text-xl text-yellow-800"
              size="txtSpaceGroteskMedium24"
            >
              Forest Lodge
            </Text>
            <Text
              className="mt-[7px] text-gray-50 text-lg"
              size="txtInterRegular18Gray50"
            >
              Hyderabad, India
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-spacegrotesk gap-[39px] justify-start max-w-[1720px] mt-[164px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0]">
            <Text
              className="text-2xl md:text-[22px] text-gray-50 sm:text-xl"
              size="txtSpaceGroteskMedium24Gray50"
            >
              Gallery
            </Text>
          </div>
          <div className="flex flex-col gap-[35px] items-center justify-start w-full">
            <Line className="bg-gray-50 h-px w-full" />
            <Img
              className="h-[2021px]"
              src="images/img_images.svg"
              alt="images"
            />
          </div>
        </div>
        <div className="flex font-spacegrotesk h-[1124px] sm:h-[1301px] md:h-[1443px] justify-end max-w-[1728px] mt-[178px] mx-auto md:px-5 relative w-full">
          <div className="bg-blue_gray-100 h-[688px] mb-[77px] ml-auto mt-auto w-1/2"></div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col items-end justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-yellow-800"
                size="txtSpaceGroteskMedium40Yellow800"
              >
                Challenge
              </Text>
              <Text
                className="leading-[120.00px] mt-[18px] md:text-5xl text-[64px] text-gray-50 w-full"
                size="txtSpaceGroteskMedium64Gray50"
              >
                <span className="text-gray-50 font-spacegrotesk text-left font-medium">
                  How to blend a{" "}
                </span>
                <a
                  href="javascript:"
                  className="md:text-5xl text-gray-50 font-akshar text-left text-7xl font-medium underline"
                >
                  contemporary design seamlessly
                </a>
                <span className="text-gray-50 font-spacegrotesk text-left font-medium">
                  {" "}
                  into a natural environment.
                </span>
              </Text>
              <div className="flex flex-col font-inter md:gap-10 gap-[231px] items-start justify-start mt-[221px] w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-1/2 md:w-full">
                  <Text
                    className="leading-[26.00px] text-gray-300 text-lg"
                    size="txtInterRegular18Gray300"
                  >
                    The Lakefront Retreat project presented a unique challenge
                    for our team, as the client wanted a contemporary vacation
                    home that seamlessly blended into its natural surroundings.
                    This meant that we had to carefully consider how to
                    incorporate modern design elements and materials while also
                    ensuring that the home did not detract from the natural
                    beauty of the lake and surrounding mountains.
                  </Text>
                  <Img
                    className="h-[392px]"
                    src="images/img_image.svg"
                    alt="images_One"
                  />
                </div>
                <Line className="bg-yellow-800 h-px w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-inter md:h-[1029px] h-[1081px] sm:h-[1235px] justify-end max-w-[1709px] mt-[154px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[842px] mb-[33px] mt-auto"
            src="images/img_image.svg"
            alt="image"
          />
          <div className="absolute flex flex-col md:gap-10 gap-[273px] h-full inset-[0] items-end justify-center m-auto w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-yellow-800"
                size="txtSpaceGroteskMedium40Yellow800"
              >
                Solutions
              </Text>
              <Text
                className="leading-[26.00px] mt-[17px] text-lg text-yellow-800 w-[32%] sm:w-full"
                size="txtInterRegular18Yellow800"
              >
                Our team worked closely with the client to design a vacation
                home that was modern and sleek, yet also integrated seamlessly
                into its natural surroundings.
              </Text>
              <Text
                className="leading-[120.00px] md:ml-[0] ml-[541px] mt-[51px] md:text-5xl text-[64px] text-gray-50 w-[69%] sm:w-full"
                size="txtSpaceGroteskMedium64Gray50"
              >
                <span className="text-gray-50 font-spacegrotesk text-left font-medium">
                  We incorporated natural materials such as
                </span>
                <a
                  href="javascript:"
                  className="text-gray-50 font-spacegrotesk text-left font-medium underline"
                >
                  {" "}
                </a>
                <a
                  href="javascript:"
                  className="text-gray-50 font-spacegrotesk text-left font-medium underline"
                >
                  wood and stone, and used large windows
                </a>
                <span className="text-gray-50 font-spacegrotesk text-left font-medium">
                  {" "}
                  and
                </span>
                <a
                  href="javascript:"
                  className="text-gray-50 font-spacegrotesk text-left font-medium underline"
                >
                  {" "}
                  expansive outdoor living spaces
                </a>
              </Text>
            </div>
            <Text
              className="leading-[26.00px] text-lg text-right text-yellow-800 w-[30%] sm:w-full"
              size="txtInterRegular18Yellow800"
            >
              to maximize the stunning views of the lake and surrounding
              mountains. The end result was a contemporary vacation home that
              felt both luxurious and grounded in nature, providing a serene and
              peaceful retreat for the client and their guests.
            </Text>
          </div>
        </div>
        <Footer className="bg-gray-900 border border-gray-900 border-solid flex font-akshar items-center justify-center mt-[120px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProjectDetailvOnePage;
