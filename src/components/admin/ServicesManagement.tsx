
import { useState, useEffect } from "react";
import { 
  Trash2, 
  Edit, 
  Plus,
  Save, 
  X
} from "lucide-react";

// Define types for our services
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  active: boolean;
}

const ServicesManagement = () => {
  // Sample icons that can be used for services
  const availableIcons = ["Calendar", "CreditCard", "Users", "BarChart", "PhoneCall", "Zap", "Heart", "Globe", "Star"];
  
  // Initialize with some sample services
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      title: "Social Media Management",
      description: "Professional management of your social media accounts to increase engagement and followers.",
      icon: "Users",
      active: true
    },
    {
      id: 2,
      title: "Content Creation",
      description: "High-quality content creation for your digital platforms.",
      icon: "Edit",
      active: true
    },
    {
      id: 3,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more traffic to your website.",
      icon: "Globe",
      active: true
    }
  ]);
  
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newService, setNewService] = useState<Omit<Service, 'id'>>({
    title: "",
    description: "",
    icon: "Calendar",
    active: true
  });
  const [editService, setEditService] = useState<Service | null>(null);
  
  // Function to start editing a service
  const handleEditStart = (service: Service) => {
    setIsEditing(service.id);
    setEditService({...service});
  };
  
  // Function to cancel editing
  const handleEditCancel = () => {
    setIsEditing(null);
    setEditService(null);
  };
  
  // Function to save edited service
  const handleEditSave = () => {
    if (editService) {
      setServices(services.map(service => 
        service.id === editService.id ? editService : service
      ));
      setIsEditing(null);
      setEditService(null);
    }
  };
  
  // Function to delete a service
  const handleDelete = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };
  
  // Function to start adding a new service
  const handleAddStart = () => {
    setIsAdding(true);
    setNewService({
      title: "",
      description: "",
      icon: "Calendar",
      active: true
    });
  };
  
  // Function to cancel adding a new service
  const handleAddCancel = () => {
    setIsAdding(false);
  };
  
  // Function to save a new service
  const handleAddSave = () => {
    if (newService.title.trim() === "") {
      alert("Service title cannot be empty");
      return;
    }
    
    const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
    
    setServices([...services, { ...newService, id: newId }]);
    setIsAdding(false);
  };
  
  // Function to toggle service active status
  const handleToggleActive = (id: number) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, active: !service.active } : service
    ));
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Service Management</h2>
      
      <div className="mb-6 flex justify-between items-center">
        <p className="text-muted-foreground">
          Manage the services that appear on your website.
        </p>
        <button
          onClick={handleAddStart}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Service
        </button>
      </div>
      
      {/* Add New Service Form */}
      {isAdding && (
        <div className="bg-card mb-6 p-6 rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Add New Service</h3>
            <button
              onClick={handleAddCancel}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Service Title</label>
              <input
                type="text"
                value={newService.title}
                onChange={(e) => setNewService({...newService, title: e.target.value})}
                className="w-full px-3 py-2 bg-muted text-foreground border border-input rounded-md"
                placeholder="Enter service title"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Icon</label>
              <select
                value={newService.icon}
                onChange={(e) => setNewService({...newService, icon: e.target.value})}
                className="w-full px-3 py-2 bg-muted text-foreground border border-input rounded-md"
              >
                {availableIcons.map(icon => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm text-muted-foreground mb-1">Description</label>
            <textarea
              value={newService.description}
              onChange={(e) => setNewService({...newService, description: e.target.value})}
              className="w-full px-3 py-2 bg-muted text-foreground border border-input rounded-md h-24"
              placeholder="Enter service description"
            />
          </div>
          
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="newServiceActive"
              checked={newService.active}
              onChange={(e) => setNewService({...newService, active: e.target.checked})}
              className="mr-2"
            />
            <label htmlFor="newServiceActive">Active</label>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={handleAddCancel}
              className="mr-2 px-4 py-2 border border-border rounded-md text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleAddSave}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Service
            </button>
          </div>
        </div>
      )}
      
      {/* Services List */}
      <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-semibold">All Services</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted text-sm">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Description</th>
                <th className="text-left p-4">Icon</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  {isEditing === service.id ? (
                    <>
                      <td className="p-4">
                        <input
                          type="text"
                          value={editService?.title || ""}
                          onChange={(e) => setEditService(prev => prev ? {...prev, title: e.target.value} : null)}
                          className="w-full px-3 py-1 bg-muted text-foreground border border-input rounded-md text-sm"
                        />
                      </td>
                      <td className="p-4">
                        <textarea
                          value={editService?.description || ""}
                          onChange={(e) => setEditService(prev => prev ? {...prev, description: e.target.value} : null)}
                          className="w-full px-3 py-1 bg-muted text-foreground border border-input rounded-md text-sm h-20"
                        />
                      </td>
                      <td className="p-4">
                        <select
                          value={editService?.icon || ""}
                          onChange={(e) => setEditService(prev => prev ? {...prev, icon: e.target.value} : null)}
                          className="w-full px-3 py-1 bg-muted text-foreground border border-input rounded-md text-sm"
                        >
                          {availableIcons.map(icon => (
                            <option key={icon} value={icon}>{icon}</option>
                          ))}
                        </select>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={editService?.active || false}
                            onChange={(e) => setEditService(prev => prev ? {...prev, active: e.target.checked} : null)}
                            className="mr-2"
                          />
                          <span>{editService?.active ? "Active" : "Inactive"}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={handleEditSave}
                            className="text-green-500 hover:text-green-700 text-sm flex items-center"
                          >
                            <Save className="h-4 w-4 mr-1" />
                            Save
                          </button>
                          <button
                            onClick={handleEditCancel}
                            className="text-gray-500 hover:text-gray-700 text-sm flex items-center"
                          >
                            <X className="h-4 w-4 mr-1" />
                            Cancel
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-4">{service.title}</td>
                      <td className="p-4 max-w-md">
                        <div className="truncate">{service.description}</div>
                      </td>
                      <td className="p-4">{service.icon}</td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            service.active
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {service.active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditStart(service)}
                            className="text-blue-500 hover:text-blue-700 text-sm flex items-center"
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleToggleActive(service.id)}
                            className={`${
                              service.active ? "text-amber-500 hover:text-amber-700" : "text-green-500 hover:text-green-700"
                            } text-sm`}
                          >
                            {service.active ? "Deactivate" : "Activate"}
                          </button>
                          <button
                            onClick={() => handleDelete(service.id)}
                            className="text-red-500 hover:text-red-700 text-sm flex items-center"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
              
              {services.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-muted-foreground">
                    No services found. Add a new service to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServicesManagement;
