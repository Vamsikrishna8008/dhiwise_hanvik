import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const AboutOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-spacegrotesk items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-[352px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col font-inter items-start justify-start md:px-5 w-full">
            <div className="bg-yellow-800_9b flex flex-col items-start justify-start p-4 w-full">
              <Img
                className="h-8 w-8"
                src="images/img_menualt03svgrepocom.svg"
                alt="menualt03svgrep"
              />
            </div>
            <Line className="bg-yellow-800_7f h-[5px] shadow-bs2 w-full" />
            <Text
              className="ml-10 md:ml-[0] mt-[39px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterMedium24"
            >
              About
            </Text>
            <div className="bg-white-A700 flex flex-col items-start justify-start ml-10 md:ml-[0] mt-[23px] p-4 rounded-lg shadow-bs3 w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-[97%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtInterMedium20Black900"
                  >
                    Banner
                  </Text>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1230px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterMedium16Black900"
                      >
                        <span className="text-black-900 font-inter text-left font-medium">
                          Title
                        </span>
                        <span className="text-red-A400 font-inter text-left font-medium">
                          *
                        </span>
                      </Text>
                      <Input
                        name="frameSixteen"
                        placeholder="Enter Title"
                        className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                        wrapClassName="border border-solid border-yellow-800 w-full"
                        shape="round"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterMedium16Black900"
                      >
                        <span className="text-black-900 font-inter text-left font-medium">
                          Banner Image/Video
                        </span>
                        <span className="text-red-A400 font-inter text-left font-medium">
                          *
                        </span>
                      </Text>
                      <div className="bg-white-A700 border border-solid border-yellow-800 flex flex-row gap-14 items-center justify-start md:pr-10 sm:pr-5 pr-[109px] rounded w-full">
                        <Button
                          className="border border-solid border-yellow-800 cursor-pointer leading-[normal] min-w-[120px] text-base text-center"
                          shape="square"
                          color="gray_50_01"
                          size="xs"
                          variant="fill"
                        >
                          Choose File
                        </Button>
                        <Text
                          className="text-base text-black-900_b2"
                          size="txtInterRegular16Black900b2"
                        >
                          No file chosen
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtInterMedium20Black900"
                >
                  Why Choose Section
                </Text>
                <div className="flex md:flex-col flex-row gap-6 items-end justify-end w-auto md:w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[31%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterMedium16Black900"
                    >
                      Title
                    </Text>
                    <Input
                      name="frameSixteen_One"
                      placeholder="Enter Title"
                      className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                      wrapClassName="border border-solid border-yellow-800 w-full"
                      shape="round"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-[31%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterMedium16Black900"
                    >
                      Description
                    </Text>
                    <Input
                      name="frameSixteen_Two"
                      placeholder="Enter Description"
                      className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                      wrapClassName="border border-solid border-yellow-800 w-full"
                      shape="round"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-[31%] md:w-full">
                    <Text
                      className="text-base text-black-900"
                      size="txtInterMedium16Black900"
                    >
                      Image
                    </Text>
                    <div className="bg-white-A700 border border-solid border-yellow-800 flex flex-row gap-14 items-center justify-start md:pr-10 sm:pr-5 pr-[109px] rounded w-full">
                      <Button
                        className="border border-solid border-yellow-800 cursor-pointer leading-[normal] min-w-[120px] text-base text-center"
                        shape="square"
                        color="gray_50_01"
                        size="xs"
                        variant="fill"
                      >
                        Choose File
                      </Button>
                      <Text
                        className="text-base text-black-900_b2"
                        size="txtInterRegular16Black900b2"
                      >
                        No file chosen
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_addcirclesvgrepocom.svg"
                    alt="addcirclesvgrep"
                  />
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtInterMedium20Black900"
                  >
                    Statistics
                  </Text>
                  <div className="flex flex-col items-start justify-start max-w-[1230px] w-full">
                    <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-medium">
                              Experience
                            </span>
                            <span className="text-red-A400 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frameSixteen_Three"
                            placeholder="Enter Number"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
                            type="number"
                            shape="round"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-medium">
                              Awards
                            </span>
                            <span className="text-red-A400 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frameSixteen_Four"
                            placeholder="Enter Number"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
                            type="number"
                            shape="round"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-medium">
                              Projects
                            </span>
                            <span className="text-red-A400 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frameSixteen_Five"
                            placeholder="Enter Number"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
                            type="number"
                            shape="round"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-medium">
                              Clients Served
                            </span>
                            <span className="text-red-A400 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frameSixteen_Six"
                            placeholder="Enter Number"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
                            type="number"
                            shape="round"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-medium">
                              Clients Satisfaction
                            </span>
                            <span className="text-red-A400 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frameSixteen_Seven"
                            placeholder="Enter Number"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
                            type="number"
                            shape="round"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            <span className="text-black-900 font-inter text-left font-medium">
                              Image
                            </span>
                            <span className="text-red-700 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <div className="bg-white-A700 border border-solid border-yellow-800 flex flex-row gap-14 items-center justify-start md:pr-10 sm:pr-5 pr-[109px] rounded w-full">
                            <Button
                              className="border border-solid border-yellow-800 cursor-pointer leading-[normal] min-w-[120px] text-base text-center"
                              shape="square"
                              color="gray_50_01"
                              size="xs"
                              variant="fill"
                            >
                              Choose File
                            </Button>
                            <Text
                              className="text-base text-black-900_b2"
                              size="txtInterRegular16Black900b2"
                            >
                              No file chosen
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtInterMedium20Black900"
                  >
                    Our Team
                  </Text>
                  <div className="flex flex-col gap-6 items-end justify-end w-auto md:w-full">
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1230px] w-full">
                      <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtInterMedium16Black900"
                        >
                          <span className="text-black-900 font-inter text-left font-medium">
                            Full Name
                          </span>
                          <span className="text-red-A400 font-inter text-left font-medium">
                            *
                          </span>
                        </Text>
                        <Input
                          name="frameSixteen_Eight"
                          placeholder="Enter Full Name"
                          className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                          wrapClassName="border border-solid border-yellow-800 w-full"
                          type="text"
                          shape="round"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtInterMedium16Black900"
                        >
                          <span className="text-black-900 font-inter text-left font-medium">
                            Role
                          </span>
                          <span className="text-red-A400 font-inter text-left font-medium">
                            *
                          </span>
                        </Text>
                        <Input
                          name="frameSixteen_Nine"
                          placeholder="Enter Role"
                          className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                          wrapClassName="border border-solid border-yellow-800 w-full"
                          shape="round"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtInterMedium16Black900"
                        >
                          <span className="text-black-900 font-inter text-left font-medium">
                            Image
                          </span>
                          <span className="text-red-700 font-inter text-left font-medium">
                            *
                          </span>
                        </Text>
                        <div className="bg-white-A700 border border-solid border-yellow-800 flex flex-row gap-14 items-center justify-start md:pr-10 sm:pr-5 pr-[109px] rounded w-full">
                          <Button
                            className="border border-solid border-yellow-800 cursor-pointer leading-[normal] min-w-[120px] text-base text-center"
                            shape="square"
                            color="gray_50_01"
                            size="xs"
                            variant="fill"
                          >
                            Choose File
                          </Button>
                          <Text
                            className="text-base text-black-900_b2"
                            size="txtInterRegular16Black900b2"
                          >
                            No file chosen
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_addcirclesvgrepocom.svg"
                      alt="addcirclesvgrep_One"
                    />
                  </div>
                </div>
                <Button
                  className="common-pointer border border-solid border-yellow-800 cursor-pointer flex items-center justify-center min-w-[170px] rounded-[25px]"
                  onClick={() => navigate("/dashboard")}
                  rightIcon={
                    <div className="ml-1 w-[17px] bg-yellow-800 my-px">
                      <Img src="images/img_upload.svg" alt="upload" />
                    </div>
                  }
                  color="yellow_800"
                  size="md"
                  variant="fill"
                >
                  <div className="font-medium leading-[normal] text-base text-center tracking-[0.24px]">
                    Submit
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOnePage;
