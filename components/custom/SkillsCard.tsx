

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    img: string,
    name: string
}

export default function SkillsCard({ img, name }: ContainerProps) {
    return (
        <div className="mx-auto  max-w-sm  flex flex-col items-center justify-center gap-x-4 rounded-xl p-4 shadow-lg outline outline-black/5 ">
            <img className="size-12 shrink-0" src={img} alt="ChitChat Logo" />
            <div >
                <div className="text-xl font-medium text-white">{name}</div>
                {/* <p className="text-gray-500 dark:text-gray-400">You have a new message!</p> */}
            </div>
        </div>
    )
}
