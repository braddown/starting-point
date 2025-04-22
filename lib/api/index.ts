// This file will serve as the central export for all API integrations

// Import and export API clients as they are implemented
// Example:
// export * from './n8n';
// export * from './klaviyo';
// export * from './kudosity';

// Placeholder for future API integrations
export const API_ENDPOINTS = {
  // N8N API endpoints
  N8N: {
    BASE_URL: process.env.N8N_API_URL || '',
    // Add specific endpoints as needed
  },
  
  // Klaviyo API endpoints
  KLAVIYO: {
    BASE_URL: process.env.KLAVIYO_API_URL || '',
    // Add specific endpoints as needed
  },
  
  // Kudosity API endpoints
  KUDOSITY: {
    BASE_URL: process.env.KUDOSITY_API_URL || '',
    // Add specific endpoints as needed
  }
}; 