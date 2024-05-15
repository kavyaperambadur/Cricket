import Second from './Second';
import Third from'./Third';
function News({imgLink,title,message}){
    return(
        <div
        styile={{
            border:"2px solid #000",
            marginBottom: "20px",
            width:"800px",
            padding: "10px"
        }}>
    <img src={imgLink} 
    alt ="newsImage"
    />
    <h1>{title}</h1>
    <p>{message}</p>
    <a href="https://www.cricbuzz.com/cricket-news/130288/samson-chahal-return-rinku-not-picked-for-t20-world-cup">Samson, Chahal return; Rinku not picked for T20 World Cup</a>
    <Second/>
    <Third/>
        </div>
    )

}
export default News;