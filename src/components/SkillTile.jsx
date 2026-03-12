import "../styles/SkillTile.css"

const SkillTile = ({ image, title, top, left }) => {
    return (
        <div className="skill-tile" style={{
            top: top,
            left: left
        }}>
            <img src={image} alt="" />
            <p className="skill-tile-title">{title}</p>
        </div>
    )
}

export default SkillTile