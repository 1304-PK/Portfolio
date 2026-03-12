import "../styles/SkillTile.css"

const SkillTile = ({ image, title, top, left, height, width }) => {
    return (
        <div className="skill-tile" style={{
            top: top,
            left: left,
            minHeight: height,
            minWidth: width
        }}>
            <img style={{ height: height, width: width }} src={image} alt="" />
            <p className="skill-tile-title">{title}</p>
        </div>
    )
}

export default SkillTile