import React from 'react';
import { Link } from 'react-router-dom';

const RedirectToUser = ({ username }) => {
  return (
    <Link to={`/user/${username}`} className="md:ml-5 text-center rounded-lg bg-[#3ecf8e] px-5 py-2 text-white hover:bg-[#3ecf8e]/90">
      Buscar Perfil
    </Link>
  );
};

export default RedirectToUser;
