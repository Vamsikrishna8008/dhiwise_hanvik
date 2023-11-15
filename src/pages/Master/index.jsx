import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const MasterPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: "Master",
      href: "/master",
      active: window.location.pathname === "/master",
    },
    { label: "3D Designing" },
    { label: "Wardrobe" },
    { label: "False Ceiling" },
    { label: "Paintings" },
    { label: "Lighting" },
    { label: "Modular kitchen" },
    { label: "Home Page", href: "/", active: window.location.pathname === "/" },
    {
      label: "About",
      href: "/about",
      active: window.location.pathname === "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
      active: window.location.pathname === "/contact",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[352px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-yellow-800 flex flex-col font-spacegrotesk items-center justify-end p-[7px] w-full">
              <Text
                className="mt-3 md:text-5xl text-[64px] text-black-900"
                size="txtSpaceGroteskMedium64Black900"
              >
                Logo
              </Text>
            </div>
            <Text
              className="mt-3 md:text-5xl text-[64px] text-black-900"
              size="txtSpaceGroteskMedium64Black900"
            >
              Logo
            </Text>
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[352px] mt-[71px]"
              onClick={() => navigate("/dashboard")}
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
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  flexDirection: "column",
                  paddingLeft: "7px",
                  color: "#ffffff",
                  fontWeight: 500,
                  fontSize: "16px",
                  paddingTop: "7px",
                  paddingBottom: "7px",
                  [`&:hover, &.ps-active`]: { color: "#f0ae2c" },
                },
              }}
              className="flex flex-col font-inter items-center justify-start mt-[25px] md:pr-10 sm:pr-5 pr-[204px] w-[43%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[352px] mt-[46px]"
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
              <div className="font-inter font-medium leading-[normal] text-base text-left">
                Submitted Forms
              </div>
            </Button>
            <Button
              className="common-pointer cursor-pointer flex items-center justify-center mb-[338px] min-w-[352px] mt-4"
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
              <div className="font-inter font-medium leading-[normal] text-base text-left">
                Logout
              </div>
            </Button>
          </Sidebar>
          <div className="flex flex-1 flex-col items-start justify-start md:px-5 w-full">
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
              Modular Kitchen
            </Text>
            <div className="bg-white-A700 flex flex-col items-start justify-start ml-10 md:ml-[0] mt-[23px] p-4 rounded-lg shadow-bs3 w-auto md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtInterMedium20Black900"
                  >
                    Banner
                  </Text>
                  <div className="flex flex-col items-start justify-start max-w-[1230px] w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
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
                            Project Description*
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
                      <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            Total Area*
                          </Text>
                          <Input
                            name="frameSixteen_Two"
                            placeholder="Enter Details"
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
                            Living Space*
                          </Text>
                          <Input
                            name="frameSixteen_Three"
                            placeholder="Enter Details"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
                            shape="round"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            Material*
                          </Text>
                          <Input
                            name="frameSixteen_Four"
                            placeholder="Enter Details"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
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
                            Client Name/ Business Name{" "}
                          </Text>
                          <Input
                            name="frameSixteen_Five"
                            placeholder="Enter Details"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
                            shape="round"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[7px] items-start justify-start w-[49%] md:w-full">
                          <Text
                            className="text-base text-black-900"
                            size="txtInterMedium16Black900"
                          >
                            Client Location
                          </Text>
                          <Input
                            name="frameSixteen_Six"
                            placeholder="Enter Details"
                            className="leading-[normal] p-0 placeholder:text-black-900_b2 text-base text-left w-full"
                            wrapClassName="border border-solid border-yellow-800 w-full"
                            shape="round"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] items-start justify-start w-[33%] md:w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtInterMedium20Black900"
                  >
                    Gallery
                  </Text>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
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
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtInterMedium20Black900"
                  >
                    Challenge
                  </Text>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1230px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterMedium16Black900"
                      >
                        Title
                      </Text>
                      <Input
                        name="frameSixteen_Seven"
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
                        Description
                      </Text>
                      <Input
                        name="frameSixteen_Eight"
                        placeholder="Enter Description"
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
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl"
                    size="txtInterMedium20Black900"
                  >
                    Solution
                  </Text>
                  <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1230px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start w-[33%] md:w-full">
                      <Text
                        className="text-base text-black-900"
                        size="txtInterMedium16Black900"
                      >
                        Title
                      </Text>
                      <Input
                        name="frameSixteen_Nine"
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
                        Description
                      </Text>
                      <Input
                        name="frameSixteen_Ten"
                        placeholder="Enter Description"
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

export default MasterPage;
