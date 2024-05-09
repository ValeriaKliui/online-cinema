import { FilterParams } from '@store/services/interfaces';

export const getFiltersUrl = (options: FilterParams) => {
  const filtersUrl =
    '?' +
    Object.entries(options)
      .map((option) => `${option[0]}=${option[1]}`)
      .join('&');

  return filtersUrl;
};
