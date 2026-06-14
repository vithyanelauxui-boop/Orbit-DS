---
name: orbit-ds
description: Orbit Design System assistant — pick components, tokens, icons, and get ready-to-use React/Tailwind code from the Orbit DS library (shadcn/ui + Radix + TailwindCSS v4).
metadata:
  type: skill
  version: 1.0.0
  source: https://github.com/Kalyanim14/orbitDS
---

# Orbit DS — Design System Skill

You are an expert on the **Orbit Design System** (`orbit-ds`). When this skill is active, help the user pick the right component, token, or icon and generate production-ready code using the Orbit DS library.

---

## Stack

- **React 19** + **Next.js 16** + **TypeScript**
- **TailwindCSS v4** (`@tailwindcss/postcss`) with **CSS custom properties in OKLch color space**
- **shadcn/ui v4** + **Radix UI v1** primitives
- **CVA** (class-variance-authority) for variant-based styling
- **Phosphor Icons** (1 514 icons, `@phosphor-icons/react`)
- Package: `orbit-ds` — import all components from `"orbit-ds"`

---

## Design Tokens

All tokens are CSS custom properties. Use them as Tailwind utilities (`bg-primary`, `text-muted-foreground`, etc.) or directly as `var(--token-name)`.

### Color Tokens — Light mode (`:root`) / Dark mode (`.dark`)

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--background` | `oklch(1 0 0)` | `oklch(0.148 0.004 228.8)` | Page background |
| `--foreground` | `oklch(0.148 0.004 228.8)` | `oklch(0.987 0.002 197.1)` | Body text |
| `--card` | `oklch(1 0 0)` | `oklch(0.218 0.008 223.9)` | Card background |
| `--card-foreground` | `oklch(0.148 0.004 228.8)` | `oklch(0.987 0.002 197.1)` | Card text |
| `--popover` | `oklch(1 0 0)` | `oklch(0.218 0.008 223.9)` | Popover/dropdown bg |
| `--popover-foreground` | `oklch(0.148 0.004 228.8)` | `oklch(0.987 0.002 197.1)` | Popover text |
| `--primary` | `oklch(0.488 0.243 264.376)` | `oklch(0.424 0.199 265.638)` | Primary purple |
| `--primary-foreground` | `oklch(0.97 0.014 254.604)` | `oklch(0.97 0.014 254.604)` | Text on primary |
| `--secondary` | `oklch(0.967 0.001 286.375)` | `oklch(0.274 0.006 286.033)` | Secondary surface |
| `--secondary-foreground` | `oklch(0.21 0.006 285.885)` | `oklch(0.985 0 0)` | Text on secondary |
| `--muted` | `oklch(0.963 0.002 197.1)` | `oklch(0.275 0.011 216.9)` | Muted surface |
| `--muted-foreground` | `oklch(0.56 0.021 213.5)` | `oklch(0.723 0.014 214.4)` | Muted / hint text |
| `--accent` | `oklch(0.963 0.002 197.1)` | `oklch(0.275 0.011 216.9)` | Accent surface |
| `--accent-foreground` | `oklch(0.218 0.008 223.9)` | `oklch(0.987 0.002 197.1)` | Text on accent |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` | Error / danger red |
| `--border` | `oklch(0.925 0.005 214.3)` | `oklch(1 0 0 / 10%)` | Border color |
| `--input` | `oklch(0.925 0.005 214.3)` | `oklch(1 0 0 / 15%)` | Input border |
| `--ring` | `oklch(0.723 0.014 214.4)` | `oklch(0.56 0.021 213.5)` | Focus ring |

### Chart Tokens (data visualization)

| Token | Value |
|---|---|
| `--chart-1` | `oklch(0.809 0.105 251.813)` — light blue-purple |
| `--chart-2` | `oklch(0.623 0.214 259.815)` — medium purple |
| `--chart-3` | `oklch(0.546 0.245 262.881)` — rich purple |
| `--chart-4` | `oklch(0.488 0.243 264.376)` — deep purple |
| `--chart-5` | `oklch(0.424 0.199 265.638)` — darkest purple |

### Sidebar Tokens

