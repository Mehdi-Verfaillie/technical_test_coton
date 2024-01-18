import { useState, useMemo } from "react";

interface UseColumnSortProps<T, K extends keyof T> {
  items: T[];
  initialSortKey: K | null;
}

interface UseColumnSortReturn<T, K extends keyof T> {
  sortedItems: T[];
  handleSort: (key: K) => void;
  sortKey: K | null;
  sortDirection: "asc" | "desc" | null;
}

export const useColumnSort = <T extends object, K extends keyof T>({
  items,
  initialSortKey,
}: UseColumnSortProps<T, K>): UseColumnSortReturn<T, K> => {
  const [sortKey, setSortKey] = useState<K | null>(initialSortKey);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null,
  );

  const handleSort = (key: K | null) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const sortedItems = useMemo(() => {
    if (!sortKey || !sortDirection) return items;

    return [...items].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [items, sortKey, sortDirection]);

  return { sortedItems, handleSort, sortKey, sortDirection };
};
