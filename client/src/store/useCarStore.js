import { create } from 'zustand';

const useCarStore = create((set) => ({
  cars: [],
  filters: { brand: '', minPrice: 0, maxPrice: 0, year: '', transmission: '' },
  isLoading: false,
  setCars: (cars) => set({ cars }),
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
  resetFilters: () => set({ filters: {} }),
}));

export default useCarStore;
