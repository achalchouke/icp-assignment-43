
import "./FeatureCard.css"
import {theme} from "./../../data"

function FeatureCard({title , img}) {
  return (
    <div className="feature-card" style={{backgroundColor: theme.Primary}}>
        <img src={img} alt={title} className="feature-img"/>
        <p className="feature-title">
            {title}
        </p>
    </div>
  )
}

export default FeatureCard