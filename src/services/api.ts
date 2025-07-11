
// API service for communicating with Express backend
// This will replace mock data with actual API calls to the backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Customer API calls
  async getCustomers() {
    return this.request<any[]>('/customers');
  }

  async getCustomerByPhone(phoneNumber: string) {
    return this.request<any>(`/customers/${phoneNumber}`);
  }

  async createCustomer(customer: any) {
    return this.request<any>('/customers', {
      method: 'POST',
      body: JSON.stringify(customer),
    });
  }

  async updateCustomer(phoneNumber: string, updates: any) {
    return this.request<any>(`/customers/${phoneNumber}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteCustomer(phoneNumber: string) {
    return this.request<void>(`/customers/${phoneNumber}`, {
      method: 'DELETE',
    });
  }

  // Product API calls
  async getProducts(queryParams?: string) {
    const endpoint = queryParams ? `/products?${queryParams}` : '/products';
    return this.request<any[]>(endpoint);
  }

  async getProductById(productId: string) {
    return this.request<any>(`/products/${productId}`);
  }

  async createProduct(product: any) {
    return this.request<any>('/products', {
      method: 'POST',
      body: JSON.stringify(product),
    });
  }

  async updateProduct(productId: string, updates: any) {
    return this.request<any>(`/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteProduct(productId: string) {
    return this.request<void>(`/products/${productId}`, {
      method: 'DELETE',
    });
  }

  // Order API calls
  async getOrders(queryParams?: string) {
    const endpoint = queryParams ? `/orders?${queryParams}` : '/orders';
    return this.request<any[]>(endpoint);
  }

  async getOrderById(orderId: string) {
    return this.request<any>(`/orders/${orderId}`);
  }

  async createOrder(order: any) {
    return this.request<any>('/orders', {
      method: 'POST',
      body: JSON.stringify(order),
    });
  }

  async updateOrder(orderId: string, updates: any) {
    return this.request<any>(`/orders/${orderId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteOrder(orderId: string) {
    return this.request<void>(`/orders/${orderId}`, {
      method: 'DELETE',
    });
  }

  // Employee API calls
  async getEmployees() {
    return this.request<any[]>('/employees');
  }

  async getEmployeeById(employeeId: string) {
    return this.request<any>(`/employees/${employeeId}`);
  }

  async createEmployee(employee: any) {
    return this.request<any>('/employees', {
      method: 'POST',
      body: JSON.stringify(employee),
    });
  }

  async updateEmployee(employeeId: string, updates: any) {
    return this.request<any>(`/employees/${employeeId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteEmployee(employeeId: string) {
    return this.request<void>(`/employees/${employeeId}`, {
      method: 'DELETE',
    });
  }

  // Alert API calls
  async getAlerts(queryParams?: string) {
    const endpoint = queryParams ? `/alerts?${queryParams}` : '/alerts';
    return this.request<any[]>(endpoint);
  }

  async getAlertById(alertId: string) {
    return this.request<any>(`/alerts/${alertId}`);
  }

  async createAlert(alert: any) {
    return this.request<any>('/alerts', {
      method: 'POST',
      body: JSON.stringify(alert),
    });
  }

  async updateAlert(alertId: string, updates: any) {
    return this.request<any>(`/alerts/${alertId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteAlert(alertId: string) {
    return this.request<void>(`/alerts/${alertId}`, {
      method: 'DELETE',
    });
  }
}

export const apiService = new ApiService();
