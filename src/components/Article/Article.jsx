import './styles.css';



function Article(props) {
    return (
        <article id='content-article'>
            <img src={props.image} alt={props.description}/>

            <div className="article-infos">
                <h2>{props.title}</h2>
                <h3>{props.provide}</h3>

                <p>{props.text}</p>
            </div>
        </article>
    );
}
  
export default Article;