import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const DashboardPage = () => {
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
              <div className="absolute bg-blue_gray-900 flex flex-row gap-4 inset-x-[0] items-center justify-start mx-auto p-3 top-[0] w-full">
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
              <div
                className="common-pointer bg-gray-900_01 flex flex-row gap-4 h-full items-center justify-start mb-16 mt-auto mx-auto p-3 w-full"
                onClick={() => navigate("/submittedforms")}
              >
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
                <div className="bg-blue_gray-900 flex flex-row gap-4 items-center justify-start p-3 w-full">
                  <Img
                    className="h-6 ml-1 w-6"
                    src="images/img_graphsvgrepocom.svg"
                    alt="graphsvgrepocom_One"
                  />
                  <Text
                    className="text-base text-white-A700"
                    size="txtInterMedium16"
                  >
                    Dashboard
                  </Text>
                </div>
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
                  <div className="font-medium leading-[normal] text-base text-left">
                    Submitted Forms
                  </div>
                </Button>
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
          <div className="flex flex-1 flex-col font-inter items-center justify-start md:px-5 w-full">
            <div className="bg-yellow-800_9b h-16 w-full"></div>
            <Line className="bg-yellow-800_7f h-[5px] shadow-bs2 w-full" />
            <Text
              className="mt-[460px] text-black-900 text-xl"
              size="txtInterRegular20Black900"
            >
              Welcome to Hanvik interiors Admin panel
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
