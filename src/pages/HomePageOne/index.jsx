import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const HomePageOnePage = () => {
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
            <div className="font-inter md:h-[1055px] h-[570px] mb-[413px] mt-16 relative w-full">
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
              <div className="absolute bg-gray-900_01 flex flex-row gap-4 inset-x-[0] items-center justify-start mx-auto p-3 top-[11%] w-full">
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
              <div className="bg-gray-900_01 flex flex-row gap-4 h-full items-center justify-start mt-32 mx-auto p-3 w-full">
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
                      <a
                        href="javascript:"
                        className="text-base text-white-A700 w-auto"
                      >
                        <Text size="txtInterMedium16">Contact Us</Text>
                      </a>
                    </div>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer flex items-center justify-center min-w-[352px]"
                  onClick={() => navigate("/submittedforms")}
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
              className="ml-10 md:ml-[0] mt-[41px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
              size="txtInterMedium24"
            >
              Home Page
            </Text>
            <div className="bg-white-A700 flex flex-col items-start justify-start ml-10 md:ml-[0] mt-[21px] p-4 rounded-lg shadow-bs3 w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
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
                          Banner Image
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
                    <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterMedium16Black900"
                      >
                        Description*
                      </Text>
                      <Input
                        name="frameSixteen_One"
                        placeholder="Enter Description"
                        className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                        wrapClassName="border border-solid border-yellow-800 w-full"
                        shape="round"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtInterMedium20Black900"
                  >
                    About Section
                  </Text>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterMedium16Black900"
                      >
                        Title
                      </Text>
                      <Input
                        name="frameSixteen_Two"
                        placeholder="Enter Title"
                        className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                        wrapClassName="border border-solid border-yellow-800 w-full"
                        shape="round"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterMedium16Black900"
                      >
                        Description
                      </Text>
                      <Input
                        name="frameSixteen_Three"
                        placeholder="Enter Description"
                        className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                        wrapClassName="border border-solid border-yellow-800 w-full"
                        shape="round"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
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
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-black-900 text-xl w-auto"
                    size="txtInterMedium20Black900"
                  >
                    Statistics
                  </Text>
                  <div className="flex flex-col items-start justify-start max-w-[1230px] w-full">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            Experience
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
                        <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            Awards
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
                        <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            Projects
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
                      </div>
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[67%] md:w-full">
                        <div className="flex flex-col gap-[7px] items-start justify-start w-[49%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            Clients Served
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
                        <div className="flex flex-col gap-[7px] items-start justify-start w-[49%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            Clients Satisfaction
                          </Text>
                          <Input
                            name="frameSixteen_Eight"
                            placeholder="Enter Number"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
                            type="number"
                            shape="round"
                          ></Input>
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
                    Notable Projects
                  </Text>
                  <div className="flex flex-col items-start justify-start max-w-[1230px] w-full">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-[33%]">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterMedium16Black900"
                      >
                        Select Projects
                      </Text>
                      <Input
                        name="frameSixteen_Nine"
                        placeholder="Enter Number"
                        className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                        wrapClassName="border border-solid border-yellow-800 flex w-full"
                        type="number"
                        suffix={
                          <Img
                            className="h-6 ml-3 my-auto"
                            src="images/img_arrowdown_black_900.svg"
                            alt="arrow_down"
                          />
                        }
                        shape="round"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtInterMedium20Black900"
                  >
                    FAQ
                  </Text>
                  <div className="flex md:flex-col flex-row gap-6 items-end justify-end w-auto md:w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[47%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterMedium16Black900"
                      >
                        Title
                      </Text>
                      <Input
                        name="frameSixteen_Ten"
                        placeholder="Enter Title"
                        className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                        wrapClassName="border border-solid border-yellow-800 w-full"
                        shape="round"
                      ></Input>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-end justify-between w-[51%] md:w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start">
                        <Text
                          className="text-base text-black-900"
                          size="txtInterMedium16Black900"
                        >
                          Description
                        </Text>
                        <Input
                          name="frameSixteen_Eleven"
                          placeholder="Enter Description"
                          className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                          wrapClassName="border border-solid border-yellow-800 w-full"
                          shape="round"
                        ></Input>
                      </div>
                      <Img
                        className="h-5 sm:mt-0 mt-[42px] w-5"
                        src="images/img_addcirclesvgrepocom.svg"
                        alt="addcirclesvgrep"
                      />
                    </div>
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

export default HomePageOnePage;
