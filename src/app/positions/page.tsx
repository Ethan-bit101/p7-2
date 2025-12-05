'use client';

import React, { useEffect, useState } from 'react'; // Fix: useEffetc -> useEffect
import { getToken, logoutUser } from '@/lib/auth'; // Change GetToken to getToken
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Added missing Input import
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation'; // Correct import for Next.js router

import { API_BASE } from '@/lib/config';

interface Position {
    position_id?: number;
    position_code: string;
    position_name: string; // Fix: posiiton_name -> position_name
}

// Fix: funciton -> function
export default function DashboardPage() {
    const router = useRouter(); // Fix: useROuter() -> useRouter()
    // Fix: GetToken -> getToken (assuming a common function name)
    const token = getToken(); // Moved token retrieval here

    const [positions, setPositions] = useState<Position[]>([]);
    const [loading, setLoading] = useState(false);
    // Fix: Missing closing parenthesis and type annotation
    const [error, setError] = useState<string | null>(null);

    // Form state for create / edit
    const [positionCode, setPositionCode] = useState(''); // Fix: SetPositionCode -> setPositionCode
    const [positionName, setPositionName] = useState(''); // Fix: SetPositionName -> setPositionName
    // Fix: Missing closing parenthesis and type annotation
    const [editingId, setEditingId] = useState<number | null>(null);

    // Ensure user is authenticated and fetch data
    // Fix: useEffect{{} -> { -> useEffect(() => {
    useEffect(() => {
        // Fix: check for token variable defined earlier
        if (!token) {
            router.push('/login'); // Fix: 'login' -> '/login' (common path format)
            return;
        }
        fetchPositions();
        // Fix: //eslint-disable-next-line react-hoks/exhaustice-deps -> // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]); // Added token and router to dependency array for correctness, though token shouldn't change here

    // Fix: getToken() -> GetToken() based on import
    function authHeaders() { // Fix: authHeader -> authHeaders (pluralized for consistency)
        const currentToken = getToken();
        return {
            'Content-Type': 'application/json',
            // Fix: 'Bearer ${token}' -> `Bearer ${currentToken}` (backticks for template literal)
            Authorization: currentToken ? `Bearer ${currentToken}` : '',
        };
    }

    // Method to fetch the data from the backend {(get)}
    // Fix: async function fetchPositions() { ... }
    async function fetchPositions() {
        setLoading(true);
        setError(null);
        try {
            // Fix: `.../positions`), method: 'GET', headers: authHeaders(), ]} -> fetch(url, options)
            const res = await fetch(`${API_BASE}/positions`, {
                method: 'GET',
                headers: authHeaders(),
            });

            if (!res.ok) throw new Error(`Fetch failed: ${res.status}`); // Fix: 4{res.status} -> ${res.status}
            // Fix: awaut res.json{} -> await res.json()
            const data = await res.json();
            setPositions(data);
        // Fix: } catch (H: any) { -> } catch (e: any) {
        } catch (e: any) {
            setError(e?.message || 'Failed to fetch positions');
        } finally {
            setLoading(false);
        }
    } // Fix: Closing brace was missing

    // This handles the creation of data (positions) using the POST Method and data notification using the PUT Method
    // Fix: (H: React.FarmeEvent) -> (e: React.FormEvent)
    async function handleCreateOrUpdate(e: React.FormEvent) {
        e.preventDefault();
        setError(null);

        // Fix: Position - { -> as Position
        const payload: Position = { position_code: positionCode, position_name: positionName };

        try {
            let res: Response;
            if (editingId) {
                // Update
                // Fix: `${$[API_BASE]/positions`}/${editigId}` -> `${API_BASE}/positions/${editingId}`
                res = await fetch(`${API_BASE}/positions/${editingId}`, {
                    method: 'PUT',
                    headers: authHeaders(),
                    body: JSON.stringify(payload),
                }); // Fix: Missing closing parenthesis/bracket
            } else {
                // create
                // Fix: fetch {`${API_BASE}/positions`, ... } -> fetch(`${API_BASE}/positions`, { ... })
                res = await fetch(`${API_BASE}/positions`, {
                    method: 'POST',
                    headers: authHeaders(),
                    body: JSON.stringify(payload),
                }); // Fix: Missing closing parenthesis/bracket
            }

            // Fix: if (res.status === 481) { -> Assuming 401 Unauthorized is the correct status
            if (res.status === 401) {
                logoutUser();
                router.push('/login'); // Fix: {'/login'} -> ('/login')
                return;
            }
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                // Fix: 'request failed: ${re.status}' -> `request failed: ${res.status}`
                throw new Error(err?.message || `Request failed: ${res.status}`);
            }
            // success refresh list
            // Fix: setPositionsCode -> setPositionCode
            setPositionCode('');
            // Fix: setPositionsName -> setPositionName
            setPositionName('');
            setEditingId(null);
            await fetchPositions();
            // Fix: } catch {H: any} { -> } catch (e: any) {
        } catch (e: any) {
            // Fix: 'Save failed) -> 'Save failed'
            setError(e?.message || 'Save failed');
        }
    }

    function startEdit(p: Position) {
        // Fix: p.position id -> p.position_id
        setEditingId(p.position_id ?? null);
        setPositionCode(p.position_code);
        // Fix: p.position name -> p.position_name
        setPositionName(p.position_name);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    async function handleDelete(id?: number) {
        if (!id) return;
        // Fix: loonfirm -> confirm, check for false (user cancels)
        if (!confirm('Delete this position?')) return;
        setError(null);
        try {
            // Fix: const res = await Fetch(...) -> const res = await fetch(...)
            // Fix: '${${API_BASE}/positions}/${id}' -> `${API_BASE}/positions/${id}`
            const res = await fetch(`${API_BASE}/positions/${id}`, {
                method: "DELETE",
                headers: authHeaders(),
            });
            // Fix: if (res.status === 481) { -> Assuming 401 Unauthorized is the correct status
            if (res.status === 401) {
                logoutUser();
                router.push('/login');
                return;
            }
            // Fix: $(res.status) -> ${res.status}
            if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
            // Fix: FetchPositions() -> fetchPositions()
            await fetchPositions();
            // Fix: caftch (H:any) { -> } catch (e: any) {
        } catch (e: any) {
            setError(e?.message || 'Delete failed');
        }
    }

    // Fix: funciton hdanleCancelEdit() -> function handleCancelEdit()
    function handleCancelEdit() {
        setEditingId(null);
        setPositionCode('');
        setPositionName('');
    }

    // Fix: funcito handleLogout() -> function handleLogout()
    function handleLogout() {
        logoutUser();
        // Fix: router.push('/login); -> router.push('/login');
        router.push('/login');
    }

    return (
        // Fix: className = "max-w-4xl mx-mate" -> className = "max-w-4xl mx-auto"
        // Fix: bg-slate-58 -> bg-slate-50
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-4xl mx-auto">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Positions Dashboard</h1>
                    {/* Added logout button to the header and fixed className */}
                    <div className="flex items-center gap-3">
                        <Button variant="outline" onClick={() => fetchPositions()}>Refresh</Button>
                        <Button variant="destructive" onClick={handleLogout}>Logout</Button>
                    </div>
                </header>

                <Card className="mb-6">
                    <CardContent>
                        <h2 className="text-lg font-semibold mb-2">{editingId ? 'Edit Position' : 'Create Position'}</h2>

                        <form onSubmit={handleCreateOrUpdate} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {/* Fix: onChange = {e} => ... to correct arrow function syntax */}
                            <Input
                                placeholder="Position Code"
                                value={positionCode}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPositionCode(e.target.value)}
                                required
                            />
                            <Input
                                placeholder="Position Name"
                                value={positionName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPositionName(e.target.value)}
                                required
                            />

                            <div className="flex gap-2">
                                <Button type="submit">{editingId ? 'Update' : 'Create'}</Button>
                                {/* Fix: (editingId && ( -> {editingId && ( */}
                                {editingId && (
                                    <Button type="button" variant="outline" onClick={handleCancelEdit}>Cancel</Button>
                                )}
                            </div>
                        </form>
                        {/* Fix: error && <p ... -> {error && <p ...} */}
                        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                    </CardContent>
                </Card>

                {/* Fix: <section -> <section> and fix classNmae */}
                <section>
                    <h2 className="text-lg font-semibold mb-2">Positions List {loading && '(loading...)'}</h2>

                    {/* Fix: w-ful -> w-full */}
                    <div className="overflow-x-auto bg-white rounded shadow">
                        <table className="w-full text-left">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="px-4 py-2">ID</th>
                                    {/* Fix: Extra </tr></thead> from copy/paste */}
                                    <th className="px-4 py-2">Code</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Fix: 55 !loading -> && !loading */}
                                {positions.length === 0 && !loading && (
                                    <tr>
                                        {/* Fix: text-salte-500 -> text-slate-500 */}
                                        <td colSpan={4} className="px-4 py-5 text-center text-sm text-slate-500">No positions found.</td>
                                    </tr>
                                )}

                                {/* Fix: {positions.map(p) = > { -> {positions.map((p) => ( */}
                                {positions.map((p) => (
                                    <tr key={p.position_id} className='border-t'>
                                        {/* Fix: (p.position_id) -> {p.position_id} */}
                                        <td className="px-4 py-2 align-top">{p.position_id}</td>
                                        <td className="px-4 py-2 align-top">{p.position_code}</td>
                                        <td className="px-4 py-2 align-top">{p.position_name}</td>
                                        <td className="px-4 py-2 align-top">
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm" onClick={() => startEdit(p)}>Edit</Button>
                                                <Button variant="destructive" size="sm" onClick={() => handleDelete(p.position_id)}>Delete</Button> {/* Changed to destructive variant */}
                                            </div>
                                        </td>
                                    </tr>
                                ))} {/* Fix: Missing closing parenthesis/brace for map */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}