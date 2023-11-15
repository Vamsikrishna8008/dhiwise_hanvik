import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const LoginpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1752px] mx-auto md:px-5 w-full">
          <Img
            className="h-[1080px] md:h-auto object-cover"
            src="images/img_frame5.png"
            alt="frameFive"
          />
          <div className="flex flex-col items-center justify-start md:mt-0 mt-[229px]">
            <Text
              className="md:text-5xl text-[64px] text-black-900"
              size="txtSpaceGroteskMedium64Black900"
            >
              Hanvik Logo
            </Text>
            <Text
              className="mt-[5px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtInterRegular48"
            >
              Welcome to Hanvik Interiors
            </Text>
            <div className="flex flex-col font-inter items-start justify-start mt-10 w-[86%] md:w-full">
              <Text
                className="text-black-900 text-xl"
                size="txtInterRegular20Black900"
              >
                Username
              </Text>
              <Input
                name="username_One"
                placeholder="Enter Username"
                className="!placeholder:text-gray-800 !text-gray-800 leading-[normal] p-0 text-left text-xl w-full"
                wrapClassName="border border-gray-400 border-solid flex mt-[11px] rounded-[10px] shadow-bs1 w-full"
                type="text"
                prefix={
                  <Img
                    className="h-6 mr-6 my-px"
                    src="images/img_userroundedsvgrepocom.svg"
                    alt="user-rounded_svgrepo.com"
                  />
                }
                size="sm"
              ></Input>
              <Text
                className="md:ml-[0] ml-[11px] mt-2.5 text-black-900 text-xl"
                size="txtInterRegular20Black900"
              >
                Password
              </Text>
              <Input
                name="password_One"
                placeholder="Enter Password"
                className="!placeholder:text-gray-800 !text-gray-800 leading-[normal] p-0 text-left text-xl w-full"
                wrapClassName="border border-gray-400 border-solid flex mt-[3px] rounded-[10px] shadow-bs1 w-full"
                type="password"
                prefix={
                  <Img
                    className="h-6 mr-6 my-px"
                    src="images/img_keyminimalistic2svgrepocom.svg"
                    alt="key-minimalistic-2_svgrepo.com"
                  />
                }
                size="sm"
              ></Input>
              <Button
                className="common-pointer cursor-pointer leading-[normal] min-w-[544px] sm:min-w-full mt-11 rounded-[12px] text-center text-xl"
                onClick={() => navigate("/dashboard")}
                color="yellow_800"
                size="sm"
                variant="fill"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginpagePage;
