
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { 
  Users, 
  Calendar, 
  CreditCard, 
  BarChart, 
  Settings as SettingsIcon, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";
import { cn } from "@/lib/utils";

// Admin Dashboard Components
const Dashboard = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {[
        { title: "Total Clients", value: "156", icon: Users, color: "bg-blue-100 text-blue-600" },
        { title: "Appointments", value: "32", icon: Calendar, color: "bg-green-100 text-green-600" },
        { title: "Revenue", value: "$8,245", icon: CreditCard, color: "bg-purple-100 text-purple-600" },
        { title: "Growth", value: "+12%", icon: BarChart, color: "bg-orange-100 text-orange-600" },
      ].map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">{card.title}</p>
              <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
            </div>
            <div className={`p-2 rounded-md ${card.color}`}>
              <card.icon className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Appointments</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <p className="font-medium">Client Name {item}</p>
                <p className="text-sm text-muted-foreground">Service Type {item}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Today, 2:00 PM</p>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">Confirmed</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full text-center text-sm text-primary">View All Appointments</button>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-border shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recent Payments</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <p className="font-medium">Payment #{1000 + item}</p>
                <p className="text-sm text-muted-foreground">Client Name {item}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${(Math.random() * 1000).toFixed(2)}</p>
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">Completed</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full text-center text-sm text-primary">View All Payments</button>
      </div>
    </div>
  </div>
);

const Clients = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Client Management</h2>
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border">
        <h3 className="text-lg font-semibold">All Clients</h3>
        <div className="mt-2 sm:mt-0 flex gap-2">
          <input
            type="text"
            placeholder="Search clients..."
            className="px-3 py-1 border border-border rounded-md text-sm"
          />
          <button className="bg-primary text-primary-foreground px-4 py-1 rounded-md text-sm">Add New</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary text-sm">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">Appointments</th>
              <th className="text-left p-4">Total Spent</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="p-4">Client Name {item}</td>
                <td className="p-4">client{item}@example.com</td>
                <td className="p-4">(123) 456-789{item}</td>
                <td className="p-4">{Math.floor(Math.random() * 10)}</td>
                <td className="p-4">${(Math.random() * 2000).toFixed(2)}</td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                    <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 flex justify-between items-center bg-white border-t border-border">
        <p className="text-sm text-muted-foreground">Showing 1-5 of 24 clients</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-border rounded-md text-sm">Previous</button>
          <button className="px-3 py-1 border border-border rounded-md text-sm bg-primary text-primary-foreground">Next</button>
        </div>
      </div>
    </div>
  </div>
);

