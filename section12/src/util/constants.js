export const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },

  {
    emotionId: 2,
    emotionName: "좋음",
  },

  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },

  {
    emotionId: 4,
    emotionName: "나쁨",
  },

  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

export const getStringedDate = (targetDate) => {
  // YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
