import React from "react";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
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
        <ul className="flex md:flex-col flex-row gap-6 md:hidden items-center justify-start ml-[465px] mr-[104px] my-[27px] w-auto common-row-list">
          <li>
            <Text
              className="common-pointer hover:font-semibold text-base text-gray-900 hover:text-yellow-800"
              size="txtInterRegular16"
              onClick={() => navigate("/")}
            >
              Home
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              size="txtInterRegular18"
              onClick={() => navigate("/about")}
            >
              About
            </Text>
          </li>
          <li>
            <Text
              className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              size="txtInterRegular18"
            >
              3D Designing
            </Text>
          </li>
          <li>
            <Text
              className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              size="txtInterRegular18"
            >
              Wardrobe
            </Text>
          </li>
          <li>
            <Text
              className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              size="txtInterRegular18"
            >
              False ceilings
            </Text>
          </li>
          <li>
            <Text
              className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              size="txtInterRegular18"
            >
              Painting Works
            </Text>
          </li>
          <li>
            <Text
              className="hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              size="txtInterRegular18"
            >
              Lighting
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer hover:font-semibold text-base text-yellow-800"
              size="txtInterSemiBold16"
              onClick={() => navigate("/project")}
            >
              Modular kitchen
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer hover:font-semibold text-gray-900 text-lg hover:text-yellow-800"
              size="txtInterRegular18"
              onClick={() => navigate("/contact")}
            >
              Contact
            </Text>
          </li>
        </ul>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
