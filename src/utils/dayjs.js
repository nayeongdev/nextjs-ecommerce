import dayjs from "dayjs";

const formatTime = (time, format='YYYY.MM.DD') => {
    return dayjs(time).format(format);
};

export { formatTime };