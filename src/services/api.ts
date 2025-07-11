
// API service for communicating with Express backend
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.render.com' 
  : 'http://localhost:5000';

class ApiService {
  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'API request failed');
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Customer API methods
  async getCustomers() {
    // Fetches data from Express server at /api/customers
    return this.request('/api/customers');
  }

  async getCustomer(phoneNumber: string) {
    // Fetches customer data from Express server at /api/customers/:phoneNumber
    return this.request(`/api/customers/${phoneNumber}`);
  }

  async createCustomer(customerData: any) {
    return this.request('/api/customers', {
      method: 'POST',
      body: JSON.stringify(customerData),
    });
  }

  async updateCustomer(phoneNumber: string, updates: any) {
    return this.request(`/api/customers/${phoneNumber}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteCustomer(phoneNumber: string) {
    return this.request(`/api/customers/${phoneNumber}`, {
      method: 'DELETE',
    });
  }

  // Product API methods
  async getProducts(params?: { name?: string; category?: string }) {
    // Fetches data from Express server at /api/products
    const queryString = params ? new URLSearchParams(params).toString() : '';
    return this.request(`/api/products${queryString ? `?${queryString}` : ''}`);
  }

  async getProduct(productId: string) {
    return this.request(`/api/products/${productId}`);
  }

  async createProduct(productData: any) {
    return this.request('/api/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  }

  async updateProduct(productId: string, updates: any) {
    return this.request(`/api/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteProduct(productId: string) {
    return this.request(`/api/products/${productId}`, {
      method: 'DELETE',
    });
  }

  // Order API methods
  async getOrders(params?: { customerId?: string; status?: string; startDate?: string; endDate?: string }) {
    // Fetches data from Express server at /api/orders
    const queryString = params ? new URLSearchParams(params).toString() : '';
    return this.request(`/api/orders${queryString ? `?${queryString}` : ''}`);
  }

  async getOrder(orderId: string) {
    return this.request(`/api/orders/${orderId}`);
  }

  async createOrder(orderData: any) {
    return this.request('/api/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  }

  async updateOrder(orderId: string, updates: any) {
    return this.request(`/api/orders/${orderId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteOrder(orderId: string) {
    return this.request(`/api/orders/${orderId}`, {
      method: 'DELETE',
    });
  }

  // Employee API methods
  async getEmployees() {
    // Fetches data from Express server at /api/employees
    return this.request('/api/employees');
  }

  async getEmployee(employeeId: string) {
    return this.request(`/api/employees/${employeeId}`);
  }

  async createEmployee(employeeData: any) {
    return this.request('/api/employees', {
      method: 'POST',
      body: JSON.stringify(employeeData),
    });
  }

  async updateEmployee(employeeId: string, updates: any) {
    return this.request(`/api/employees/${employeeId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteEmployee(employeeId: string) {
    return this.request(`/api/employees/${employeeId}`, {
      method: 'DELETE',
    });
  }

  // Alert API methods
  async getAlerts(params?: { employeeId?: string }) {
    // Fetches data from Express server at /api/alerts
    const queryString = params ? new URLSearchParams(params).toString() : '';
    return this.request(`/api/alerts${queryString ? `?${queryString}` : ''}`);
  }

  async getAlert(alertId: string) {
    return this.request(`/api/alerts/${alertId}`);
  }

  async createAlert(alertData: any) {
    return this.request('/api/alerts', {
      method: 'POST',
      body: JSON.stringify(alertData),
    });
  }

  async updateAlert(alertId: string, updates: any) {
    return this.request(`/api/alerts/${alertId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteAlert(alertId: string) {
    return this.request(`/api/alerts/${alertId}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();
export default apiService;
