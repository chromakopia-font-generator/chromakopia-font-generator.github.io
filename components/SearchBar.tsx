// components/SearchBar.tsx

'use client'

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="relative w-full">
            <Input
                type="text"
                placeholder="Search..."
                className="pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer"
                onClick={handleSearch}
            />
        </div>
    );
}

export default SearchBar;