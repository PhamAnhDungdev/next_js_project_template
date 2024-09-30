//rootReducer là một reducer tổng hợp, kết hợp tất cả các reducer con (như userReducer) thành một reducer duy nhất.
//Nó chịu trách nhiệm quản lý trạng thái toàn cục của ứng dụng bằng cách kết hợp các trạng thái từ các reducer khác nhau.


import { combineReducers } from 'redux';
import userReducer from './userReducer';
//import product from './productReducer';

const rootReducer = combineReducers({
  user: userReducer,
  //product: productReducer, // Thêm productReducer vào rootReducer nếu cần thêm product reducer cho ứng dụng
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