| Token | Light | Dark |
|---|---|---|
| `--sidebar` | `oklch(0.987 0.002 197.1)` | `oklch(0.218 0.008 223.9)` |
| `--sidebar-foreground` | `oklch(0.148 0.004 228.8)` | `oklch(0.987 0.002 197.1)` |
| `--sidebar-primary` | `oklch(0.546 0.245 262.881)` | `oklch(0.623 0.214 259.815)` |
| `--sidebar-primary-foreground` | `oklch(0.97 0.014 254.604)` | `oklch(0.97 0.014 254.604)` |
| `--sidebar-accent` | `oklch(0.963 0.002 197.1)` | `oklch(0.275 0.011 216.9)` |
| `--sidebar-accent-foreground` | `oklch(0.218 0.008 223.9)` | `oklch(0.987 0.002 197.1)` |
| `--sidebar-border` | `oklch(0.925 0.005 214.3)` | `oklch(1 0 0 / 10%)` |
| `--sidebar-ring` | `oklch(0.723 0.014 214.4)` | `oklch(0.56 0.021 213.5)` |

### Typography Tokens

| Token | Value |
|---|---|
| `--font-sans` | `"Geist", ui-sans-serif, system-ui, sans-serif` |
| `--font-heading` | `"Figtree", ui-sans-serif, system-ui, sans-serif` |
| `--font-mono` | `"Geist Mono", ui-monospace, SFMono-Regular, monospace` |

Tailwind classes: `font-sans`, `font-heading`, `font-mono`

### Border Radius Tokens

| Token | Value |
|---|---|
| `--radius` | `0.625rem` (base) |
| `--radius-sm` | `calc(var(--radius) * 0.6)` ≈ 0.375rem |
| `--radius-md` | `calc(var(--radius) * 0.8)` ≈ 0.5rem |
| `--radius-lg` | `var(--radius)` = 0.625rem |
| `--radius-xl` | `calc(var(--radius) * 1.4)` ≈ 0.875rem |
| `--radius-2xl` | `calc(var(--radius) * 1.8)` ≈ 1.125rem |
| `--radius-3xl` | `calc(var(--radius) * 2.2)` ≈ 1.375rem |
| `--radius-4xl` | `calc(var(--radius) * 2.6)` ≈ 1.625rem |

Tailwind classes: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl`

---

## Components (57 total)

Import all from `"orbit-ds"`. Never import from internal paths.

### Button

```tsx
import { Button } from "orbit-ds"

// Variants: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
// Sizes: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"

<Button variant="default" size="default">Click me</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost" size="icon"><TrashIcon /></Button>
<Button asChild><a href="/home">Go home</a></Button>
```

### Badge

```tsx
import { Badge } from "orbit-ds"

// Variants: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
<Badge variant="default">New</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Draft</Badge>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "orbit-ds"

// size: "default" | "sm"
<Card size="default">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Subtitle goes here</CardDescription>
    <CardAction><Button size="icon-sm" variant="ghost"><DotsThreeIcon /></Button></CardAction>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Input

```tsx
import { Input } from "orbit-ds"

<Input type="text" placeholder="Enter value..." />
<Input type="email" aria-invalid={hasError} />
```

### Select

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "orbit-ds"

<Select>
  <SelectTrigger><SelectValue placeholder="Choose..." /></SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>
```

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "orbit-ds"

<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### AlertDialog

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "orbit-ds"

<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete item?</AlertDialogTitle>
      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

### Sheet (slide-out panel)

```tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "orbit-ds"

// side: "top" | "right" | "bottom" | "left"
<Sheet>
  <SheetTrigger asChild><Button>Open panel</Button></SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Adjust your preferences.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

### Drawer

```tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "orbit-ds"

<Drawer>
  <DrawerTrigger asChild><Button>Open drawer</Button></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild><Button variant="outline">Close</Button></DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "orbit-ds"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "orbit-ds"

// type: "single" | "multiple"
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It follows WAI-ARIA guidelines.</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from "orbit-ds"

// variant: "default" | "destructive"
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "orbit-ds"

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Checkbox

```tsx
import { Checkbox } from "orbit-ds"
import { Label } from "orbit-ds"

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>
```

### Switch

```tsx
import { Switch } from "orbit-ds"
import { Label } from "orbit-ds"

