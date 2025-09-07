import "./tree-popout.css";

type inputArgs = {
    name: string,
    imgFilename: string,
    fullDescription: string,
    onClickExit: () => void
}

const urlFurtherInfo: string = "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/";

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
                <a href={urlFurtherInfo} target="_blank">
                    <div className="further-info-button">MORE INFORMATION</div>
                </a>
            </div>
        </div>        
    )
}