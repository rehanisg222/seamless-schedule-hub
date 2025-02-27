
import { useState, useEffect } from "react";
import { 
  PlusCircle, 
  Trash2, 
  Save, 
  X, 
  Edit2,
  AlertTriangle
} from "lucide-react";
import { toast } from "sonner";
import { updateServices, updateCompanyStats } from "@/lib/adminUtils";

// Service management component
export const ServiceManager = () => {
  const [services, setServices] = useState<any[]>([]);
  const [editingService, setEditingService] = useState<any | null>(null);
  const [isAddingService, setIsAddingService] = useState(false);
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    icon: "Instagram"
  });

  // Available icons
  const availableIcons = ["Instagram", "Facebook", "Linkedin", "BarChart", "Camera", "Megaphone"];

  // Load services from localStorage
  useEffect(() => {
    const storedServices = localStorage.getItem('services');
    if (storedServices) {
      setServices(JSON.parse(storedServices));
    }
  }, []);

  // Save services to localStorage and update display
  const saveServices = (updatedServices: any[]) => {
    updateServices(updatedServices);
    setServices(updatedServices);
    toast.success("Services updated successfully");
  };

  const handleEditService = (index: number) => {
    setEditingService({
      ...services[index],
      index
    });
  };

  const handleDeleteService = (index: number) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    saveServices(updatedServices);
  };

  const handleUpdateService = () => {
    if (!editingService) return;
    
    const updatedServices = [...services];
    updatedServices[editingService.index] = {
      title: editingService.title,
      description: editingService.description,
      icon: editingService.icon
    };
    
    saveServices(updatedServices);
    setEditingService(null);
  };

  const handleAddService = () => {
    if (!newService.title || !newService.description) {
      toast.error("Please fill in all fields");
      return;
    }
    
    const updatedServices = [...services, newService];
    saveServices(updatedServices);
    setNewService({
      title: "",
      description: "",
      icon: "Instagram"
    });
    setIsAddingService(false);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Manage Services</h2>
      
      <div className="space-y-4 mb-6">
        {services.map((service, index) => (
          <div key={index} className="border border-border rounded-md p-4 relative">
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <span className="text-xs text-primary mt-1 block">Icon: {service.icon}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditService(index)}
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDeleteService(index)}
                  className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Edit Service Modal */}
      {editingService && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit Service</h3>
              <button onClick={() => setEditingService(null)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Service Title</label>
                <input
                  type="text"
                  value={editingService.title}
                  onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                  className="w-full p-2 rounded-md border border-input bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={editingService.description}
                  onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                  className="w-full p-2 rounded-md border border-input bg-background resize-none"
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Icon</label>
                <select
                  value={editingService.icon}
                  onChange={(e) => setEditingService({...editingService, icon: e.target.value})}
                  className="w-full p-2 rounded-md border border-input bg-background"
                >
                  {availableIcons.map((icon) => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 rounded-md border border-input"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateService}
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
                >
                  <Save className="h-4 w-4 mr-1 inline-block" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Service Form */}
      {isAddingService ? (
        <div className="border border-border rounded-md p-4">
          <h3 className="font-medium mb-3">Add New Service</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Service Title</label>
              <input
                type="text"
                value={newService.title}
                onChange={(e) => setNewService({...newService, title: e.target.value})}
                className="w-full p-2 rounded-md border border-input bg-background"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={newService.description}
                onChange={(e) => setNewService({...newService, description: e.target.value})}
                className="w-full p-2 rounded-md border border-input bg-background resize-none"
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Icon</label>
              <select
                value={newService.icon}
                onChange={(e) => setNewService({...newService, icon: e.target.value})}
                className="w-full p-2 rounded-md border border-input bg-background"
              >
                {availableIcons.map((icon) => (
                  <option key={icon} value={icon}>{icon}</option>
                ))}
              </select>
            </div>
            
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsAddingService(false)}
                className="px-3 py-1 rounded-md border border-input text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddService}
                className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm"
              >
                Add Service
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsAddingService(true)}
          className="flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          Add New Service
        </button>
      )}
    </div>
  );
};

