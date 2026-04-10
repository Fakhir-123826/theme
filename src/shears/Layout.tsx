import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";   // ← Link add kiya
import {
  FaBars, FaHome, FaStore, FaUsers, FaBox, FaHandshake, FaExchangeAlt,
  FaFileAlt, FaGlobe, FaChartBar, FaShoppingBag, FaProjectDiagram, FaCog,
  FaShoppingCart, FaMagento, FaChevronDown, FaBell, FaSearch,
} from "react-icons/fa";

interface MenuItem {
  label: string;
  path?: string;
  icon?: any;
  children?: MenuItem[];
  matchPaths?: string[];
}

const menuItems: MenuItem[] = [
  { label: "Dashboard", icon: FaHome, path: "/" },
  { label: "Themes Pages", icon: FaShoppingCart, path: "/ThemesPage" },
  { label: "Luma", icon: FaHandshake, path: "/ThemesStorePage" },
  // { label: "Themes Store Page", icon: FaExchangeAlt, path: "/ThemesStorePage" },
  // { label: "CMS", icon: FaFileAlt, path: "/cms" },
  // { label: "Marketplace", icon: FaShoppingBag, path: "/marketplace" },
  {
    label: "Settings",
    icon: FaCog,
    children: [
      { label: "Translation", path: "/translation" },
      { label: "Backups", path: "/backups" },
      { label: "Audit Logs", path: "/auditlogs" },
    ],
  },
];

// ================== RECURSIVE MENU ITEM (with Link) ==================
const RecursiveMenuItem = ({
  item,
  depth = 0,
  collapsed,
  currentPath,
  openMenus,
  toggleMenu,
}: any) => {
  const Icon = item.icon;
  const hasChildren = !!item.children?.length;
  const menuKey = `${depth}-${item.label}`;

  const isOpen = openMenus.includes(menuKey);
  const isActive =
    (item.path === currentPath) ||
    item.matchPaths?.some((p: string) => currentPath.startsWith(p)) ||
    (item.children && item.children.some((child: any) =>
      child.path === currentPath || currentPath.startsWith(child.path || '')
    ));

  const content = (
    <div
      onClick={() => hasChildren && toggleMenu(menuKey)}
      className={`flex items-center justify-between px-6 py-3.5 text-[15px] font-medium rounded-xl cursor-pointer transition-all
        ${isActive
          ? "bg-blue-600 text-white"
          : "text-gray-200 hover:bg-blue-700 hover:text-white"
        }
        ${collapsed && depth === 0 ? "justify-center px-4" : ""}`}
    >
      <div className="flex items-center gap-4">
        {Icon && depth === 0 && (
          <Icon className={`text-xl flex-shrink-0 ${isActive ? "text-white" : "text-blue-300"}`} />
        )}
        {!collapsed && <span>{item.label}</span>}
      </div>

      {hasChildren && !collapsed && (
        <FaChevronDown className={`text-sm transition-transform ${isOpen ? "rotate-180" : ""}`} />
      )}
    </div>
  );

  return (
    <div className="relative">
      {item.path && !hasChildren ? (
        <Link to={item.path}>{content}</Link>
      ) : (
        content
      )}

      {/* Submenu */}
      {hasChildren && isOpen && !collapsed && (
        <div className="ml-8 mt-1 space-y-1">
          {item.children!.map((child: MenuItem, idx: number) => (
            <RecursiveMenuItem
              key={idx}
              item={child}
              depth={depth + 1}
              collapsed={collapsed}
              currentPath={currentPath}
              openMenus={openMenus}
              toggleMenu={toggleMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ================== MAIN LAYOUT ==================
const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const adminRaw = localStorage.getItem("admin");
  const admin = adminRaw ? JSON.parse(adminRaw) : null;
  const initials = admin
    ? `${admin.firstname?.[0] ?? ""}${admin.lastname?.[0] ?? ""}`.toUpperCase()
    : "A";

  const handleLogout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("admin_token");
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Auto-open menus
  useEffect(() => {
    const autoOpen: string[] = [];
    const findOpenMenus = (items: MenuItem[], depth: number) => {
      items.forEach((item) => {
        if (item.children &&
          (item.path === location.pathname ||
            location.pathname.startsWith(item.path || '') ||
            item.children.some((c: any) => c.path === location.pathname))) {
          autoOpen.push(`${depth}-${item.label}`);
          findOpenMenus(item.children, depth + 1);
        }
      });
    };
    findOpenMenus(menuItems, 0);
    setOpenMenus(autoOpen);
  }, [location.pathname]);

  const toggleMenu = (key: string) => {
    setOpenMenus((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className={`${collapsed ? "w-20" : "w-72"} bg-[#1e40af] text-white flex flex-col transition-all duration-300 shadow-2xl`}>

        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-blue-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">M</span>
            </div>
            {!collapsed && <span className="font-semibold text-xl tracking-tight">Madd Admin</span>}
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          {menuItems.map((item, index) => (
            <RecursiveMenuItem
              key={index}
              item={item}
              depth={0}
              collapsed={collapsed}
              currentPath={location.pathname}
              openMenus={openMenus}
              toggleMenu={toggleMenu}
            />
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-blue-700 mt-auto">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 px-4 py-3 hover:bg-blue-700 rounded-2xl cursor-pointer"
          >
            <div className="w-9 h-9 bg-white text-blue-600 rounded-2xl flex items-center justify-center font-bold">
              {initials}
            </div>
            {!collapsed && (
              <div className="text-sm">
                <p className="font-medium">{admin ? `${admin.firstname} ${admin.lastname}` : "Admin"}</p>
                <p className="text-blue-300 text-xs truncate">{admin?.email}</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setCollapsed(!collapsed)} className="p-3 hover:bg-gray-100 rounded-2xl">
              <FaBars className="text-2xl text-gray-700" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-800">Admin Panel</h1>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setShowSearch(!showSearch)} className="p-3 hover:bg-gray-100 rounded-2xl">
              <FaSearch className="text-2xl text-gray-600" />
            </button>
            <button className="p-3 hover:bg-gray-100 rounded-2xl relative">
              <FaBell className="text-2xl text-gray-600" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;