import { useRouter } from "next/router";

const article =({article})=>{
	return <div>
		<h1>{article.title}</h1>
		This is article {article.id}
		<p>{article.body}</p>
		</div>
} 

export const getServerSideProps= async (context) => {
	const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
	const article = await res.json();

	return{
		props:{
			article
		}
	}
}
export default article