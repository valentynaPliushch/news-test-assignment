import { NewsItem } from '../store/newsStore';

const URL = 'https://yourtestapi.com/api/posts';

type CreateNewsDto = {
  title: string;
  text: string;
  url: string;
};

export async function fetchNews() {
  const res = await fetch(URL);
  if (!res.ok) {
    throw new Error('Failed to fetch news');
  }
  const data = await res.json();
  console.log('text console');
  return data as NewsItem[];
}

export async function createNews(payload: CreateNewsDto) {
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: payload.title,
      text: payload.text,
      image: '/img/bird2.jpg',
      url:
        payload.url ||
        'https://www.allaboutbirds.org/guide/Pileated_Woodpecker/overview',
      active: 1,
      sort_order: 1,
    }),
  });

  if (!res.ok) {
    throw new Error('Failed to create news');
  }
  const data = await res.json();
  return data as NewsItem;
}

export async function deleteNewsById(id: string) {
  const res = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete news');
  }
}
