import "./tree-tile.css";

export default function TreeTile({name, imgFilename, summary, onClick}:
    {name: string, imgFilename: string, summary: string, onClick: () => void}) {
    return (
        <div className="tree-tile" onClick={onClick}>
            <div className="title">{name}</div>
            <img src={`/tree_images/${imgFilename}`} />
            <div>{summary}</div>
        </div>
    )
}