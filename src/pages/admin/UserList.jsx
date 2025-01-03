import React, { useState } from "react";
import { useQuery } from "react-query";
import { Search } from 'lucide-react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  generatePageNumbers
} from "@/components/ui/pagination";

import { fetchUserData } from "@/services/users/fetchUserData";
import Spinner from "@/components/spinner/Spinner";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const UserList = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermSent, setSearchTermSent] = useState("");

  const { data: usersData, isLoading, error } = useQuery(
    ["users", page, searchTermSent],
    () => fetchUserData(page, searchTermSent),
  );

  if (error) return <div className="text-red-500">Error loading user data</div>;

  const { results: users, count, next, previous } = usersData || {};
  const totalPages = Math.ceil(count / 10);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPage(1);
    setSearchTermSent(searchTerm);
  };



  return (
    <div className="p-4 h-full">
      <div className="mb-4 block md:flex  justify-between">
        <h1 className="text-xs sm:text-lg  font-semibold flex justify-end mb-4 md:text-xl">登録ユーザー一覧</h1>
        <div className="flex items-center gap-2">
          <Search />
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="検索"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-56 md:w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
            />
            <button type="submit" className="hidden">Submit</button>
          </form>
        </div>
      </div>

      <Table className="h-[500px]">
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg font-bold">ID</TableHead>
            <TableHead className="text-lg font-bold">Email</TableHead>
            <TableHead className="text-lg font-bold">Role</TableHead>
            <TableHead className="text-lg font-bold">Gender</TableHead>
            <TableHead className="text-lg font-bold">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow className="">
              <TableCell colSpan="5" className="text-center py-4">
                <Spinner color="orange" />
              </TableCell>
            </TableRow>
          ) : users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="align-top text-lg font-semibold py-2">{user.id}</TableCell>
                <TableCell className="align-top text-lg font-semibold py-2">
                  <div className="truncate w-64">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span>{user.email}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{user.email}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </TableCell>

                <TableCell className="align-top text-lg font-semibold py-2">{user.role}</TableCell>
                <TableCell className="align-top text-lg font-semibold py-2">{user.gender}</TableCell>
                <TableCell className="align-top text-lg font-semibold py-2">
                  {user.is_active ? "Active" : "Inactive"}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="5" className="text-center py-4">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {totalPages > 0 && (
        <Pagination className="mt-4 mb-8 flex justify-end">
          <PaginationContent>
            <PaginationPrevious
              onClick={() => handlePageChange(page - 1)}
              disabled={!previous}
            />
            {generatePageNumbers(totalPages, page).map((page1, idx) =>
              typeof page1 === "number" ? (
                <PaginationItem key={idx}>
                  <PaginationLink
                    className={`${page === page1 ? "bg-orange-500 text-white" : "bg-white"
                      } cursor-pointer`}
                    isActive={page1 === page1}
                    onClick={() => handlePageChange(page1)}
                  >
                    {page1}
                  </PaginationLink>
                </PaginationItem>
              ) : (
                <PaginationEllipsis key={idx} />
              )
            )}
            <PaginationNext
              onClick={() => handlePageChange(page + 1)}
              disabled={!next}
            />
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default UserList;
