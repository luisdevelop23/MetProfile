import React from "react";
import iconGithub from "../assets/icons/github.svg";
import iconLinkedin from "../assets/icons/linkedin.svg";
import UPLearn from "../components/UPLearn";
import UPSjobs from "../components/UPSjobs";
import UPSkills from "../components/UPSkills";
import UPUser from "../components/UPUser";

const UserPage = ({ user }) => {

  
  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div className="mx-auto w-11/12 md:w-11/12 lg:w-12/12 lg:p-2">
          <h1 className="br-title group flex cursor-pointer flex-col text-3xl font-semibold">
            Sobre Mi
            <span className="relative -bottom-1 h-1.5 w-1/12 rounded-full bg-[#3ecf8e] transition-all group-hover:w-2/12"></span>
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="col-span-12 md:col-span-5">
              {/* User */}
              <UPUser data={user.user[0]} />
            </div>

            <div className="col-span-12 md:col-span-7">
              {/* Skills */}
              {user.skills && <UPSkills data={user.skills} />}

              {/* experiencias */}

              {user.jobs && <UPSjobs data={user.jobs} />}

              {/* estudios */}

              {user.learn && <UPLearn data={user.learn} />}
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 bg-white py-8">
          <div className="flex justify-center">
            <h2 className="nnf-regular text-[21px] font-bold text-[#3ecf8e]">
              Creado por : LuisDevelop
            </h2>
          </div>
          <div className="flex justify-center gap-7">
            <a
              href="https://www.linkedin.com/in/luisdevelop23/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconLinkedin} className="w-10" alt="" />
            </a>
            <a
              href="https://github.com/luisdevelop23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconGithub} className="w-10" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
