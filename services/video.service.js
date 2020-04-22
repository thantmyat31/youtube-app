import VIDEO_TYPES from './../data/videoTypes.data';
import VIDEOS_DATA from './../data/video.data';

export const selectedVideos = currentRoute => {
  const videoType = VIDEO_TYPES.find(
    v => v.name === currentRoute.toLowerCase(),
  );
  const videos = VIDEOS_DATA.filter(v => v.type === videoType.id);
  return videos;
};

export const getVideo = videoId => {
  const video = VIDEOS_DATA.find(v => v.id === videoId);
  return video;
};
