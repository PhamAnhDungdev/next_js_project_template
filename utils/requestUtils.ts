// requestUtils.ts

/**
 * Hàm thực hiện yêu cầu GET. getRequest<T>: Thực hiện yêu cầu GET đến API và trả về dữ liệu.
 * @param url - Địa chỉ API
 * @param headers - Các header tùy chọn
 * @returns Dữ liệu trả về từ API
 */
export async function getRequest<T>(url: string, headers?: HeadersInit): Promise<T> {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error("GET Request Error:", error);
      throw error; // Có thể xử lý lỗi tùy chỉnh ở đây
    }
  }
  
  /**
   * Hàm thực hiện yêu cầu POST. postRequest<T>: Thực hiện yêu cầu POST để gửi dữ liệu đến API.
   * @param url - Địa chỉ API
   * @param body - Dữ liệu cần gửi
   * @param headers - Các header tùy chọn
   * @returns Dữ liệu trả về từ API
   */
  export async function postRequest<T>(url: string, body: any, headers?: HeadersInit): Promise<T> {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error("POST Request Error:", error);
      throw error; // Có thể xử lý lỗi tùy chỉnh ở đây
    }
  }
  
  /**
   * Hàm thực hiện yêu cầu PUT. putRequest<T>: Thực hiện yêu cầu PUT để cập nhật dữ liệu trên API.
   * @param url - Địa chỉ API
   * @param body - Dữ liệu cần gửi
   * @param headers - Các header tùy chọn
   * @returns Dữ liệu trả về từ API
   */
  export async function putRequest<T>(url: string, body: any, headers?: HeadersInit): Promise<T> {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error("PUT Request Error:", error);
      throw error; // Có thể xử lý lỗi tùy chỉnh ở đây
    }
  }
  
  /**
   * Hàm thực hiện yêu cầu DELETE. deleteRequest<T>: Thực hiện yêu cầu DELETE để xóa dữ liệu từ API.
   * @param url - Địa chỉ API
   * @param headers - Các header tùy chọn
   * @returns Dữ liệu trả về từ API
   */
  export async function deleteRequest<T>(url: string, headers?: HeadersInit): Promise<T> {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error("DELETE Request Error:", error);
      throw error; // Có thể xử lý lỗi tùy chỉnh ở đây
    }
  }
  
  /**
   * Hàm thực hiện yêu cầu PATCH. patchRequest<T>: Thực hiện yêu cầu PATCH để cập nhật một phần của tài nguyên.
   * @param url - Địa chỉ API
   * @param body - Dữ liệu cần gửi
   * @param headers - Các header tùy chọn
   * @returns Dữ liệu trả về từ API
   */
  export async function patchRequest<T>(url: string, body: any, headers?: HeadersInit): Promise<T> {
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error("PATCH Request Error:", error);
      throw error; // Có thể xử lý lỗi tùy chỉnh ở đây
    }
  }
  
  /**
   * Hàm thực hiện yêu cầu HEAD. headRequest: Thực hiện yêu cầu HEAD để lấy header mà không cần tải dữ liệu.
   * @param url - Địa chỉ API
   * @param headers - Các header tùy chọn
   * @returns Header từ API
   */
  export async function headRequest(url: string, headers?: HeadersInit): Promise<Response> {
    try {
      const response = await fetch(url, {
        method: "HEAD",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
  
      return response; // Trả về header mà không có body
    } catch (error) {
      console.error("HEAD Request Error:", error);
      throw error; // Có thể xử lý lỗi tùy chỉnh ở đây
    }
  }
  
  /**
   * Hàm thực hiện yêu cầu OPTIONS. optionsRequest: Thực hiện yêu cầu OPTIONS để mô tả các tùy chọn giao tiếp cho tài nguyên.
   * @param url - Địa chỉ API
   * @param headers - Các header tùy chọn
   * @returns Header từ API
   */
  export async function optionsRequest(url: string, headers?: HeadersInit): Promise<Response> {
    try {
      const response = await fetch(url, {
        method: "OPTIONS",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
  
      return response; // Trả về header mà không có body
    } catch (error) {
      console.error("OPTIONS Request Error:", error);
      throw error; // Có thể xử lý lỗi tùy chỉnh ở đây
    }
  }
  