const Appointments = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Appointment Management</h2>
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border">
        <h3 className="text-lg font-semibold">Upcoming Appointments</h3>
        <div className="mt-2 sm:mt-0 flex gap-2">
          <select className="px-3 py-1 border border-border rounded-md text-sm">
            <option>All Status</option>
            <option>Confirmed</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <button className="bg-primary text-primary-foreground px-4 py-1 rounded-md text-sm">New Appointment</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary text-sm">
            <tr>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">Service</th>
              <th className="text-left p-4">Date & Time</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Payment</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="p-4">Client Name {item}</td>
                <td className="p-4">Service Type {item}</td>
                <td className="p-4">Jul 1{item}, 2023 - 10:00 AM</td>
                <td className="p-4">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    item % 3 === 0 ? "bg-yellow-100 text-yellow-700" :
                    item % 3 === 1 ? "bg-green-100 text-green-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {item % 3 === 0 ? "Pending" :
                     item % 3 === 1 ? "Confirmed" :
                     "Cancelled"}
                  </span>
                </td>
                <td className="p-4">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    item % 2 === 0 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                  }`}>
                    {item % 2 === 0 ? "Paid" : "Unpaid"}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                    <button className="text-red-600 hover:text-red-800 text-sm">Cancel</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 flex justify-between items-center bg-white border-t border-border">
        <p className="text-sm text-muted-foreground">Showing 1-5 of 18 appointments</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-border rounded-md text-sm">Previous</button>
          <button className="px-3 py-1 border border-border rounded-md text-sm bg-primary text-primary-foreground">Next</button>
        </div>
      </div>
    </div>
  </div>
);

const Payments = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Payment Records</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {[
        { title: "Total Revenue", value: "$24,568", description: "Last 30 days" },
        { title: "Pending Payments", value: "$3,240", description: "5 payments pending" },
        { title: "Average Transaction", value: "$186", description: "Up 12% from last month" },
      ].map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-lg border border-border shadow-sm">
          <p className="text-sm text-muted-foreground">{card.title}</p>
          <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
          <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
        </div>
      ))}
    </div>
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-border">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <div className="mt-2 sm:mt-0 flex gap-2">
          <select className="px-3 py-1 border border-border rounded-md text-sm">
            <option>All Time</option>
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
          <button className="bg-primary text-primary-foreground px-4 py-1 rounded-md text-sm">Export</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary text-sm">
            <tr>
              <th className="text-left p-4">Transaction ID</th>
              <th className="text-left p-4">Client</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Method</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item} className="border-b border-border hover:bg-secondary/30 transition-colors">
                <td className="p-4">TXN-{1000 + item}</td>
                <td className="p-4">Client Name {item}</td>
                <td className="p-4">Jul 1{item}, 2023</td>
                <td className="p-4">${(Math.random() * 500).toFixed(2)}</td>
                <td className="p-4">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    item % 4 === 0 ? "bg-yellow-100 text-yellow-700" :
                    item % 4 === 1 ? "bg-green-100 text-green-700" :
                    item % 4 === 2 ? "bg-red-100 text-red-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {item % 4 === 0 ? "Pending" :
                     item % 4 === 1 ? "Completed" :
                     item % 4 === 2 ? "Failed" :
                     "Refunded"}
                  </span>
                </td>
                <td className="p-4">
                  {item % 3 === 0 ? "Credit Card" :
                   item % 3 === 1 ? "PayPal" :
                   "Bank Transfer"}
                </td>
                <td className="p-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Details</button>
                    {item % 4 === 1 && (
                      <button className="text-orange-600 hover:text-orange-800 text-sm">Refund</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 flex justify-between items-center bg-white border-t border-border">
        <p className="text-sm text-muted-foreground">Showing 1-5 of 32 transactions</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-border rounded-md text-sm">Previous</button>
          <button className="px-3 py-1 border border-border rounded-md text-sm bg-primary text-primary-foreground">Next</button>
        </div>
      </div>
    </div>
  </div>
);

const SettingsPanel = () => (
  <div>
    <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
    <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold mb-4">Profile Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Full Name</label>
            <input
              type="text"
              defaultValue="Admin User"
              className="w-full px-3 py-2 border border-border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Email Address</label>
            <input
              type="email"
              defaultValue="admin@example.com"
              className="w-full px-3 py-2 border border-border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Phone Number</label>
            <input
              type="tel"
              defaultValue="(123) 456-7890"
              className="w-full px-3 py-2 border border-border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Position</label>
            <input
              type="text"
              defaultValue="Administrator"
              className="w-full px-3 py-2 border border-border rounded-md"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm text-muted-foreground mb-1">Bio</label>
          <textarea
            defaultValue="System administrator responsible for managing the dashboard and user accounts."
            className="w-full px-3 py-2 border border-border rounded-md h-24"
          ></textarea>
        </div>
        <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
          Save Changes
        </button>
      </div>
      
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold mb-4">Password</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">Current Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-border rounded-md"
            />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-border rounded-md"
              />
            </div>
          </div>
        </div>
        <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
          Update Password
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-muted-foreground">Receive notifications about new appointments and payments</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="email-notifications" className="mr-2" defaultChecked />
              <label htmlFor="email-notifications">Enabled</label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">SMS Notifications</h4>
              <p className="text-sm text-muted-foreground">Receive text messages for important updates</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="sms-notifications" className="mr-2" defaultChecked />
              <label htmlFor="sms-notifications">Enabled</label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Browser Notifications</h4>
              <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="browser-notifications" className="mr-2" />
              <label htmlFor="browser-notifications">Enabled</label>
            </div>
          </div>
        </div>
        <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
          Save Preferences
        </button>
      </div>
    </div>
  </div>
);

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  
  // For mobile viewport
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  // Mock authentication check (in a real application, this would check if the user is logged in)
  const isAuthenticated = true;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  const navItems = [
    { path: "/admin", label: "Dashboard", icon: BarChart },
    { path: "/admin/clients", label: "Clients", icon: Users },
    { path: "/admin/appointments", label: "Appointments", icon: Calendar },
    { path: "/admin/payments", label: "Payments", icon: CreditCard },
    { path: "/admin/settings", label: "Settings", icon: SettingsIcon },
  ];
  
  const isActive = (path: string) => {
    if (path === "/admin" && location.pathname === "/admin") {
      return true;
    }
    return location.pathname.startsWith(path) && path !== "/admin";
  };
  
  return (
    <div className="min-h-screen bg-secondary/30 pt-16">
      {/* Mobile Navigation Toggle */}
      <div className="fixed z-20 top-20 left-4 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center bg-white rounded-md shadow-sm border border-border"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Admin Sidebar */}
      <div 
        className={cn(
          "fixed top-16 bottom-0 left-0 w-64 bg-white border-r border-border shadow-sm transition-transform z-30 transform",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          isMobileMenuOpen ? "translate-x-0" : "",
          "md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">
                <Users size={20} />
              </div>
              <div>
                <h2 className="font-semibold">Admin Panel</h2>
                <p className="text-xs text-muted-foreground">Welcome back, Admin</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-border">
            <Link
              to="/"
              className="flex items-center px-3 py-2 rounded-md text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Link>
          </div>
        </div>
      </div>
      
      {/* Admin Content */}
      <div 
        className={cn(
          "transition-all duration-300",
          isSidebarOpen ? "md:ml-64" : ""
        )}
      >
        <Container className="py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/settings" element={<SettingsPanel />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
};

export default Admin;
