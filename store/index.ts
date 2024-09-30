import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
// Tệp index.ts là nơi chính để khởi tạo Redux Store, nơi bạn kết hợp tất cả các reducer, middleware, 
//và cấu hình khác cần thiết cho ứng dụng.
const store = configureStore({
  reducer: rootReducer, // Thiết lập rootReducer
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;

export default store;
