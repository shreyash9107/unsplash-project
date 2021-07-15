import React, {useEffect} from 'react';
import {getLoginURL, getOauthToken} from "../../API/apis";
import {useParams} from "react-router-dom";
import {useHistory, useLocation} from "react-router";

function Login(props) {
	let url = getLoginURL()
	return (
		<div>
			<a href={url}>login</a>
		</div>
	);
}

export default Login;

export function Oauth(){
	function useQuery() {
		return new URLSearchParams(useLocation().search);
	}
	let query = useQuery();
	let history = useHistory();
	let code = query.get('code')
	useEffect(()=>{
		(async ()=>{
			try{
				let data= await getOauthToken(code)
				localStorage.setItem('token',data.access_token)
				history.push('/')
			}catch (e) {
				console.log(e);
			}
		})()
	},[])
	return <p>
		Authorizing...
	</p>
}