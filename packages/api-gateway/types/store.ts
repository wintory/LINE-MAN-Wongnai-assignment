export type MenuOption = {
  readonly label: string;
  readonly choices: [
    {
      readonly label: string;
      readonly choices: {
        readonly label: string;
      }[];
    }
  ];
};

export type MenuDetail = {
  readonly name: string;
  readonly id: string;
  readonly thumbnailImage?: string;
  readonly fullPrice: number;
  readonly discountedPercent: number;
  readonly discountedTimePeriod?: {
    readonly begin: string;
    readonly end: string;
  };
  readonly sold: number;
  readonly totalInStock: number;
};

export type FullMenuDetail = MenuDetail & {
  options: MenuOption[];
  largeImage?: string;
};

export type StoreValue = {
  readonly name: string;
  readonly id: number;
  readonly coverImage: string;
  readonly activeTimePeriod: {
    readonly open: string;
    readonly close: string;
  };
  readonly menus: string[];
};

export type StoreWithMenuDatas = StoreValue & { menus: MenuDetail };
