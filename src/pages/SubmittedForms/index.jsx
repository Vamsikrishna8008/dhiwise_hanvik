import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import SubmittedFormsButton from "components/SubmittedFormsButton";

const SubmittedFormsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-spacegrotesk items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[352px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-yellow-800 flex flex-col items-center justify-end p-[7px] w-full">
              <Text
                className="mt-3 md:text-5xl text-[64px] text-black-900"
                size="txtSpaceGroteskMedium64Black900"
              >
                Logo
              </Text>
            </div>
            <div className="flex font-inter h-60 md:h-[972px] justify-end mb-[668px] mt-16 relative w-full">
              <div
                className="common-pointer absolute bg-blue_gray-900 flex flex-row gap-4 inset-x-[0] items-center justify-start mx-auto p-3 top-[0] w-full"
                onClick={() => navigate("/dashboard")}
              >
                <Img
                  className="h-6 ml-1 w-6"
                  src="images/img_graphsvgrepocom.svg"
                  alt="graphsvgrepocom"
                />
                <Text
                  className="text-base text-white-A700"
                  size="txtInterMedium16"
                >
                  Dashboard
                </Text>
              </div>
              <div
                className="common-pointer absolute bg-gray-900_01 flex flex-row gap-4 inset-x-[0] items-center justify-start mx-auto p-3 top-[27%] w-full"
                onClick={() => navigate("/master")}
              >
                <Img
                  className="h-6 ml-1 w-6"
                  src="images/img_corporate1.svg"
                  alt="corporateOne"
                />
                <Text
                  className="text-base text-white-A700"
                  size="txtInterMedium16"
                >
                  Master
                </Text>
              </div>
              <div className="bg-gray-900_01 flex flex-row gap-4 h-full items-center justify-start mb-16 mt-auto mx-auto p-3 w-full">
                <Img
                  className="h-6 ml-1 w-6"
                  src="images/img_file.svg"
                  alt="file"
                />
                <Text
                  className="text-base text-white-A700"
                  size="txtInterMedium16"
                >
                  Forms
                </Text>
              </div>
              <div className="absolute flex flex-col gap-4 h-full inset-[0] items-center justify-start m-auto w-auto">
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
                  <div className="font-medium leading-[normal] text-base text-left">
                    Dashboard
                  </div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[352px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-4"
                      src="images/img_corporate1.svg"
                      alt="corporate 1"
                    />
                  }
                  shape="square"
                  color="gray_900_01"
                  size="sm"
                  variant="fill"
                >
                  <div className="font-medium leading-[normal] text-base text-left">
                    Master
                  </div>
                </Button>
                <div className="bg-blue_gray-900 flex flex-row gap-4 items-center justify-start p-3 w-full">
                  <Img
                    className="h-6 ml-1 w-6"
                    src="images/img_file.svg"
                    alt="file_One"
                  />
                  <Text
                    className="text-base text-white-A700"
                    size="txtInterMedium16"
                  >
                    Submitted Forms
                  </Text>
                </div>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[352px]"
                  onClick={() => navigate("/loginpage")}
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
                  <div className="font-medium leading-[normal] text-base text-left">
                    Logout
                  </div>
                </Button>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col font-inter items-start justify-start md:px-5 w-full">
            <div className="bg-yellow-800_9b h-16 w-full"></div>
            <Line className="bg-yellow-800_7f h-[5px] shadow-bs2 w-full" />
            <Text
              className="ml-10 md:ml-[0] mt-[39px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterMedium24"
            >
              Submitted Forms
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-start ml-10 md:ml-[0] mt-[23px] p-4 rounded-lg shadow-bs3 w-[95%] md:w-full">
              <div className="bg-white-A700 border border-solid border-yellow-800 flex flex-col md:gap-10 gap-[113px] items-end justify-start rounded w-full">
                <div className="bg-white-A700 border border-solid border-yellow-800 flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly rounded-tl rounded-tr w-full">
                  <Button
                    className="!text-black-900 border border-solid border-yellow-800 cursor-pointer font-medium leading-[normal] min-w-[360px] rounded-tl text-center text-xl"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Name
                  </Button>
                  <Button
                    className="!text-black-900 border border-solid border-yellow-800 cursor-pointer font-medium leading-[normal] min-w-[360px] text-center text-xl"
                    shape="square"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Email
                  </Button>
                  <Button
                    className="!text-black-900 border border-solid border-yellow-800 cursor-pointer font-medium leading-[normal] min-w-[360px] text-center text-xl"
                    shape="square"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Phone Number
                  </Button>
                  <Button
                    className="!text-black-900 border border-solid border-yellow-800 cursor-pointer font-medium leading-[normal] min-w-[376px] sm:min-w-full text-center text-xl"
                    shape="square"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Message
                  </Button>
                </div>
                <div className="bg-gray-100_01 flex flex-col font-ibmplexsans h-12 md:h-auto items-start justify-end shadow-bs4 w-[172px]">
                  <div className="flex flex-row items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start pr-2 w-auto">
                      <div className="flex flex-col h-12 md:h-auto items-start justify-start py-[15px]">
                        <Text
                          className="text-gray-900_02 text-sm tracking-[0.16px] w-auto"
                          size="txtIBMPlexSans14"
                        >
                          Page 1
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end w-auto">
                      <SubmittedFormsButton className="bg-white-A700 flex flex-col items-start justify-start p-0.5 w-[49px]" />
                      <SubmittedFormsButton className="bg-white-A700 flex flex-col items-start justify-start p-0.5 w-[49px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmittedFormsPage;
