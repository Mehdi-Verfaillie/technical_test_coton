import { createContext, useContext } from "react";

interface StoreValues<TStoreShape> {
  StoreProvider: React.FC<StoreProviderProps<TStoreShape>>;
  useStore: () => TStoreShape;
}

interface StoreProviderProps<TStoreShape> {
  children: React.ReactNode;
  store: TStoreShape;
}

export function createStoreContext<TStoreShape, TStoreParams>(
  _useCreateStore: (params: TStoreParams) => TStoreShape,
): StoreValues<TStoreShape> {
  const StoreContext = createContext<TStoreShape>({} as TStoreShape);

  const StoreProvider = ({
    children,
    store,
  }: StoreProviderProps<TStoreShape>) => {
    return (
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
  };

  const useStore = () => useContext(StoreContext);

  return {
    StoreProvider,
    useStore,
  };
}
