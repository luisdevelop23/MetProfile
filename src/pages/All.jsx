import React from "react";
import ALLNavbar from "../common/ALLNavbar";
import ALLFilter from "../components/ALLFilter";
import ALLUsersCards from "../components/ALLUsersCards";
const All = () => {
  return (
    <div className="">
      <ALLNavbar />
      <div className="mx-auto w-10/12 ">
        <div className="flex">
          <div className="w-3/12">
            <ALLFilter />
          </div>
          <div className="w-7/12  justify-center ">
            <ALLUsersCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
