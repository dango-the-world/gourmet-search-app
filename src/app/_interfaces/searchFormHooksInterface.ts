export interface searchFormHooks {
  selectedRange: string;
  setSelectedRange: (range: string) => void;
  keyword: string;
  setKeyword: (keyword: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
