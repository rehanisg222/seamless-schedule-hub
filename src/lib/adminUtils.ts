
// Initialize services data in localStorage if it doesn't exist
export const initializeServicesData = () => {
  if (!localStorage.getItem('services')) {
    const defaultServices = [
      {
        title: "Instagram Marketing",
        description: "Strategic content creation, audience targeting, and growth campaigns to boost your Instagram presence.",
        icon: "Instagram",
      },
      {
        title: "Facebook Advertising",
        description: "High-ROI Facebook ad campaigns with precise targeting, compelling creative, and conversion optimization.",
        icon: "Facebook",
      },
      {
        title: "LinkedIn Branding",
        description: "B2B social media strategies to establish thought leadership and generate qualified leads on LinkedIn.",
        icon: "Linkedin",
      },
      {
        title: "Social Media Analytics",
        description: "Comprehensive performance tracking with actionable insights to continually optimize your social media ROI.",
        icon: "BarChart",
      },
      {
        title: "Content Creation",
        description: "Eye-catching graphics, engaging videos, and copy that resonates with your target audience and drives engagement.",
        icon: "Camera",
      },
      {
        title: "Paid Advertising",
        description: "Multi-platform social media advertising strategies to increase brand awareness and drive qualified traffic.",
        icon: "Megaphone",
      },
    ];
    localStorage.setItem('services', JSON.stringify(defaultServices));
  }
};

// Update services data and notify components
export const updateServices = (services: any[]) => {
  localStorage.setItem('services', JSON.stringify(services));
  
  // Dispatch custom event to notify components
  const event = new CustomEvent('services-updated', { detail: { type: 'services-updated' } });
  window.dispatchEvent(event);
  
  // Also trigger storage event for components listening to that
  window.dispatchEvent(new Event('storage'));
};

// Initialize company stats in localStorage if they don't exist
export const initializeCompanyStats = () => {
  if (!localStorage.getItem('companyStats')) {
    const defaultStats = {
      revenue: '$170,000',
      clients: '500+',
    };
    localStorage.setItem('companyStats', JSON.stringify(defaultStats));
  }
};

// Update company stats and notify components
export const updateCompanyStats = (stats: { revenue: string; clients: string }) => {
  localStorage.setItem('companyStats', JSON.stringify(stats));
  
  // Dispatch custom event
  const event = new CustomEvent('stats-updated', { detail: { type: 'stats-updated' } });
  window.dispatchEvent(event);
  
  // Also trigger storage event for components listening to that
  window.dispatchEvent(new Event('storage'));
};

// Set admin authentication
export const setAdminAuth = (isAuthenticated: boolean) => {
  localStorage.setItem('adminAuth', isAuthenticated ? 'true' : 'false');
  
  // Trigger storage event for components listening
  window.dispatchEvent(new Event('storage'));
};

// Initialize website content
export const initializeWebsiteContent = () => {
  // Initialize all data structures
  initializeServicesData();
  initializeCompanyStats();
  
  // Initialize any other data structures needed for the website
  if (!localStorage.getItem('testimonials')) {
    const defaultTestimonials = [
      {
        name: "Tech Brilliance",
        company: "SaaS Company",
        initials: "TB",
        testimonial: "Growthstermedia transformed our social media strategy. Our engagement increased by 215% and lead generation from social channels is up 180%. Their team is responsive and truly understands our market."
      },
      {
        name: "Fashion Essentials",
        company: "E-commerce Brand",
        initials: "FE",
        testimonial: "Since working with Growthstermedia, our Instagram following has grown from 2,000 to over 25,000 in just 6 months. Their content strategy and community management has helped us build a loyal customer base."
      },
      {
        name: "Culinary Glow",
        company: "Restaurant Chain",
        initials: "CG",
        testimonial: "The Facebook and Instagram ad campaigns managed by Growthstermedia delivered a 340% ROI. Their understanding of the restaurant industry and creative approach to content has been game-changing for our business."
      }
    ];
    localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));
  }
};

// Initialize on import
initializeWebsiteContent();
