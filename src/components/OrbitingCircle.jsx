import { OrbitingCircles } from "@/components/ui/orbiting-circles"

const OrbitingCircle = ({icons, iconSize, radius}) => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={iconSize} radius={radius} path={true} className={"stroke-amber-300"}>
            {
                icons.map(icon => {
                    return(
                        <img src={icon} alt="" />
                    )
                })
            }
        </OrbitingCircles>
    </div>
  )
}

export default OrbitingCircle