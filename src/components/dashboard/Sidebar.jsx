import { useNavigate, NavLink } from "react-router";

import { RiLogoutCircleRLine } from "react-icons/ri";

import { links } from "../../lib/constants";

const Sidebar = ({ onNavClick }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onNavClick();
    navigate("/", { replace: true });
  };

  return (
    <div className="flex h-full flex-col justify-between gap-[5em] text-[1.2em] font-medium">
      <nav className="flex flex-col gap-[1em]">
        {links.map(({ path, Icon, label }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `ms-[2em] lg:ms-[1em] ${isActive ? "bg-[#3FFF90] text-black" : "text-white hover:text-[#3FFF90]"} flex items-center gap-[0.5em] px-[1em] py-[0.8em] transition-colors duration-300 ease-in`
            }
            end={path === ""}
            onClick={onNavClick}
          >
            <Icon className="text-[1.2em]" />
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        className="flex cursor-pointer items-center justify-center gap-[0.5em] border-y border-y-white/30 px-[1em] py-[0.8em] transition-colors duration-300 ease-in hover:text-[#3FFF90]"
        onClick={handleLogout}
      >
        <RiLogoutCircleRLine className="text-[1.2em]" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
