"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type OrderItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

type OrderContextValue = {
  items: OrderItem[];
  count: number;
  total: number;
  addItem: (item: { id: string; name: string; price: number }) => void;
};

const OrderContext = createContext<OrderContextValue | null>(null);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);

  const addItem = useCallback(
    (item: { id: string; name: string; price: number }) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          );
        }
        return [...prev, { ...item, qty: 1 }];
      });
    },
    []
  );

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.price, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, count, total, addItem }),
    [items, count, total, addItem]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
}