<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

### RadioGroup

```tsx
import { RadioGroup, RadioGroupItem } from "orbit-ds"
import { Label } from "orbit-ds"

<RadioGroup defaultValue="option-a">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-a" id="opt-a" />
    <Label htmlFor="opt-a">Option A</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-b" id="opt-b" />
    <Label htmlFor="opt-b">Option B</Label>
  </div>
</RadioGroup>
```

### Textarea

```tsx
import { Textarea } from "orbit-ds"

<Textarea placeholder="Write something..." rows={4} />
```

### Slider

```tsx
import { Slider } from "orbit-ds"

<Slider defaultValue={[50]} min={0} max={100} step={1} />
```

### Progress

```tsx
import { Progress } from "orbit-ds"

<Progress value={75} />
```

### Skeleton

```tsx
import { Skeleton } from "orbit-ds"

<Skeleton className="h-4 w-48" />
<Skeleton className="h-10 w-full rounded-xl" />
```

### Spinner

```tsx
import { Spinner } from "orbit-ds"

<Spinner />
<Spinner className="size-6 text-primary" />
```

### Tooltip

```tsx
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "orbit-ds"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild><Button variant="ghost" size="icon"><InfoIcon /></Button></TooltipTrigger>
    <TooltipContent>Helpful information</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent } from "orbit-ds"

<Popover>
  <PopoverTrigger asChild><Button>Open popover</Button></PopoverTrigger>
  <PopoverContent>Popover content here.</PopoverContent>
</Popover>
```

### HoverCard

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from "orbit-ds"

<HoverCard>
  <HoverCardTrigger asChild><span className="underline cursor-pointer">@username</span></HoverCardTrigger>
  <HoverCardContent>User profile card content</HoverCardContent>
</HoverCard>
```

### DropdownMenu

```tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "orbit-ds"

<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="outline">Options</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### ContextMenu

```tsx
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "orbit-ds"

<ContextMenu>
  <ContextMenuTrigger className="border rounded-lg p-8">Right-click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

### Combobox

```tsx
import { Combobox } from "orbit-ds"

// Combobox is a searchable select. Check stories for full usage.
<Combobox
  options={[{ value: "react", label: "React" }, { value: "vue", label: "Vue" }]}
  placeholder="Select framework..."
/>
```

### Command

```tsx
import { Command, CommandInput, CommandList, CommandGroup, CommandItem, CommandEmpty } from "orbit-ds"

<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Dashboard</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

### Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from "orbit-ds"

<Table>
  <TableCaption>User list</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Alice</TableCell>
      <TableCell>alice@example.com</TableCell>
      <TableCell><Badge>Admin</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Breadcrumb

```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "orbit-ds"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/settings">Settings</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Profile</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

### Pagination

```tsx
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "orbit-ds"

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>
```

### NavigationMenu

```tsx
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "orbit-ds"

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/products">All Products</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

### Sidebar

```tsx
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from "orbit-ds"

<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Logo</SidebarHeader>
    <SidebarContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton isActive>Dashboard</SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>Settings</SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    <SidebarFooter>User info</SidebarFooter>
  </Sidebar>
  <main>
    <SidebarTrigger />
    {/* page content */}
  </main>
</SidebarProvider>
```

### Menubar

```tsx
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "orbit-ds"

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New</MenubarItem>
      <MenubarItem>Open</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Exit</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

### Calendar / DatePicker

```tsx
import { Calendar } from "orbit-ds"

const [date, setDate] = React.useState<Date | undefined>()

<Calendar mode="single" selected={date} onSelect={setDate} />
```

### Carousel

```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "orbit-ds"

<Carousel>
  <CarouselContent>
    <CarouselItem><div className="p-8 bg-muted rounded-xl">Slide 1</div></CarouselItem>
    <CarouselItem><div className="p-8 bg-muted rounded-xl">Slide 2</div></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Chart (Recharts wrapper)

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "orbit-ds"
import { BarChart, Bar, XAxis } from "recharts"

const data = [{ month: "Jan", value: 400 }, { month: "Feb", value: 300 }]
const config = { value: { label: "Value", color: "var(--chart-1)" } }

