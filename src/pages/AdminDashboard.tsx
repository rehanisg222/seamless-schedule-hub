
import { useEffect, useState } from "react";
import { Lock, ExternalLink, LogOut } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ContentManager } from "@/components/admin/ContentManager";
import { setAdminAuth } from "@/lib/adminUtils";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("content");
  const navigate = useNavigate();

  useEffect(() => {
    // Handle scroll restoration on page load
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    setAdminAuth(false);
    toast.info("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Lock className="mr-2 h-5 w-5" />
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage your website content and settings
            </p>
          </div>
          
          <div className="flex space-x-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-secondary"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              View Website
            </a>
            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground shadow-sm transition-colors hover:bg-destructive/90"
            >
              <LogOut className="mr-1 h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="border-b border-border">
            <div className="flex items-center">
              <button
                onClick={() => setActiveTab("content")}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "content"
                    ? "bg-secondary text-foreground border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                Website Content
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-4 py-3 text-sm font-medium ${
                  activeTab === "settings"
                    ? "bg-secondary text-foreground border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                Settings
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {activeTab === "content" && (
              <ContentManager />
            )}
            
            {activeTab === "settings" && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Settings functionality will be added in a future update
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminDashboard;
