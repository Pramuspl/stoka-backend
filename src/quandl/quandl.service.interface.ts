export interface QuandlEODDataset {
  dataset_code: string;
  database_code: string;
  name: string;
  newest_available_date: string;
  oldest_available_date: string;
  start_date: string;
  end_date: string;
  data?:
    | ((string | number | string | number | string | number)[] | null)[]
    | null;
  order: string;
}

export interface QuandlSearchDataset {
  dataset_code: string;
  database_code: string;
  name: string;
}
