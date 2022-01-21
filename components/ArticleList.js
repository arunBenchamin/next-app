import ArticleItem from './ArticleItem'
const ArtilceList=({articles}) =>{
	return(
		<div>
			 {articles.map((article) =>(
              <ArticleItem article={article}  key={article.title} />
       ) )}
		</div>
	)
}


export default ArtilceList 