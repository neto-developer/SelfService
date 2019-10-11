import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


export default reducers => {
  const persistedReduce = persistReducer({
    key: 'selfservice',
    storage,
    whitelist: ['auth', 'user'],
  },
    reducers
  );

  return persistedReduce;

}
