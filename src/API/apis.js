import {baseAPI, client_id, client_secret, oauthURL} from '../env';

export async function getDetailCollection(id) {
	return await fetch(`${baseAPI}/collections/${id}?client_id=${client_id}`)
		.then((data) => data.json());
};

export async function getCollectionPhotos(id) {
	return await fetch(`${baseAPI}/collections/${id}/photos?client_id=${client_id}`)
		.then((data) => data.json());
};


export async function getCollections() {
	return await fetch(`${baseAPI}/collections/?client_id=${client_id}`)
		.then((data) => data.json());
};

export async function getUser(username){
	return await fetch(`${baseAPI}/users/${username}/?client_id=${client_id}`)
		.then((data) => data.json());
}

export async function getUsersPhotos(username,activity){
	return await fetch(`${baseAPI}/users/${username}/${activity}/?client_id=${client_id}`)
		.then((data) => data.json());
}

export async function getTopicsList(){
	return await fetch(`${baseAPI}/topics/?client_id=${client_id}`)
		.then((data) => data.json());
}

export async function getTopicPhotos(topic){
	return await fetch(`${baseAPI}/topics/${topic}/photos/?client_id=${client_id}`)
		.then((data) => data.json());
}
export function getLoginURL(){
	let access = 'public+read_user'
	let redirectURL = 'http://localhost:3000/oauth'
	let responseType = 'code'
	let url = `${oauthURL}/oauth/authorize?client_id=${client_id}&redirect_uri=${redirectURL}&response_type=${responseType}&scope=${access}`
	return url
}

export async function getOauthToken(code){
	let redirectURL = 'http://localhost:3000/oauth'
	return await fetch(`${oauthURL}/oauth/token?client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirectURL}&code=${code}&grant_type=authorization_code`,{
		method: 'POST',
	})
		.then((data) => data.json());
}

export async function getMe(){
	let token = localStorage.getItem('token')
	return await fetch(`${baseAPI}/me`,{
		headers:{
			'Authorization' : `Bearer ${token}`
		}
	})
		.then((data) => data.json());
}