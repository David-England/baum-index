import "./tree-popout.css";

type inputArgs = {
    name: string,
    imgFilename: string,
    fullDescription: string,
    onClickExit: () => void
}

export default function TreePopout({name, imgFilename, fullDescription, onClickExit}: inputArgs) {
    return (
        <div className="tree-popout">
            <div className="image-pane">
                <div><b>{name}</b></div>
                <img src={`/tree_images/${imgFilename}`} />
            </div>
            <div className="text-pane">
                <div className={"exit-button"} onClick={onClickExit}>EXIT</div>
                <p>{fullDescription}</p>
            </div>
        </div>        
    )
}