// Company stats manager
export const CompanyStatsManager = () => {
  const [stats, setStats] = useState({
    revenue: '',
    clients: ''
  });

  // Load stats from localStorage
  useEffect(() => {
    const storedStats = localStorage.getItem('companyStats');
    if (storedStats) {
      setStats(JSON.parse(storedStats));
    }
  }, []);

  const handleSaveStats = () => {
    updateCompanyStats(stats);
    toast.success("Company statistics updated successfully");
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Company Statistics</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Revenue</label>
          <input
            type="text"
            value={stats.revenue}
            onChange={(e) => setStats({...stats, revenue: e.target.value})}
            className="w-full p-2 rounded-md border border-input bg-background"
            placeholder="e.g. $170,000"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Clients</label>
          <input
            type="text"
            value={stats.clients}
            onChange={(e) => setStats({...stats, clients: e.target.value})}
            className="w-full p-2 rounded-md border border-input bg-background"
            placeholder="e.g. 500+"
          />
        </div>
        
        <button
          onClick={handleSaveStats}
          className="px-4 py-2 mt-2 rounded-md bg-primary text-primary-foreground"
        >
          <Save className="h-4 w-4 mr-1 inline-block" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

// Testimonials manager
export const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [editingTestimonial, setEditingTestimonial] = useState<any | null>(null);
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    company: "",
    initials: "",
    testimonial: ""
  });

  // Load testimonials from localStorage
  useEffect(() => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  }, []);

  // Save testimonials to localStorage and update display
  const saveTestimonials = (updatedTestimonials: any[]) => {
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    setTestimonials(updatedTestimonials);
    
    // Dispatch custom event
    const event = new CustomEvent('testimonials-updated');
    window.dispatchEvent(event);
    
    // Also trigger storage event for components listening to that
    window.dispatchEvent(new Event('storage'));
    
    toast.success("Testimonials updated successfully");
  };

  const handleEditTestimonial = (index: number) => {
    setEditingTestimonial({
      ...testimonials[index],
      index
    });
  };

  const handleDeleteTestimonial = (index: number) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials.splice(index, 1);
    saveTestimonials(updatedTestimonials);
  };

  const handleUpdateTestimonial = () => {
    if (!editingTestimonial) return;
    
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[editingTestimonial.index] = {
      name: editingTestimonial.name,
      company: editingTestimonial.company,
      initials: editingTestimonial.initials,
      testimonial: editingTestimonial.testimonial
    };
    
    saveTestimonials(updatedTestimonials);
    setEditingTestimonial(null);
  };

  const handleAddTestimonial = () => {
    if (!newTestimonial.name || !newTestimonial.company || !newTestimonial.testimonial) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Auto-generate initials if empty
    let initials = newTestimonial.initials;
    if (!initials) {
      initials = newTestimonial.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }
    
    const updatedTestimonials = [
      ...testimonials, 
      { ...newTestimonial, initials }
    ];
    
    saveTestimonials(updatedTestimonials);
    setNewTestimonial({
      name: "",
      company: "",
      initials: "",
      testimonial: ""
    });
    setIsAddingTestimonial(false);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Manage Testimonials</h2>
      
      <div className="space-y-4 mb-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border border-border rounded-md p-4 relative">
            <div className="flex justify-between">
              <div className="flex">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary mr-3">
                  <span className="font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditTestimonial(index)}
                  className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Edit2 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDeleteTestimonial(index)}
                  className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
      
      {/* Edit Testimonial Modal */}
      {editingTestimonial && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Edit Testimonial</h3>
              <button onClick={() => setEditingTestimonial(null)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Client Name</label>
                <input
                  type="text"
                  value={editingTestimonial.name}
                  onChange={(e) => setEditingTestimonial({...editingTestimonial, name: e.target.value})}
                  className="w-full p-2 rounded-md border border-input bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  value={editingTestimonial.company}
                  onChange={(e) => setEditingTestimonial({...editingTestimonial, company: e.target.value})}
                  className="w-full p-2 rounded-md border border-input bg-background"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Initials (max 2 characters)</label>
                <input
                  type="text"
                  value={editingTestimonial.initials}
                  onChange={(e) => setEditingTestimonial({...editingTestimonial, initials: e.target.value.substring(0, 2).toUpperCase()})}
                  className="w-full p-2 rounded-md border border-input bg-background"
                  maxLength={2}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Testimonial</label>
                <textarea
                  value={editingTestimonial.testimonial}
                  onChange={(e) => setEditingTestimonial({...editingTestimonial, testimonial: e.target.value})}
                  className="w-full p-2 rounded-md border border-input bg-background resize-none"
                  rows={4}
                />
              </div>
              
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => setEditingTestimonial(null)}
                  className="px-4 py-2 rounded-md border border-input"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdateTestimonial}
                  className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
                >
                  <Save className="h-4 w-4 mr-1 inline-block" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Testimonial Form */}
      {isAddingTestimonial ? (
        <div className="border border-border rounded-md p-4">
          <h3 className="font-medium mb-3">Add New Testimonial</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Client Name</label>
              <input
                type="text"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                className="w-full p-2 rounded-md border border-input bg-background"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                value={newTestimonial.company}
                onChange={(e) => setNewTestimonial({...newTestimonial, company: e.target.value})}
                className="w-full p-2 rounded-md border border-input bg-background"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Initials (max 2 characters, leave empty to auto-generate)
              </label>
              <input
                type="text"
                value={newTestimonial.initials}
                onChange={(e) => setNewTestimonial({...newTestimonial, initials: e.target.value.substring(0, 2).toUpperCase()})}
                className="w-full p-2 rounded-md border border-input bg-background"
                maxLength={2}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Testimonial</label>
              <textarea
                value={newTestimonial.testimonial}
                onChange={(e) => setNewTestimonial({...newTestimonial, testimonial: e.target.value})}
                className="w-full p-2 rounded-md border border-input bg-background resize-none"
                rows={4}
              />
            </div>
            
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsAddingTestimonial(false)}
                className="px-3 py-1 rounded-md border border-input text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTestimonial}
                className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm"
              >
                Add Testimonial
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsAddingTestimonial(true)}
          className="flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <PlusCircle className="h-4 w-4 mr-1" />
          Add New Testimonial
        </button>
      )}
    </div>
  );
};

// Master content management component
export function ContentManager() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Website Content Management</h1>
        <div className="flex items-center text-sm bg-muted/50 text-muted-foreground p-2 rounded-md">
          <AlertTriangle className="h-4 w-4 mr-1" />
          Changes apply immediately to the website
        </div>
      </div>
      
      <CompanyStatsManager />
      <ServiceManager />
      <TestimonialsManager />
    </div>
  );
}
