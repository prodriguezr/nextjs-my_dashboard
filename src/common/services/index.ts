import { ApiResponse } from '../interfaces/api-response';

export const MyDashboardGet = async <T>(
  url: string
): Promise<ApiResponse<T>> => {
  const response = await fetch(url, {
    cache: 'force-cache',
  });

  if (!response.ok) throw new Error('Network response was not ok');

  const data = await response.json();

  return { data };
};
