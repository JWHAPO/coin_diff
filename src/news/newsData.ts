// newsData.ts

export type NewsItem = {
    id: string;
    title: string;
    timeAgo: string;
    content: string;
  };
  
  export const newsData: NewsItem[] = [
    { id: '1', title: '첫 번째 뉴스 기사', timeAgo: '2시간 전', content: '첫 번째 뉴스 기사의 내용입니다.' },
    { id: '2', title: '두 번째 뉴스 기사', timeAgo: '5시간 전', content: '두 번째 뉴스 기사의 내용입니다.' },
    { id: '3', title: '세 번째 뉴스 기사', timeAgo: '1일 전', content: '세 번째 뉴스 기사의 내용입니다.' },
  ];
  