import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions/products_actions';
export const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true };

    case CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false };

    case GET_PRODUCTS_BEGIN:
      return { ...state, isProductsLoading: true };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, isProductsLoading: false };

    case GET_PRODUCTS_ERROR:
      return { ...state, isProductsLoading: false, isProductsError: true };
    case GET_SINGLE_PRODUCT_BEGIN:
      return {
        ...state,
        isSingleProductLoading: true,
        isSingleProductError: false,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        isSingleProductLoading: false,
        singleProduct: action.payload,
      };
    case GET_SINGLE_PRODUCT_ERROR:
      return { ...state, isSingleProductError: true };
    default:
      throw new Error(
        `The action you want to utilize ${action.type} could not find.`
      );
  }
};
