export type MenuOption = {
  label: string;
  choices: [
    {
      label: string;
      choices: {
        label: string;
      }[];
    }
  ];
};

export type MenuDetail = {
  name: string;
  id: string;
  thumbnailImage?: string;
  fullPrice: number;
  discountedPercent: number;
  discountedTimePeriod?: {
    begin: string;
    end: string;
  };
  sold: number;
  totalInStock: number;
};

export type FullMenuDetail = MenuDetail & {
  options: MenuOption[];
  largeImage?: string;
};

export type StoreValue = {
  name: string;
  id: number;
  coverImage: string;
  activeTimePeriod: {
    open: string;
    close: string;
  };
  menus: MenuDetail[];
  page: number;
  limit: number;
};
