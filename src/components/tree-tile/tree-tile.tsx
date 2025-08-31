import "./tree-tile.css";

type inputArgs = {
    name: string,
    imgFilename: string,
    summary: string,
    onClick: () => void
}

export default function TreeTile({name, imgFilename, summary, onClick}: inputArgs) {
    return (
        <div className="tree-tile" onClick={onClick}>
            <div className="title">{name}</div>
            <img src={`/tree_images/${imgFilename}`} />
            <div>{summary}</div>
        </div>
    )
}