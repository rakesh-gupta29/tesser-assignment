"use client";

import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import styles from "./Table.module.css";
import Trash from "../icons/Trash";
import Checkbox from "../Checkbox/Checkbox";
import Order from "../icons/Order";

export type RowData = {
  id: string;
  title: string;
};

const columnHelper = createColumnHelper<RowData>();

export function DataTable({ data }: { data: RowData[] }) {
  const [rowSelection, setRowSelection] = useState({});

  const columns = [
    columnHelper.display({
      id: "select",
      header: ({ table }) => (
        <Checkbox
          withOutline
          id="select-all"
          label=""
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          id={row.id}
          label=""
          withOutline
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    }),
    columnHelper.accessor("id", {
      header: () => (
        <span className={styles.header}>
          Header
          <Order style={{ color: "var(--text-50)" }} />
        </span>
      ),
      cell: () => <span className={styles.link}>Link</span>,
    }),
    columnHelper.accessor("title", {
      header: () => (
        <span className={styles.header}>
          Header
          <Order style={{ color: "var(--text-50)" }} />
        </span>
      ),
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: "actions",
      header: () => (
        <span className={styles.actionHeader}>
          <Order style={{ color: "var(--text-50)" }} />
          Header
        </span>
      ),
      cell: () => (
        <button className={styles.deleteButton}>
          <Trash height={16} width={16} />
          Delete
        </button>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
