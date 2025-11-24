import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { fetchNews, createNews, deleteNewsById } from '../api/newsApi';

export type NewsItem = {
  id: string;
  title: string;
  text: string;
  created_at: string;
  url: string;
};

type NewsState = {
  items: NewsItem[];
  isLoading: boolean;
  error: string | null;
  loadNews: () => Promise<void>;
  addNews: (title: string, text: string, url: string) => Promise<void>;
  removeNews: (id: string) => Promise<void>;
};

export const useNewsStore = create<NewsState>()(
  devtools(set => ({
    items: [],
    isLoading: false,
    error: null,
    loadNews: async () => {
      set({ isLoading: true });
      try {
        const data = await fetchNews();
        set({ items: data });
      } catch {
        set({ error: 'Failed to load news' });
      } finally {
        set({ isLoading: false });
      }
    },
    addNews: async (title, text, url) => {
      try {
        const created = await createNews({ title, text, url });
        set(state => ({ items: [created, ...state.items] }));
      } catch {
        set({ error: 'Failed to add news' });
      }
    },
    removeNews: async (id: string) => {
      try {
        await deleteNewsById(id);
        set(state => ({ items: state.items.filter(item => item.id !== id) }));
      } catch {
        set({ error: 'Failed to delete news' });
      }
    },
  })),
);
