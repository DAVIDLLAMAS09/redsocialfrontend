import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools  } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from "./reducers";

const persistConfig = {
    key: 'authType',
    storage: storage
  };

  const pReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(pReducer,composeWithDevTools(applyMiddleware(thunk)));
  const persistor = persistStore(store);  

  export { store, persistor };