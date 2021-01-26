import hashtagTrend from './hotseller-dataset/hashtag_trend.json';

const hashData = hashtagTrend

function fetchHashInfoData(hashName) {
    const hashtagInfo = import(`./hotseller-dataset/hashtag_info/${hashName}`);

    return hashtagInfo
}


const fetchHashInfo = async (hashtag) => {
    try {
        const response = await import(`./hotseller-dataset/hashtag_info/${hashtag}`);

        return response;

    } catch (err) {
        console.log(err);
    }
}




export { fetchHashInfoData, hashData, fetchHashInfo }