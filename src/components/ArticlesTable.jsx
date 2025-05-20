
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function ArticlesTable({ activeTab }) {
  const [currentPage, setCurrentPage] = useState("1");

  const articles = [
    {
      id: 1,
      title: "How to Improve Your Skills in League of Legends",
      keyword: "league of legends [2240000]",
      words: 4575,
      createdOn: "20 hours ago"
    },
    {
      id: 2,
      title: "How to Master Last Hitting in League of Legends",
      keyword: "league of legends [2240000]",
      words: 3480,
      createdOn: "21 hours ago"
    },
    {
      id: 3,
      title: "7 Tips for Better Teamplay in League of Legends",
      keyword: "league of legends [2240000]",
      words: 2676,
      createdOn: "a day ago"
    },
    {
      id: 4,
      title: "Top Virtual Executive Assistant Services (2024)",
      keyword: "virtual executive assistant [2900]",
      words: 2408,
      createdOn: "1 Oct, 24"
    },
    {
      id: 5,
      title: "Unlimited Graphics Design Solutions",
      keyword: "unlimited graphic design services [390]",
      words: 1733,
      createdOn: "—"
    },
    {
      id: 6,
      title: "Top Amazon Payment Methods for Quick Access to Funds",
      keyword: "amazon payment methods [3600]",
      words: 2647,
      createdOn: "—"
    },
    {
      id: 7,
      title:
        "Backlinks 101: What are backlinks and why they're important (Free template)",
      keyword: "backlinks [8100]",
      words: 2261,
      createdOn: "—"
    },
    {
      id: 8,
      title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
      keyword: "ai seo software [880]",
      words: 1543,
      createdOn: "—"
    },
    {
      id: 9,
      title: "Unlimited Graphic Design Services You Can Rely On",
      keyword: "unlimited graphic design services [390]",
      words: 1874,
      createdOn: "—"
    }
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]">
              <Checkbox />
            </TableHead>
            <TableHead>Article Title</TableHead>
            <TableHead>Keyword [Traffic]</TableHead>
            <TableHead>Words</TableHead>
            <TableHead>Created On</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Publish</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell className="text-left">{article.title}</TableCell>
              <TableCell className="text-left">{article.keyword}</TableCell>
              <TableCell>{article.words}</TableCell>
              <TableCell>{article.createdOn}</TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-500 text-green-500"
                >
                  View
                </Button>
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Avatar variant="ghost" size="icon" className="h-5 w-5">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    {/* <MoreHorizontal className="h-4 w-4" /> */}
                  </Avatar>
                    <span className="material-symbols-outlined text-base text-gray-600 h-4 w-4">
                    arrow_drop_down
                   </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Total 9 Article Titles</span>
          <span className="text-sm text-muted-foreground">Show</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-16 h-8">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">entries per page</span>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="w-12 h-8"
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value)}
            aria-label="Page number"
          />
          <span className="text-sm text-muted-foreground">/ 1</span>
        </div>
      </div>
    </div>
  );
}
