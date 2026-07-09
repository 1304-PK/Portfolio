import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const OrbitingCircle = ({ skills, iconSize, radius, duration = 20, reverse = false }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative flex h-[560px] w-[560px] items-center justify-center overflow-visible p-8">
        <OrbitingCircles iconSize={iconSize} radius={radius} path={true} duration={duration} reverse={reverse}>
          {skills.map((skill) => {
            return (
              <div key={skill.title} className="skill-orbit-item group pointer-events-auto">
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