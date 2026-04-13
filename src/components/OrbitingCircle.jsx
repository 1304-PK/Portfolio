import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const OrbitingCircle = ({ skills, iconSize, radius }) => {
  return (
    <div className="relative flex h-full w-full flex-1 flex-col items-center justify-center">
      <div className="relative flex h-[560px] w-[560px] items-center justify-center overflow-visible p-8">
        <OrbitingCircles iconSize={iconSize} radius={radius} path={true}>
          {skills.map((skill) => {
            return (
              <div key={skill.title} className="skill-orbit-item group">
                <span className="skill-orbit-tooltip">{skill.title}</span>
                <img src={skill.image} alt={skill.title} />
              </div>
            )
          })}
        </OrbitingCircles>
      </div>
    </div>
  )
}

export default OrbitingCircle