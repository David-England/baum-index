import "./tree-tile.css";

export default function TreeTile({name, imgFilename, summary}:
    {name: string, imgFilename: string, summary: string}) {
    return (
        <div className="tree-tile">
            <div className="title">{name}</div>
            <img src={`/tree_images/${imgFilename}`} />
            <div>{summary}</div>
        </div>
    )
}