<ChartContainer config={config} className="h-48">
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="value" fill="var(--chart-1)" radius={4} />
  </BarChart>
</ChartContainer>
```

### Toast (Sonner)

```tsx
import { Toaster } from "orbit-ds"
import { toast } from "sonner"

// In layout:
<Toaster />

// Trigger:
toast("File saved successfully")
toast.error("Something went wrong")
toast.success("Profile updated")
```

### Collapsible

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "orbit-ds"

<Collapsible>
  <CollapsibleTrigger asChild><Button variant="ghost">Toggle</Button></CollapsibleTrigger>
  <CollapsibleContent>Hidden content revealed.</CollapsibleContent>
</Collapsible>
```

### ScrollArea

```tsx
import { ScrollArea } from "orbit-ds"

<ScrollArea className="h-64 rounded-xl border">
  {/* long content */}
</ScrollArea>
```

### Resizable

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "orbit-ds"

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>Left</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>Right</ResizablePanel>
</ResizablePanelGroup>
```

### Separator

```tsx
import { Separator } from "orbit-ds"

<Separator />
<Separator orientation="vertical" className="h-6" />
```

### Toggle / ToggleGroup

```tsx
import { Toggle } from "orbit-ds"
import { ToggleGroup, ToggleGroupItem } from "orbit-ds"

// variant: "default" | "outline"  size: "default" | "sm" | "lg"
<Toggle variant="outline">Bold</Toggle>

<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
```

### ButtonGroup

```tsx
import { ButtonGroup } from "orbit-ds"
import { Button } from "orbit-ds"

<ButtonGroup>
  <Button variant="outline">Cut</Button>
  <Button variant="outline">Copy</Button>
  <Button variant="outline">Paste</Button>
</ButtonGroup>
```

### InputGroup

```tsx
import { InputGroup, InputGroupText } from "orbit-ds"
import { Input } from "orbit-ds"

<InputGroup>
  <InputGroupText>https://</InputGroupText>
  <Input placeholder="example.com" />
</InputGroup>
```

### Field (form field wrapper)

```tsx
import { Field } from "orbit-ds"
import { Label } from "orbit-ds"
import { Input } from "orbit-ds"

<Field>
  <Label>Email</Label>
  <Input type="email" placeholder="you@example.com" />
</Field>
```

### InputOTP

```tsx
import { InputOTP, InputOTPGroup, InputOTPSlot } from "orbit-ds"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

### NativeSelect

```tsx
import { NativeSelect } from "orbit-ds"

<NativeSelect>
  <option value="">Choose one</option>
  <option value="a">Option A</option>
  <option value="b">Option B</option>
</NativeSelect>
```

### AspectRatio

```tsx
import { AspectRatio } from "orbit-ds"

<AspectRatio ratio={16 / 9}>
  <img src="/hero.jpg" alt="Hero" className="rounded-xl object-cover w-full h-full" />
</AspectRatio>
```

### Empty (empty state)

```tsx
import { Empty } from "orbit-ds"

<Empty
  title="No results found"
  description="Try adjusting your search or filters."
  action={<Button>Clear filters</Button>}
/>
```

### Item (list item)

```tsx
import { Item } from "orbit-ds"

<Item>List item content</Item>
```

### Kbd (keyboard key)

```tsx
import { Kbd } from "orbit-ds"

<span>Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open search</span>
```

### Icon

```tsx
import { Icon } from "orbit-ds"

<Icon name="house" />
<Icon name="star" size={24} />
```

### Label

```tsx
import { Label } from "orbit-ds"

<Label htmlFor="email">Email address</Label>
```

### Direction (RTL/LTR)

```tsx
import { Direction } from "orbit-ds"

<Direction dir="rtl">
  {/* RTL content */}
</Direction>
```

### ThemeProvider

```tsx
import { ThemeProvider } from "next-themes"

// In root layout:
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

---

## Icons (Phosphor, 1 514 total)

Import directly from `@phosphor-icons/react`. All icons support `size`, `weight`, and `color` props.

```tsx
import { House, Star, User, Bell, Search, Settings, ChevronRight } from "@phosphor-icons/react"

