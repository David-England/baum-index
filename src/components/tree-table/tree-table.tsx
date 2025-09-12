import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import type CommonTree from '../../types/common-tree'

const queryClient = new QueryClient();

async function getCommonTrees(): Promise<CommonTree[]> {
    return await (await fetch("http://lcoalhost:5050")).json();
}

export default function TreeTableWrapper() {
    return (
        <QueryClientProvider client={queryClient}>
            <TreeTable />
        </QueryClientProvider>
    )
}

function TreeTable() {
    const {data, isPending, isError} = useQuery({queryKey: ["table"], queryFn: getCommonTrees});

    if (isPending) {
        return <p>Loading.... 🔃🔃🔃🔃</p>;
    }

    if (isError) {
        return <p>Oops. ⛔⛔⛔⛔</p>;
    }

    return (
        <table>
            {data.map(row =>
                <tr>
                    <td>{row.name}</td>
                    <td>{row.latin_name}</td>
                    <td>{row.is_native ? "Native" : "Not native"}</td>
                </tr>
            )}
        </table>
    )
}