import "./tree-popout.css";

export default function TreePopout({name, imgFilename, fullDescription}:
    {name: string, imgFilename: string, fullDescription: string}) {
    return (
        <div className="tree-popout">
            <div className="image-pane">
                <div><b>{name}</b></div>
                <img src={`/tree_images/${imgFilename}`} />
            </div>
            <div className="text-pane">
                <p>{fullDescription}</p>
            </div>
        </div>        
    )
}