import {baseAPI, client_id} from '../env';

export default function doSearch(query) {
  return fetch(`${baseAPI}/search/photos/?client_id=${client_id}&query=${query}`)
      .then((data) => data.json());
};

