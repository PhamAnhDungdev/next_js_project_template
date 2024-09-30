import { SET_USER, LOGOUT_USER } from '../actions/actionTypes';

//Quản lí trạng thái người dùng
//Xử lý các hành động (actions) cụ thể liên quan đến người dùng, như thêm, xóa hoặc cập nhật thông tin người dùng.

//Khi một hành động được dispatch (gửi), userReducer sẽ nhận hành động đó cùng với trạng thái hiện tại của nó.
//Dựa trên loại hành động (action type), nó sẽ xác định cách để cập nhật trạng thái và trả về trạng thái mới.

interface UserState {
  user: any | null;
}

const initialState: UserState = {
  user: null,
};

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
