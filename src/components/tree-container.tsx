import TreePopout from "./tree-popout/tree-popout";
import TreeTile from "./tree-tile/tree-tile";
import { useState } from "react";
import type TreeMetadata from "../types/tree-metadata"

function sortTreeMetadata(tm1: TreeMetadata, tm2: TreeMetadata): number {
    const s1 = tm1.name.toUpperCase();
    const s2 = tm2.name.toUpperCase();

    if (s1 > s2)
        return 1;
    else if (s1 < s2)
        return -1;
    else
        return 0;
}

export default function TreeContainer({treeMetadatas}: {treeMetadatas: TreeMetadata[]}) {
    const [isPoppedOut, setIsPoppedOut] = useState(false);
    const [activeTree, setActiveTree] = useState({} as TreeMetadata);

    return (
        <div>
            {treeMetadatas.sort(sortTreeMetadata).map(t =>
                <TreeTile key={t.name} name={t.name} imgFilename={t.imgFilename}
                    summary={t.summary} onClick={() => popOut(t)} />
            )}
            {isPoppedOut &&
                <TreePopout name={activeTree.name} imgFilename={activeTree.imgFilename}
                    fullDescription="Some dummy text...."
                    onClickExit={() => setIsPoppedOut(false)} />
            }
        </div>
    )


    function popOut(tm: TreeMetadata) {
        if (!isPoppedOut) {
            setActiveTree(tm);
            setIsPoppedOut(true);
        }
    }
}