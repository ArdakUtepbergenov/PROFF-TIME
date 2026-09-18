"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { BRANCHES, DEFAULT_BRANCH, type Branch, type BranchId } from "@/data/branches";

type BranchContextValue = {
  branchId: BranchId;
  branch: Branch;
  setBranchId: (id: BranchId) => void;
};

const BranchContext = createContext<BranchContextValue | null>(null);

const STORAGE_KEY = "proff-time-branch";

export function BranchProvider({ children }: { children: ReactNode }) {
  const [branchId, setBranchIdState] = useState<BranchId>(DEFAULT_BRANCH);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "atyrau" || saved === "astana") {
        setBranchIdState(saved);
      }
    } catch {
      // localStorage недоступен (приватный режим и т.п.) — остаёмся на филиале по умолчанию.
    }
  }, []);

  function setBranchId(id: BranchId) {
    setBranchIdState(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // игнорируем — состояние всё равно обновится в текущей сессии
    }
  }

  return (
    <BranchContext.Provider value={{ branchId, branch: BRANCHES[branchId], setBranchId }}>
      {children}
    </BranchContext.Provider>
  );
}

export function useBranch(): BranchContextValue {
  const ctx = useContext(BranchContext);
  if (!ctx) {
    // Безопасный fallback для случаев рендера вне провайдера (не должен происходить в норме).
    return { branchId: DEFAULT_BRANCH, branch: BRANCHES[DEFAULT_BRANCH], setBranchId: () => {} };
  }
  return ctx;
}
