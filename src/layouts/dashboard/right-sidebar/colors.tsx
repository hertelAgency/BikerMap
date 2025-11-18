

const Colors = (title: string, palettes: Array<string>) => {
    const buttons: any = () => {
        for(var color of palettes){
            <button
                key={color.}
                className={`btn btn-circle btn-raised ${color.bg} ${color.text}`}></button>
        }
    }
    return (
        <div className="mb-2">
            <div
                className={`uppercase text-xs font-bold font-poppins tracking-wider`}>
                {title}
            </div>
            <div className="flex flex-row children-x-1">
                {buttons}
            </div>
        </div>
    )
}

export default Colors
