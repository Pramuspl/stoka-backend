export interface AlphaEODDataset {
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

export interface AlphaSearchDataset {
  '1. symbol': string;
  '2. name': string;
  '3. type': string;
  '4. region': string;
  '5. marketOpen': string;
  '6. marketClose': string;
  '7. timezone': string;
  '8. currency': string;
  '9. matchScore': string;
}
