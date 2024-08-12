// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { BellRing, Check, Plus, Edit, Trash } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Button as AntdButton} from 'antd'


// const AdminUsers = () => {
//   const [open, setOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const invoices = [
//     {
//       dept: "CSE",
//       class: "C",
//       tutor: "Mr.ABCD",
//       strength: "64",
//       tt: "View",
//       generate: "Generate",
//     },
//     {
//       dept: "CSE",
//       class: "A",
//       tutor: "Mr.EFGH",
//       strength: "60",
//       tt: "View",
//       generate: "Generate",

//     }
//   ];

//   const filteredInvoices = invoices.filter((invoice) =>
//     invoice.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.tutor.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.strength.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     invoice.tt.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleEdit = (invoiceId) => {
//     console.log(`Editing ${invoiceId}`);
//     setOpen(true);
//   };

//   const handleRemove = (invoiceId) => {
//     console.log(`Removing ${invoiceId}`);
//   };

//   return (
//     <>
//       <Card className='h-full w-full border-none font-mono'>
//         <CardHeader className='w-full flex flex-row justify-between items-center'>
//           <CardTitle>Class Details</CardTitle>
//           <div className='flex items-center gap-4'>
//             <Input 
//               type='text' 
//               placeholder='Search...'
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className='w-64'
//             />
//             <Button 
//               onClick={()=>setOpen(!open)} 
//               className='bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2'
//             >
//               <Plus className='h-5 w-5' /> Add
//             </Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Department</TableHead>
//                 <TableHead>Class</TableHead>
//                 <TableHead>Tutor</TableHead>
//                 <TableHead >Strength</TableHead>
//                 <TableHead >Generate</TableHead>
//                 <TableHead >Timetable</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredInvoices.map((invoice, index) => (
//                 <TableRow key={index}>
//                   <TableCell className="font-medium">{invoice.dept}</TableCell>
//                   <TableCell>{invoice.class}</TableCell>
//                   <TableCell>{invoice.tutor}</TableCell>
//                   <TableCell >{invoice.strength}</TableCell>
//                   <TableCell ><AntdButton className='font-mono'>{invoice.generate}</AntdButton></TableCell>
//                   <TableCell ><AntdButton className='font-mono'>{invoice.tt}</AntdButton></TableCell>
//                   <TableCell className="flex justify-end gap-2">
//                     <Button variant="ghost" onClick={() => handleEdit(index)}>
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" onClick={() => handleRemove(index)}>
//                       <Trash className="h-4 w-4" />
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       <Sheet open={open} onOpenChange={setOpen}>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>Edit Class</SheetTitle>
//             <SheetDescription>
//               Click save when you're done.
//             </SheetDescription>
//           </SheetHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="name" className="text-right">
//                 Department
//               </Label>
//               <Input id="name" value="Pedro Duarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Class
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Tutor
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Strength
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//           </div>
//           <SheetFooter className='flex flex-col flex-1'>
//             <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={()=>setOpen(!open)}>Cancel</Button>
//             <Button type="submit" className='w-1/2'>Save changes</Button>
//           </SheetFooter>
//         </SheetContent>
//       </Sheet>
//     </>
//   )
// }

// export default AdminUsers;

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BellRing, Check, Plus, Edit, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button as AntdButton } from 'antd';

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formValues, setFormValues] = useState({
    dept: '',
    class: '',
    tutor: '',
    strength: '',
    tt:'view',
    generate:'Generate'
  });

  const [invoices, setInvoices] = useState([
    {
      dept: "CSE",
      class: "C",
      tutor: "Mr.ABCD",
      strength: "64",
      tt: "View",
      generate: "Generate",
    },
    {
      dept: "CSE",
      class: "A",
      tutor: "Mr.EFGH",
      strength: "60",
      tt: "View",
      generate: "Generate",
    }
  ]);

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.tutor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.strength.toLowerCase().includes(searchQuery.toLowerCase()) ||
    invoice.tt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFormValues(invoices[index]);
    setOpen(true);
  };

  const handleRemove = (index) => {
    setInvoices(invoices.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    setSelectedIndex(null);
    setFormValues({
      dept: '',
      class: '',
      tutor: '',
      strength: '',
      tt:'View',
    generate:'Generate'
    });
    setOpen(true);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSave = () => {
    if (selectedIndex !== null) {
      // Edit existing invoice
      setInvoices(invoices.map((invoice, index) =>
        index === selectedIndex ? formValues : invoice
      ));
    } else {
      // Add new invoice
      setInvoices([...invoices, formValues]);
    }
    setOpen(false);
  };

  return (
    <>
      <Card className='h-full w-full border-none font-mono'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Class Details</CardTitle>
          <div className='flex items-center gap-4'>
            <Input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-64'
            />
            <Button
              onClick={handleAdd}
              className='bg-blue-500 text-white hover:bg-blue-600 flex items-center gap-2'
            >
              <Plus className='h-5 w-5' /> Add
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Tutor</TableHead>
                <TableHead>Strength</TableHead>
                <TableHead>Generate</TableHead>
                <TableHead>Timetable</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInvoices.map((invoice, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{invoice.dept}</TableCell>
                  <TableCell>{invoice.class}</TableCell>
                  <TableCell>{invoice.tutor}</TableCell>
                  <TableCell>{invoice.strength}</TableCell>
                  <TableCell><AntdButton className='font-mono'>{invoice.generate}</AntdButton></TableCell>
                  <TableCell><AntdButton className='font-mono'>{invoice.tt}</AntdButton></TableCell>
                  <TableCell className="flex justify-end gap-2">
                    <Button variant="ghost" onClick={() => handleEdit(index)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" onClick={() => handleRemove(index)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{selectedIndex !== null ? 'Edit Class' : 'Add Class'}</SheetTitle>
            <SheetDescription>
              Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dept" className="text-right">
                Department
              </Label>
              <Input id="dept" value={formValues.dept} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="class" className="text-right">
                Class
              </Label>
              <Input id="class" value={formValues.class} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tutor" className="text-right">
                Tutor
              </Label>
              <Input id="tutor" value={formValues.tutor} onChange={handleChange} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="strength" className="text-right">
                Strength
              </Label>
              <Input id="strength" value={formValues.strength} onChange={handleChange} className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" className='w-1/2' onClick={handleSave}>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default AdminUsers;
