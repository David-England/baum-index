import type CommonTree from "../types/common-tree"

const WEB_SERVICE_URL = "http://localhost:5050";

export default async function getCommonTrees(): Promise<{success: boolean, data: CommonTree[]}> {
    try {
        const response = await fetch(WEB_SERVICE_URL);

        if (response.ok) {
            return {success: true, data: await response.json()};
        } else {
            return {success: false, data: []};
        }
    } catch {
        return {success: false, data: []};
    }
}