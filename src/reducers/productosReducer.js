// Cada reducer tiene su propio state .
import {

  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR

} from '../types';


const initialState = {
  productos: [],
  error: null,
  loading: false
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {

    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: true
      }

    case AGREGAR_PRODUCTO_EXITO:
      return {

        ...state,
        loading: false,
        productos: [...state.productos, action.type]
      }

    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
