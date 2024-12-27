
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 bg-muted/40 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search cases..."
                className="pl-10 pr-4 py-2 rounded-md w-full bg-background border-muted focus:border-primary focus:ring-primary"
              />
            </div>
            <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">New Case</Button>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Cases</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Case #</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Link href="#" className="font-medium" prefetch={false}>
                          #12345
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Open</Badge>
                      </TableCell>
                      <TableCell>Issue with product delivery</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" className="font-medium" prefetch={false}>
                          #12346
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">Pending</Badge>
                      </TableCell>
                      <TableCell>Refund request for damaged item</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" className="font-medium" prefetch={false}>
                          #12347
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">Open</Badge>
                      </TableCell>
                      <TableCell>Inquiry about product compatibility</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link href="#" className="font-medium" prefetch={false}>
                          #12348
                        </Link>
                      </TableCell>
                      <TableCell>
                        <Badge variant="success">Closed</Badge>
                      </TableCell>
                      <TableCell>Complaint about customer service</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Submit a New Case</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <Input
                    type="text"
                    placeholder="Case Title"
                    className="bg-background border-muted focus:border-primary focus:ring-primary"
                  />
                  <Textarea
                    placeholder="Case Description"
                    rows={4}
                    className="bg-background border-muted focus:border-primary focus:ring-primary"
                  />
                  <div className="flex items-center gap-2">
                    <Select className="bg-background border-muted focus:border-primary focus:ring-primary">
                      <option value="">Select a Category</option>
                      <option value="product">Product</option>
                      <option value="service">Service</option>
                      <option value="billing">Billing</option>
                    </Select>
                    <Select className="bg-background border-muted focus:border-primary focus:ring-primary">
                      <option value="">Select a Priority</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </Select>
                  </div>
                  <Button type="submit" className="bg-primary text-primary-foreground">
                    Submit Case
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}