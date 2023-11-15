import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-yellow-800 flex flex-col items-center justify-end p-[7px] w-full">
          <Text
            className="mt-3 md:text-5xl text-[64px] text-black-900"
            size="txtSpaceGroteskMedium64Black900"
          >
            Logo
          </Text>
        </div>
        <div className="h-[570px] md:h-[980px] mb-[338px] mt-16 relative w-full">
          <div className="absolute bg-blue_gray-900 flex flex-row gap-4 inset-x-[0] items-center justify-start mx-auto p-3 top-[0] w-full">
            <Img
              className="h-6 ml-1 w-6"
              src="images/img_graphsvgrepocom.svg"
              alt="graphsvgrepocom"
            />
            <Text className="text-base text-white-A700" size="txtInterMedium16">
              Dashboard
            </Text>
          </div>
          <div className="absolute bg-gray-900_01 flex flex-row gap-4 inset-x-[0] items-center justify-start mx-auto p-3 top-[11%] w-full">
            <Img
              className="h-6 ml-1 w-6"
              src="images/img_corporate1.svg"
              alt="corporateOne"
            />
            <Text className="text-base text-white-A700" size="txtInterMedium16">
              Master
            </Text>
          </div>
          <div className="bg-gray-900_01 flex flex-row gap-4 h-full items-center justify-start mt-32 mx-auto p-3 w-full">
            <Img
              className="h-6 ml-1 w-6"
              src="images/img_file.svg"
              alt="file"
            />
            <Text className="text-base text-white-A700" size="txtInterMedium16">
              Forms
            </Text>
          </div>
          <div className="absolute flex flex-col gap-4 h-full inset-[0] items-center justify-start m-auto w-auto md:w-full">
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[352px]"
              leftIcon={
                <Img
                  className="h-6 mr-4"
                  src="images/img_graphsvgrepocom.svg"
                  alt="graph_svgrepo.com"
                />
              }
              shape="square"
              color="gray_900_01"
              size="sm"
              variant="fill"
            >
              <div className="font-inter font-medium leading-[normal] text-base text-left">
                Dashboard
              </div>
            </Button>
            <div className="bg-blue_gray-900 flex flex-col items-start justify-start p-4 w-full">
              <div className="flex flex-col gap-4 justify-start mb-[7px] w-[59%] md:w-full">
                <div className="flex flex-row gap-4 items-start justify-start w-1/2 md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_corporate1.svg"
                    alt="corporateOne_One"
                  />
                  <Text
                    className="text-base text-white-A700"
                    size="txtInterMedium16"
                  >
                    Master
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start ml-10 md:ml-[0] w-auto">
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    3D Designing
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Wardrobe
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    False Ceiling
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Paintings
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Lighting
                  </Text>
                  <Text
                    className="text-base text-yellow-800 w-auto"
                    size="txtInterMedium16Yellow800"
                  >
                    Modular kitchen
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Home Page
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    About
                  </Text>
                  <Text
                    className="text-base text-white-A700 w-auto"
                    size="txtInterMedium16"
                  >
                    Contact Us
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[352px]"
              leftIcon={
                <Img
                  className="h-6 mr-4"
                  src="images/img_file.svg"
                  alt="file"
                />
              }
              shape="square"
              color="gray_900_01"
              size="sm"
              variant="fill"
            >
              <div className="font-inter font-medium leading-[normal] text-base text-left">
                Submitted Forms
              </div>
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[352px]"
              leftIcon={
                <Img
                  className="h-6 mr-4"
                  src="images/img_reply.svg"
                  alt="reply"
                />
              }
              shape="square"
              color="gray_900_01"
              size="sm"
              variant="fill"
            >
              <div className="font-inter font-medium leading-[normal] text-base text-left">
                Logout
              </div>
            </Button>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
