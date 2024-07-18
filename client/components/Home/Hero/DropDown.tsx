import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent,  DropdownMenuGroup,  DropdownMenuItem,  DropdownMenuLabel,  DropdownMenuSeparator,  DropdownMenuTrigger } from "@/components/ui/dropdownmenu";
import Link from 'next/link';

const Dropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='bg-blue-700 text-white'>All Categories</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="/marketplace"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Market place
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/services"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Service Provided
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/auction"
              className="block px-4 py-2 text-sm hover:bg-gray-100"
            >
              Auction system
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown;