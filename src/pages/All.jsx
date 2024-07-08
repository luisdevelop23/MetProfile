import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import ALLNavbar from "../common/ALLNavbar";
import ALLFilter from "../components/ALLFilter";
import ALLUsersCards from "../components/ALLUsersCards";
import supabase from "../utils/supabase";
const All = () => {
  const [UsersCards, setUsersCards] = useState([])
  
  const getAllUsers = async () => {
    const { data, error } = await supabase
      .from("usuarios")
      .select("*")
      .order("id", { ascending: false });
    setUsersCards(data);
  };
  // getAllUsers();
  useEffect(() => {
    getAllUsers();
  }, [data])

  // console.log("all", UsersCards);

  return (
    <div className="">
      <ALLNavbar />
      <div className="mx-auto w-10/12 ">
        <div className="flex">
          <div className="w-3/12">
            <ALLFilter />
          </div>
          <div className="w-7/12  justify-center ">
            {
              UsersCards.map((user) => {
                return (
                  <ALLUsersCards user={user} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
