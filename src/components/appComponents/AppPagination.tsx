import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface SimplePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function AppPagination({ currentPage, totalPages, onPageChange }: SimplePaginationProps) {
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            href="#"
            onClick={(e) => { e.preventDefault(); if (currentPage > 1) onPageChange(currentPage - 1); }}
            className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>

        <PaginationItem>
            <div>
              {currentPage} of {totalPages}
            </div>
  
        </PaginationItem>

        <PaginationItem>
          <PaginationNext 
            href="#"
            onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) onPageChange(currentPage + 1); }}
            className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}