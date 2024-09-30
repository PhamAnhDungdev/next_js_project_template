// commonUtils.ts

/**
 * Hàm kiểm tra giá trị có phải là số hay không.
 * @param value - Giá trị cần kiểm tra
 * @returns true nếu là số, ngược lại false
 */
export function isNumber(value: any): boolean {
    return !isNaN(Number(value));
  }
  
  /**
   * Hàm chuyển đổi chữ cái đầu tiên của chuỗi thành chữ hoa.
   * @param str - Chuỗi cần chuyển đổi
   * @returns Chuỗi với chữ cái đầu tiên viết hoa
   */
  export function capitalizeFirstLetter(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * Hàm tính toán khoảng thời gian giữa hai ngày.
   * @param startDate - Ngày bắt đầu
   * @param endDate - Ngày kết thúc
   * @returns Số ngày giữa hai mốc thời gian
   */
  export function getDaysBetweenDates(startDate: Date, endDate: Date): number {
    const oneDay = 24 * 60 * 60 * 1000; // số mili giây trong một ngày
    const diffInTime = endDate.getTime() - startDate.getTime();
    return Math.round(diffInTime / oneDay);
  }
  
  /**
   * Hàm kiểm tra giá trị có phải là object rỗng hay không.
   * @param obj - Object cần kiểm tra
   * @returns true nếu là object rỗng, ngược lại false
   */
  export function isEmptyObject(obj: Record<string, any>): boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
  
  /**
   * Hàm tạo một chuỗi UUID giả lập.
   * @returns UUID chuỗi dạng xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
   */
  export function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  /**
   * Hàm định dạng số với dấu phẩy và chữ số thập phân.
   * @param num - Số cần định dạng
   * @param decimals - Số chữ số thập phân
   * @returns Chuỗi số đã định dạng
   */
  export function formatNumber(num: number, decimals: number = 2): string {
    return num.toFixed(decimals).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
  