// weight: "thin" | "light" | "regular" | "bold" | "fill" | "duotone"
<House weight="bold" size={24} />
<Star weight="fill" className="text-primary" />
<Bell weight="regular" size={20} />
```

**Common icon names**: `House`, `User`, `Bell`, `Search`, `Settings`, `Gear`, `ChevronRight`, `ChevronDown`, `X`, `Plus`, `Minus`, `Check`, `ArrowRight`, `ArrowLeft`, `Star`, `Heart`, `Trash`, `Pencil`, `Eye`, `EyeSlash`, `Lock`, `Unlock`, `Info`, `Warning`, `Question`, `Spinner`, `DotsThree`, `DotsThreeVertical`, `MagnifyingGlass`, `UploadSimple`, `DownloadSimple`, `Share`, `Copy`, `Clipboard`, `File`, `Folder`, `Image`, `Video`, `Globe`, `Phone`, `Envelope`, `Calendar`, `Clock`, `Tag`, `Filter`, `SortAscending`, `SortDescending`

---

## Utility Function

```tsx
import { cn } from "orbit-ds/lib/utils"
// or define locally:
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
const cn = (...inputs) => twMerge(clsx(inputs))

// Usage:
<div className={cn("rounded-lg p-4", isActive && "bg-primary text-primary-foreground")} />
```

---

## Component Selection Guide

| Need | Component |
|---|---|
| Primary action | `<Button variant="default">` |
| Secondary/cancel | `<Button variant="outline">` or `<Button variant="ghost">` |
| Danger action | `<Button variant="destructive">` |
| Status indicator | `<Badge>` |
| Confirmation modal | `<AlertDialog>` |
| General modal | `<Dialog>` |
| Slide-in panel | `<Sheet>` or `<Drawer>` |
| Dropdown options | `<DropdownMenu>` |
| Right-click menu | `<ContextMenu>` |
| Searchable select | `<Combobox>` |
| Static select | `<Select>` or `<NativeSelect>` |
| Command palette | `<Command>` |
| Data display | `<Table>` |
| Content sections | `<Tabs>` |
| FAQ / expandable | `<Accordion>` |
| Form field | `<Field>` + `<Label>` + `<Input>` |
| Multi-line input | `<Textarea>` |
| Toggle on/off | `<Switch>` |
| Pick one | `<RadioGroup>` |
| Pick multiple | `<Checkbox>` (multiple) |
| Date select | `<Calendar>` |
| Loading state | `<Skeleton>` or `<Spinner>` |
| Empty state | `<Empty>` |
| Notification | `toast()` from `sonner` |
| Hover info | `<Tooltip>` |
| Click for more | `<Popover>` |
| Profile preview | `<HoverCard>` |
| Navigation | `<NavigationMenu>`, `<Sidebar>`, `<Breadcrumb>`, `<Menubar>` |
| Data chart | `<ChartContainer>` + Recharts |
| Image gallery | `<Carousel>` |
| Long list | `<ScrollArea>` |
| Side-by-side panels | `<Resizable>` |
| OTP / PIN | `<InputOTP>` |

---

## Usage Rules

1. **Always import from `"orbit-ds"`**, never from internal paths like `"orbit-ds/src/components/ui/button"`.
2. **Always use design tokens** (CSS variables / Tailwind token utilities) — never hardcode raw color values.
3. **Use `asChild` prop** when you need a component to render as a different element (e.g., `<Button asChild><a>` for link buttons).
4. **Dark mode** is handled automatically via the `.dark` class — tokens switch values, no manual dark overrides needed.
5. **Icons**: prefer importing from `@phosphor-icons/react` directly; use the `weight="fill"` variant for active/selected states.
6. **Fonts**: Geist (body), Figtree (headings) are loaded via Google Fonts in `globals.css` — use `font-heading` class for headings.

---

## Installation

```bash
# Install the package
npm install orbit-ds

# Add globals.css import to your layout
import "orbit-ds/styles/globals.css"

# Add ThemeProvider to root layout
import { ThemeProvider } from "next-themes"
```

---

## Storybook

Run stories to preview all components interactively:

```bash
npm run storybook   # starts on http://localhost:6006
```

Stories location: `stories/` — one file per component (59 stories total).
