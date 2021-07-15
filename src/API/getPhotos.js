import {baseAPI, client_id} from '../env';

export default async function getPhotos(page) {
  return await fetch(`${baseAPI}/photos/?client_id=${client_id}&per_page=20&page=${page}`)
      .then((data) => data.json());
};

